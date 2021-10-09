import {combineReducers} from 'redux';

import reducerArticles, { TArticlesState } from '@store/reducer-articles';

export type TGlobalState = {
  articles: TArticlesState
};

const reducer = combineReducers({
  articles: reducerArticles
});

export default reducer;
