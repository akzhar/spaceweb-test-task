import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import { AppRoute } from '@consts/const';
import userIconPath from '@assets/img/icons/user-icon.svg';
import vpsIconPath from '@assets/img/icons/vps-icon.svg';
import domainIconPath from '@assets/img/icons/domain-icon.svg';
import articleIconPath from '@assets/img/icons/article-icon.svg';

type TRoute = {
  title: string
  url: AppRoute,
  iconPath: string
};

const routes: TRoute[] = [
  {
    title: 'Аккаунт',
    url: AppRoute.ACCOUNT,
    iconPath: userIconPath
  },
  {
    title: 'VPS',
    url: AppRoute.VPS,
    iconPath: vpsIconPath
  },
  {
    title: 'Домены',
    url: AppRoute.DOMAINS,
    iconPath: domainIconPath
  },
  {
    title: 'Бортовой журнал',
    url: AppRoute.ARTICLES,
    iconPath: articleIconPath
  }
];

const AppNavigation: React.FC = () => {

  const { pathname } = useLocation();
  const [activeRoute, setActiveRoute] = useState<string>(pathname)

  useEffect(() => {
    setActiveRoute(pathname);
  }, [pathname]);

  return (
    <ul className="app-navigation">
      {routes.map(route => (
        <li key={route.title}>
          <Link
            className={`app-navigation__link ${(activeRoute === route.url) && 'app-navigation__link--active'}`}
            to={route.url}
          >
            <div className="app-navigation__icon">
              <img src={route.iconPath} alt={route.title} width="16" height="16" />
            </div>
            <span>{route.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AppNavigation;
