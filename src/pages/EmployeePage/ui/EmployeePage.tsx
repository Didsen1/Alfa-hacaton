import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@alfalab/core-components-typography';
import Navbar from 'widgets/Navbar';
import EmployeePlanPanel from 'widgets/EmployeePlanPanel/index';
import TaskCounter from 'widgets/TaskCounter/ui/TaskCounter';
import TaskList from 'widgets/TaskList/ui/TaskList';
import Counter from 'widgets/TaskCounter/ui/Counter/ui/Counter';
import style from './EmployeePage.module.scss';

const EmployeePage = () => {
  const { pathname } = useLocation();
  const supervisor = { full_name: 'Васильев Максим Валерьевич', position: 'Frontend-разрабочик' };

  return (
    <main className={style.employeePage}>
      <div className={style.widgets}>
        <Navbar />
        <EmployeePlanPanel expired_at={'12.12.2022'} aim={'узнать чт такое ИПР'} supervisor={supervisor} />
      </div>
      <section>
        <Typography.Title tag="h2" className={style.h2}>
          ИПР
        </Typography.Title>
        <TaskCounter>
          <Counter title="Все задачи" quantity="1" />
          <Counter title="Новые задачи" quantity="0" />
          <Counter title="Новые комментарии" quantity="5" />
          <Counter title="Просроченные задачи" quantity="5" />
        </TaskCounter>
        <TaskList />
      </section>
    </main>
  );
};

export default EmployeePage;
