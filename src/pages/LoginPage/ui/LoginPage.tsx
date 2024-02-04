import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'app/store/hooks';
import { login, type User } from 'entities/user';
import style from './LoginPage.module.scss';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (userType: User['type']) => {
    dispatch(login(userType));
  };

  return (
    <div className={style.LoginPage}>
      <Link className={style.link} to="/admin" onClick={() => handleLogin('superior')}>
        Руководитель
      </Link>
      <Link className={style.link} to="/plan" onClick={() => handleLogin('employee')}>
        Сотрудник
      </Link>
    </div>
  );
};

export default LoginPage;
