import { useEffect, type FC, useState } from 'react';
import { ButtonDesktop } from '@alfalab/core-components-button/desktop';
import { Typography } from '@alfalab/core-components-typography';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import Navbar, { NavbarLink } from 'widgets/Navbar';
import { Counter, TaskCounter } from 'widgets/TaskCounter';
import Search from 'widgets/Search';
import { EmployeeList, getAllEmployees } from 'entities/employees';
import ChartIcon from 'shared/icons/chart-with-up-arrow.svg?react';
import CrosshairIcon from 'shared/icons/crosshair-icon.svg?react';
import { getUnreadCommentsCount } from 'entities/comments';
import AppModal from 'widgets/Modal';
import { CreatePlanComponent, getAllPlans } from 'entities/plans';
import style from './AdminPage.module.scss';

const AdminPage: FC = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { employees } = useAppSelector((state) => state.employees);
  const { plans } = useAppSelector((state) => state.plans);
  const { unreadCount } = useAppSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getAllEmployees());
    dispatch(getUnreadCommentsCount());
    dispatch(getAllPlans());
  }, [dispatch]);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Navbar>
        <NavbarLink to="/admin" text="ИПР" Icon={CrosshairIcon} />
        <NavbarLink to="/admin/analytics" text="Аналитика" Icon={ChartIcon} />
      </Navbar>
      <section className={style.SupervisorPage}>
        <Typography.Title tag="h2" className={style.h2}>
          ИПР
        </Typography.Title>
        <TaskCounter>
          <Counter title="Всего ИПР" quantity={plans.length} />
          <Counter title="Ожидание проверки" quantity={plans.filter((plan) => plan.status === 'under_review').length} />
          <Counter title="Новые комментарии" quantity={unreadCount || 0} />
        </TaskCounter>
        <ButtonDesktop view="accent" onClick={openModal} className={style.button}>
          Добавить ИПР
        </ButtonDesktop>
        <div>
          <Typography.Title tag="h3" className={style.h3}>
            Сотрудники
          </Typography.Title>
          <div>
            <Search />
          </div>
          <EmployeeList employees={employees} />
        </div>
      </section>
      <AppModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <CreatePlanComponent />
      </AppModal>
    </>
  );
};

export default AdminPage;
