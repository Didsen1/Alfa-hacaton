import { Outlet } from 'react-router-dom';
import Header from 'widgets/Header';
import { getAllEmployees } from 'entities/employees';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { useEffect, useLayoutEffect } from 'react';
import { checkAuth } from 'entities/user';
import Footer from 'widgets/footer';
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
