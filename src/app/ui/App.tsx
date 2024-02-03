import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Header from 'widgets/Header';
import Sidebar from 'widgets/Sidebar';
import { OpenTask } from 'entities/tasks';
import Footer from 'widgets/footer';
import { EmployeeList, getAllEmployees } from 'entities/employees';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { useEffect, useLayoutEffect } from 'react';
import { checkAuth } from 'entities/user';
import style from './App.module.scss';

const App = () => {
  const dispatch = useAppDispatch();
  const { type } = useAppSelector((state) => state.user);

  useLayoutEffect(() => {
    dispatch(checkAuth());    
  }, [dispatch, type]);

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  return (
    <div className={style.App}>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
