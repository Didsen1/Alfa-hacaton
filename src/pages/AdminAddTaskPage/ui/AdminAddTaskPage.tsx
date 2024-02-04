import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@alfalab/core-components-typography';
import Navbar from 'widgets/Navbar';
import PlanPanel from 'widgets/PlanPanel/index';
import { ButtonDesktop } from '@alfalab/core-components-button/desktop';
import AllTasks from 'widgets/TaskList/AllTasks/index';
import style from './AdminAddTaskPage.module.scss';
import { data } from 'utils/dataTasks';

const AdminAddTaskPage = () => {
  const { pathname } = useLocation();
  const employee = {
    full_name: 'Васильев Максим Валерьевич',
    position: 'Frontend-разрабочик',
    photo: 'https://i.pinimg.com/originals/e3/b2/ac/e3b2ac1ea45a34ed4281437788017519.jpg',
  };

  return (
    <main className={style.adminAddTask}>
      <div className={style.widgets}>
        <Navbar />
        <PlanPanel expired_at="12.12.2022" aim="узнать чт такое ИПР" employee={employee} />
      </div>
      <section className={style.section}>
        <Typography.Title tag="h2" className={style.h2}>
          Сотрудник
        </Typography.Title>
        <ButtonDesktop view="accent" className={style.button}>
          Добавить задачу
        </ButtonDesktop>
        <AllTasks data={data} />
      </section>
    </main>
  );
};

export default AdminAddTaskPage;
