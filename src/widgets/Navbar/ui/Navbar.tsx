import type { FC } from 'react';
import style from './Navbar.module.scss';
import NavbarLink from '../NavbarLink/NavbarLink';
import BackButton from '../BackButton/BackButton';

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children }) => (
  <nav className={style.Navbar}>
    <BackButton />
    {children}
  </nav>
);

export default Navbar;
