import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavbarLink.module.scss';

interface NavbarLinkProps {
  text: string;
  to: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const NavbarLink: FC<NavbarLinkProps> = ({ text, to, Icon }) => (
  <NavLink to={to} end className={({ isActive }) => [isActive ? style.active : '', style.NavbarLink].join(' ')}>
    {Icon && <Icon />}
    {text}
  </NavLink>
);

export default NavbarLink;
