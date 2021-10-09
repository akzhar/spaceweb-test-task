import { ActionTypes, TAction } from '@store/actions';

export type TArticle = {
  title: string,
  body: string
};

export type TArticlesState = {
  items: TArticle[]
};

const initialArticlesState: TArticlesState = {
  items: []
};

const reducerArticles = (
    state: TArticlesState = initialArticlesState,
    action: TAction
  ) => {
  switch (action.type) {
    case ActionTypes.DOWNLOAD_ARTICLES:
      return {...state, items: action.payload};
    default:
      return {...state};
  }
};


export default reducerArticles;
