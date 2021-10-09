import React from 'react';

import loaderPath from '@assets/img/loader.svg';

const Loader: React.FC = () => (
  <div className="loader">
    <img src={loaderPath} alt="Loading..." width="100" height="100" />
  </div>
);

export default Loader;
