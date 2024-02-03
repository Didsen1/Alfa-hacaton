import type { FC } from 'react';
import ChartIcon from 'shared/icons/chart-with-up-arrow.svg?react';
import CrosshairIcon from 'shared/icons/crosshair-icon.svg?react';
import style from './Navbar.module.scss';
import NavbarLink from '../NavbarLink/NavbarLink';
import BackButton from '../BackButton/BackButton';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <nav className={style.Navbar}>
    <BackButton />
    <NavbarLink to="/analytics" text="ИПР" Icon={CrosshairIcon} />
    <NavbarLink to="/quotes" text="Аналитика" Icon={ChartIcon} />
  </nav>
);

export default Navbar;
