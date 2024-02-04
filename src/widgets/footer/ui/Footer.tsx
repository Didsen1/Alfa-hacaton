import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@alfalab/core-components-divider';
import mobileLogo from 'shared/icons/alfa_mobile_logo.svg';
import telegram from 'shared/icons/telegram.svg';
import vk from 'shared/icons/vk.svg';
import youtube from 'shared/icons/youtube.svg';
import style from './Footer.module.scss';

const Footer: FC = () => (
  <footer className={style.Footer}>
    <Divider className={style.divider} />
    <nav className={style.navTextLink}>
      <ul className={style.ulTextLink}>
        <li className={style.linkWrapper}>
          <Link className={style.link} to="/">
            Главная
          </Link>
        </li>
        <li className={style.linkWrapper}>
          <Link className={style.link} to="/">
            Сервис
          </Link>
        </li>
        <li className={style.linkWrapper}>
          <Link className={style.link} to="/">
            Контакты
          </Link>
        </li>
      </ul>
      <ul className={style.ulTextLink}>
        <li className={style.linkWrapper}>
          <Link className={style.link} to="/">
            Подразделение
          </Link>
        </li>
        <li className={style.linkWrapper}>
          <Link className={style.link} to="/">
            Всё о работе
          </Link>
        </li>
        <li className={style.linkWrapper}>
          <Link className={style.link} to="/">
            Академия
          </Link>
        </li>
      </ul>
      <ul className={style.ulTextLink}>
        <li className={style.linkWrapper}>
          <Link className={style.link} to="/">
            SAP АХД
          </Link>
        </li>
        <li className={style.linkWrapper}>
          <Link className={style.link} to="/">
            Заказ HR-услуг
          </Link>
        </li>
        <li className={style.linkWrapper}>
          <Link className={style.link} to="/">
            Академия
          </Link>
        </li>
      </ul>
      <ul className={style.ulTextLink}>
        <li className={style.linkWrapper}>
          <Link className={style.link} to="/">
            WSS Docs
          </Link>
        </li>
        <li className={style.linkWrapper}>
          <Link className={style.link} to="/">
            Карьера в банке
          </Link>
        </li>
        <li className={style.linkWrapper}>
          <Link className={style.link} to="/">
            Сайт Альфа Банка
          </Link>
        </li>
      </ul>
      <div className={style.imgLinkWrapper}>
        <div className={style.mobileContainer}>
          <img src={mobileLogo} alt="Mobile Logo" />
          <div>
            <p>Мобильное приложение</p>
            <p className={style.pWhite}>Для IOS и Android</p>
          </div>
        </div>
        <nav>
          <ul className={style.ulRow}>
            <li>
              <Link to="/">
                <img src={telegram} alt="telegram" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={vk} alt="vk" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={youtube} alt="youtube" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
    <Divider className={style.divider} />
    <div className={style.helpWrapper}>
      <div>
        <p>011-1111 - Help Desk | IT-поодержка</p>
        <p>013-3777 - Human Help | HR-поддержка</p>
      </div>
      <button type="button">Помощь</button>
    </div>
  </footer>
);

export default Footer;
