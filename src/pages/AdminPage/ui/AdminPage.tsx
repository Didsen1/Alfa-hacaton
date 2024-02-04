import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonDesktop } from '@alfalab/core-components-button/desktop';
import { Typography } from '@alfalab/core-components-typography';
import Navbar, { NavbarLink } from 'widgets/Navbar';
import { Counter, TaskCounter } from 'widgets/TaskCounter';
import Search from 'widgets/Search';
import { EmployeeList } from 'entities/employees';
import ChartIcon from 'shared/icons/chart-with-up-arrow.svg?react';
import CrosshairIcon from 'shared/icons/crosshair-icon.svg?react';
import style from './AdminPage.module.scss';

const AdminPage: FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar>
        <NavbarLink to="/Admin" text="ИПР" Icon={CrosshairIcon} />
        <NavbarLink to="/Admin/Analytics" text="Аналитика" Icon={ChartIcon} />
      </Navbar>
      <section className={style.SupervisorPage}>
        <Typography.Title tag="h2" className={style.h2}>
          ИПР
        </Typography.Title>
        <TaskCounter>
          <Counter title="Всего ИПР" quantity={1} />
          <Counter title="Ожидание проверки" quantity={1} />
          <Counter title="Новые комментарии" quantity={1} />
        </TaskCounter>
        <ButtonDesktop view="accent" className={style.button}>
          Добавить ИПР
        </ButtonDesktop>
        <div>
          <Typography.Title tag="h3" className={style.h3}>
            Сотрудники
          </Typography.Title>
          <div>
            <Search />
          </div>
          <EmployeeList />
        </div>
      </section>
    </>
  );
};

export default AdminPage;
