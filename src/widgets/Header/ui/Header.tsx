import type { FC } from 'react';
import { Circle } from '@alfalab/core-components-icon-view/circle';
import { Typography } from '@alfalab/core-components-typography';
import { Link } from 'react-router-dom';
import { IconButton } from '@alfalab/core-components-icon-button';
import BellMIcon from '@alfalab/icons-glyph/BellMIcon';
import alfaLogo from 'shared/icons/alfa-logo.svg';
import logo from 'shared/icons/logo.svg';
import Search from 'components/Search';
import style from './Header.module.scss';

const Header: FC = () => (
  <header className={style.Header}>
    <nav>
      <Link to="/" className={style.logoWrapper}>
        <Circle size={48} imageUrl={alfaLogo} />
        <Typography.TitleResponsive view="small" tag="div" font="system">
          Alfa People
        </Typography.TitleResponsive>
      </Link>
      <Link to="" className={style.link}>
        Контакты
      </Link>
      <Link to="" className={style.link}>
        Всё о работе
      </Link>
      <Link to="" className={style.link}>
        Подразделения
      </Link>
    </nav>
    <div className={style.searchWrapper}>
      <Search width={175} height={40} />
      <IconButton size={40} style={{ backgroundColor: '#F0F0F0', borderRadius: '100%' }} icon={BellMIcon} />
      <Circle size={40} imageUrl={logo} />
    </div>
  </header>
);

export default Header;
