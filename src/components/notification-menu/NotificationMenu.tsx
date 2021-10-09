import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '@consts/const';
import bellIconPath from '@assets/img/icons/bell-icon.svg';

const NotificationMenu: React.FC = () => (
  <>
    <div className="notification-menu">
        <Link to={AppRoute.NOTIFICATIONS}>
          <output className="notification-menu__counter">1</output>
          <img src={bellIconPath} alt="notifications" width="15" height="17" />
        </Link>
    </div>
    <span>vikavishny</span>
  </>
);

export default NotificationMenu;
