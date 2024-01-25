import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from 'widgets/Header';
import logo from 'shared/icons/alfa-logo.svg'
import style from './App.module.scss';

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.App}>
      <Header />
      {pathname === '/' && (
        <>
          <Link to="/counter">Counter</Link>
          <Link to="/quotes">Quotes</Link>
        </>
      )}
      <Outlet />

      <footer>
        <p>footer</p>
        <img src={logo} className={style.Applogo} alt="logo" />
      </footer>
    </div>
  );
};

export default App;
