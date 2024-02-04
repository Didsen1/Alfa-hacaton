
import { useLocation } from "react-router-dom";
import Navbar from "widgets/Navbar";
import { Typography } from "@alfalab/core-components-typography";
import { ButtonDesktop } from '@alfalab/core-components-button/desktop';
import PlanPanel from "widgets/PlanPanel";
import { employeeList } from 'utils/dataPlan';
import style from "./AdminPlanPage.module.scss"

const AdminPlanPage = () => {
  const { pathname } = useLocation();

  return (
    <main>
      <Navbar>
        <PlanPanel expired_at={employeeList.expired_at} employee={employeeList.employee} aim={employeeList.aim}/>
      </Navbar>
      <section className={style.EmployeePlanPage}>
        <Typography.Title tag="h2" className={style.h2}>Сотрудник</Typography.Title>
        <ButtonDesktop view='accent' className={style.button}>Добавить ИПР</ButtonDesktop>
      </section>
    </main>
  );

}
export default AdminPlanPage;