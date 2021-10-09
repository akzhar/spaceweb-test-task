/* eslint-disable no-irregular-whitespace */
import React from 'react';

const AppFooter: React.FC = () => (
  <div className="app-footer">
    <p className="app-footer__copyrights">
      © 2001– 2018 <a href="https://sweb.ru">ООО «СпейсВэб»</a><br/>
      Все права защищены.<br/>
      Лицензия <a href="https://sweb.ru/documents/#%D1%81ertificates">№163230</a>
    </p>
    <ul className="app-footer__contacts">
      <li><a href="tel:+78123341222">+7 (812) 334-12-22</a> (в Санкт-Петербурге)</li>
      <li><a href="tel:+74956631612">+7 (495) 663-16-12</a> (в Москве)</li>
      <li><a href="tel:+78001001615">(800) 100-16-15</a> (бесплатно по России)</li>
    </ul>
  </div>
);

export default AppFooter;
