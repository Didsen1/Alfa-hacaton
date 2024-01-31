import { Outlet, useLocation } from 'react-router-dom';
import Header from 'widgets/Header';
import Sidebar from 'widgets/Sidebar';
import { OpenTask } from 'entities/tasks';
import Footer from 'widgets/footer';
import Navbar from 'widgets/Navbar';
import style from './App.module.scss';

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className={style.App}>
        <Header />

        <main>
          <Navbar />
          <Outlet />
        </main>

        <Footer />
      </div>

      <Sidebar>
        <OpenTask planId="12" taskId="3" />
      </Sidebar>
    </>
  );
};

export default App;
