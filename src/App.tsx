import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ArticlesPage from '@pages/articles';
import NotFoundPage from '@pages/not-found';
import { AppRoute } from '@consts/const';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={AppRoute.ARTICLES} exact>
        <ArticlesPage/>
      </Route>
      <Route>
        <NotFoundPage/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
