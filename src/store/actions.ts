import { TGlobalState } from '@store/reducer';
import { ApiRoute } from '@consts/const';

export type TAction = {
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
};

export enum ActionTypes {
  DOWNLOAD_ARTICLES = 'download/articles'
}

function getArticlesFromXML(xml: XMLDocument) {
  const items = Array.from(xml.querySelectorAll('item'));
  const articles = items.map((item: Element) => (
    {
      title: item.getElementsByTagName('turbo:topic')[0].textContent,
      body: item.getElementsByTagName('turbo:content')[0].textContent
    }
  ));
  return articles;
}

export const ActionCreator = {
  downloadArticles: (
    onSuccess?: (resStatus: string) => void,
    onFail?: (resStatus: string) => void
  ) => (
    dispatch: (action: TAction) => void,
    _getState: () => TGlobalState
  ) => {
    fetch(
      ApiRoute.GET_ARTICLES,
      { headers: { 'Content-Type': 'text/plain' } }
    )
      .then(async (response) => {
        if (response.ok) {
          const str = await response.text();
          const xml = new window.DOMParser().parseFromString(str, 'text/xml');
          const articles = getArticlesFromXML(xml);
          dispatch({ type: ActionTypes.DOWNLOAD_ARTICLES, payload: articles });
          if (onSuccess) {
            onSuccess(response.statusText);
          }
        } else {
          if (onFail) {
            onFail(response.statusText);
          }
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
};
