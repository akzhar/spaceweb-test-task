import React, { useEffect } from 'react';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { ActionCreator } from '@store/actions';
import { TArticle } from '@store/reducer-articles'
import { TGlobalState } from '@store/reducer';
import Loader from '@components/loader';
import Article from '@components/article';

const onSuccess = (resStatus: string): void => {
  console.log('Articles download succeeded: ', resStatus);
}

const onFail = (resStatus: string): void => {
  console.error('Articles download error: ', resStatus);
}

type TArticlesListProps = {
  articles: TArticle[],
  downloadArticles: (onSuccess: (resStatus: string) => void, onFail: (resStatus: string) => void) => void
};

const ArticlesList: React.FC<TArticlesListProps> = (props: TArticlesListProps) => {

  const { articles, downloadArticles } = props;

  useEffect(() => {
    downloadArticles(onSuccess, onFail);
  }, []);

  return (
    <section className="articles-list">
      <h2>Бортовой журнал</h2>
      {
        !articles.length ?
        <Loader/> :
        articles.map((article, index) => (
          <Article key={index} title={article.title} body={article.body} />
        ))
      }
    </section>
  )
};

const mapStateToProps = (state: TGlobalState) => ({
  articles: state.articles.items
});

const mapDispatchToProps = (dispatch: ThunkDispatch<TGlobalState, void, AnyAction>) => ({
  downloadArticles: (
    onSuccess: (resStatus: string) => void,
    onFail: (resStatus: string) => void
  ) => {
    dispatch(ActionCreator.downloadArticles(onSuccess, onFail));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
