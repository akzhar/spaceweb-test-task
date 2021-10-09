import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '@consts/const';
import AppLogo from '@components/app-logo';
import AppMenu from '@components/app-menu';
import AppNavigation from '@components/app-navigation';
import AppFooter from '@components/app-footer';

type TLayoutProps = {
  title: string,
  children: React.ReactNode
};

const Layout: React.FC<TLayoutProps> = (props: TLayoutProps) => (
  <div className="layout">
    <div className="layout__wrapper">
      <aside className="layout__sidebar">
        <Link className="layout__logo" to={AppRoute.HOME}>
          <AppLogo/>
        </Link>
        <nav className="layout__navigation">
          <AppNavigation/>
        </nav>
      </aside>
      <header className="layout__header">
        <AppMenu/>
      </header>
      <main className="layout__content">
        <h1 className="layout__content-title">{props.title}</h1>
        {props.children}
      </main>
    </div>
    <footer className="layout__footer">
      <AppFooter/>
    </footer>
  </div>
);

export default Layout;
