import React from 'react';

import Layout from '@components/layout';
import ArticlesList from '@components/articles-list/ArticlesList';

const ArticlesPage: React.FC = () => (
  <Layout title="Бортовой журнал">
    <ArticlesList/>
  </Layout>
);

export default ArticlesPage;
