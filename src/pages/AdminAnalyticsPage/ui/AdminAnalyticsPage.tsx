import { useLocation } from 'react-router-dom';
import { Typography } from '@alfalab/core-components-typography';
import Analytics from 'widgets/Analytics';
import Navbar, { NavbarLink } from 'widgets/Navbar';
import { Counter, TaskCounter } from 'widgets/TaskCounter';
import CrosshairIcon from 'shared/icons/crosshair-icon.svg?react';
import ChartIcon from 'shared/icons/chart-with-up-arrow.svg?react';
import style from './AdminAnalytics.module.scss';

const AdminAnalyticsPage = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar>
        <NavbarLink to="/Admin" text="ИПР" Icon={CrosshairIcon} />
        <NavbarLink to="/Admin/Analytics" text="Аналитика" Icon={ChartIcon} />
      </Navbar>
      <section className={style.AdminAnalyticsPage}>
        <Typography.Title tag="h2" className={style.h2}>
          Аналитика
        </Typography.Title>
        <TaskCounter>
          <Counter title="Завершенные задачи" quantity="Большой" />
          <Counter title="Просроченные задачи" quantity="1" />
          <Counter title="Всего задач" quantity="1" />
        </TaskCounter>
        <Analytics />
      </section>
    </>
  );
};

export default AdminAnalyticsPage;
