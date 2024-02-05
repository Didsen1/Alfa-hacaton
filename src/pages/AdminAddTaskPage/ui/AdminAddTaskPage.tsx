import { useEffect, type FC, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Typography } from '@alfalab/core-components-typography';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import Navbar from 'widgets/Navbar';
import PlanPanel from 'widgets/PlanPanel/index';
import { ButtonDesktop } from '@alfalab/core-components-button/desktop';
import AllTasks from 'widgets/TaskList/AllTasks/index';
import { CreateTaskComponent } from 'entities/tasks';
import Sidebar from 'widgets/Sidebar';
import { getPlanById } from 'entities/plans';
import style from './AdminAddTaskPage.module.scss';

const AdminAddTaskPage: FC = () => {
  const dispatch = useAppDispatch();
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const { plan_id } = useParams();
  const plan = useAppSelector((state) => state.plans.currentPlan);

  useEffect(() => {
    dispatch(getPlanById(Number(plan_id)));
  }, [dispatch, plan_id]);

  const openCreateTaskModal = () => {
    setIsCreateTaskOpen(true);
  };

  const closeCreateTaskModal = () => {
    setIsCreateTaskOpen(false);
  };

  return (
    <>
      <div className={style.adminAddTask}>
        <div className={style.widgets}>
          <Navbar>
            <PlanPanel expires_at={plan?.expires_at} aim_description={plan?.aim_description} employee={plan?.employee} />
          </Navbar>
        </div>
        <section className={style.section}>
          <Typography.Title tag="h2" className={style.h2}>
            Сотрудник
          </Typography.Title>
          <ButtonDesktop onClick={openCreateTaskModal} view="accent" className={style.button}>
            Добавить задачу
          </ButtonDesktop>
          <AllTasks data={plan?.tasks} />
        </section>
      </div>
      <Outlet />
      <Sidebar shouldJustClose externalIsOpen={isCreateTaskOpen} externalSetIsOpen={setIsCreateTaskOpen} initOpen={false}>
        <CreateTaskComponent closeModal={closeCreateTaskModal} />
      </Sidebar>
    </>
  );
};

export default AdminAddTaskPage;
