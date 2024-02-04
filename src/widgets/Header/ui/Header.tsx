import { useState, type FC } from 'react';
import { Circle } from '@alfalab/core-components-icon-view/circle';
import { Typography } from '@alfalab/core-components-typography';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton } from '@alfalab/core-components-icon-button';
import BellMIcon from '@alfalab/icons-glyph/BellMIcon';
import alfaLogo from 'shared/icons/alfa-logo.svg';
import Avatar from 'shared/icons/avatar.svg?react';
import Search from 'widgets/Search';
import { useAppDispatch } from 'app/store/hooks';
import { logout } from 'entities/user';
import style from './Header.module.scss';

const Header: FC = () => {
  const [isHintOpen, setIsHintOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHintOpen(true);
  };

  const handleMouseLeave = () => {
    setIsHintOpen(false);
  };

  const handleClick = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
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
        <IconButton
          size={40}
          className={style.avatar}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          style={{ backgroundColor: '#F0F0F0', borderRadius: '100%' }}
          icon={Avatar}
        />
        {isHintOpen && <div className={style.hint}>Нажмите для выхода</div>}
      </div>
    </header>
  );
};

export default Header;
