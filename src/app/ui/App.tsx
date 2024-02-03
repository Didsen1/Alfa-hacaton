import { Outlet, useLocation } from 'react-router-dom';
import Header from 'widgets/Header';
import Footer from 'widgets/footer';
import Navbar from 'widgets/Navbar';
import TaskCounter from 'widgets/TaskCounter/ui/TaskCounter';
import TaskList from 'widgets/TaskList/ui/TaskList';
import style from './App.module.scss';

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.App}>
      <Header />
      <main>
        <Navbar />
        <div className={style.idp}>
          <TaskCounter />
          <TaskList />
        </div>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
