import { Outlet, useLocation } from 'react-router-dom';
import Header from 'widgets/Header';
import Footer from 'widgets/footer';
import logo from 'shared/icons/alfa-logo.svg';
import Navbar from 'widgets/Navbar';
import style from './App.module.scss';

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.App}>
      <Header />
      <main>
        <Navbar />
        <Outlet />
      </main>

      <Footer/>
    </div>
  );
};

export default App;
