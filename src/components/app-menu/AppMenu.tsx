import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '@consts/const';
import NotificationMenu from '@components/notification-menu/NotificationMenu';

const AppMenu: React.FC = () => (
  <ul className="app-menu">
    <li className="app-menu__item">
      <output>100.00 ₽</output>
    </li>
    <li className="app-menu__item">
      <NotificationMenu/>
    </li>
    <li className="app-menu__item">
      <Link to={AppRoute.LOGOUT}>Выйти</Link>
    </li>
  </ul>
);

export default AppMenu;
