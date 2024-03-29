import { useLocation } from 'react-router-dom';
import Navbar from 'widgets/Navbar';
import { Typography } from '@alfalab/core-components-typography';
import { ButtonDesktop } from '@alfalab/core-components-button/desktop';
import PlanPanel from 'widgets/PlanPanel';
import { type Employee } from 'entities/employees';
import { mockPlan } from 'utils/dataPlan';
import style from './AdminPlanPage.module.scss';

const AdminPlanPage = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <Navbar>
        <PlanPanel
          expires_at={mockPlan.expires_at as string}
          employee={mockPlan.employee as Employee}
          aim_description={mockPlan.aim_description}
        />
      </Navbar>
      <section className={style.EmployeePlanPage}>
        <Typography.Title tag="h2" className={style.h2}>
          Сотрудник
        </Typography.Title>
        <ButtonDesktop view="accent" className={style.button}>
          Добавить ИПР
        </ButtonDesktop>
      </section>
    </div>
  );
};
export default AdminPlanPage;
