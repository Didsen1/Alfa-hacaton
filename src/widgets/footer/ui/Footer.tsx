import type { FC } from 'react';
import { Link } from 'react-router-dom';

import mobileLogo from "../../../shared/icons/alfa_mobile_logo.svg"
import telegram from "../../../shared/icons/telegram.svg"
import vk from "../../../shared/icons/vk.svg"
import youtube from "../../../shared/icons/youtube.svg"

import style from "./Footer.module.scss"

const Footer: FC = () => (

  <footer className={style.Footer}>
    <nav className=''>
      <ul>
        <li><Link to='/'>Главная</Link></li>
        <li><Link to='/'>Сервис</Link></li>
        <li><Link to='/'>Контакты</Link></li>
      </ul>
      <ul>
        <li><Link to='/'>Подразделение</Link></li>
        <li><Link to='/'>Всё о работе</Link></li>
        <li><Link to='/'>Академия</Link></li>
      </ul>
      <ul>
        <li><Link to='/'>SAP АХД</Link></li>
        <li><Link to='/'>Заказ HR-услуг</Link></li>
        <li><Link to='/'>Академия</Link></li>
      </ul>
      <ul>
        <li><Link to='/'>WSS Docs</Link></li>
        <li><Link to='/'>Карьера в банке</Link></li>
        <li><Link to='/'>Сайт Альфа Банка</Link></li>
      </ul>
      <div>
        <div>
          <img src={mobileLogo} alt='Mobile Logo' />
          <div>
            <span>Мобильное приложение</span>
            <span>Для IOS и Android</span>
          </div>
          <Link to="/"><img src={telegram} alt='telegram' /></Link>
          <Link to="/"><img src={vk} alt='vk' /></Link>
          <Link to="/"><img src={youtube} alt='youtube' /></Link>
        </div>

      </div>*
    </nav>
    <div>
      <div>
        <p>011-1111 - Help Desk | IT-поодержка</p>
        <p>013-3777 - Human Help | HR-поддержка</p>
      </div>
      <button type='button'>Помощь</button>
    </div>
  </footer>

);

export default Footer;