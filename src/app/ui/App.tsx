import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from 'shared/icons/logo.svg';
import Footer from 'widgets/footer';
import style from './App.module.scss';

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.App}>
      <header className={style.Appheader}>
        <img src={logo} className={style.Applogo} alt="logo" />
        <p>header</p>
      </header>
      <Outlet />

      <Footer/>
    </div>
  );
};

export default App;
