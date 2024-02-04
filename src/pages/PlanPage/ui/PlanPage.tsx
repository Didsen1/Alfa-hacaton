import { type FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Typography } from '@alfalab/core-components-typography';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import Navbar from 'widgets/Navbar';
import EmployeePlanPanel from 'widgets/EmployeePlanPanel/index';
import TaskCounter from 'widgets/TaskCounter/ui/TaskCounter';
import TaskList from 'widgets/TaskList/ui/TaskList';
import Counter from 'widgets/TaskCounter/ui/Counter/ui/Counter';
import { getCurrentPlan } from 'entities/plans';
import { getAllTasks } from 'entities/tasks';
import { getUnreadCommentsCount } from 'entities/comments';
import style from './PlanPage.module.scss';

const supervisor = { full_name: 'Васильев Максим Валерьевич', position: 'Frontend-разрабочик' };

const PlanPage: FC = () => {
  const dispatch = useAppDispatch();
  const plan = useAppSelector((state) => state.plans.currentPlan);
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const unreadCommentsCount = useAppSelector((state) => state.comments.unreadCount);

  useEffect(() => {
    dispatch(getCurrentPlan());
    dispatch(getUnreadCommentsCount());
  }, [dispatch]);

  useEffect(() => {
    if (plan?.id) {
      dispatch(getAllTasks(plan.id));
    }
  }, [dispatch, plan?.id]);

  return (
    <>
      <div className={style.PlanPage}>
        <div className={style.widgets}>
          <Navbar>
            <EmployeePlanPanel
              supervisor={supervisor}
              expires_at={plan?.expires_at}
              aim_description={plan?.aim_description}
            />
          </Navbar>
        </div>
        <section>
          <Typography.Title tag="h2">ИПР</Typography.Title>
          <TaskCounter>
            <Counter title="Все задачи" quantity={tasks.length} />
            <Counter title="Новые задачи" quantity={tasks.filter((task) => task.status === 'created').length} />
            <Counter title="Новые комментарии" quantity={unreadCommentsCount || 0} />
            <Counter title="Просроченные задачи" quantity={tasks.filter((task) => task.status === 'failed').length} />
          </TaskCounter>
          <TaskList data={tasks} />
        </section>
      </div>
      <Outlet />
    </>
  );
};

export default PlanPage;
