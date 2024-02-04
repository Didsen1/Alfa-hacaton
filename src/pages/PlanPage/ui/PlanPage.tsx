
import { useLocation } from 'react-router-dom';
import type { FC } from 'react';
import Navbar from 'widgets/Navbar';
import { Typography } from "@alfalab/core-components-typography";
import EmployeePlanPanel from 'widgets/EmployeePlanPanel';
import { dataPlanPanel } from 'utils/dataPlanPanel';
import style from "./PlanPage.module.scss"

const PlanPage: FC = () => {
  const { pathname } = useLocation();

  return (
    <main>
      <Navbar>
        <EmployeePlanPanel aim={dataPlanPanel.aim}
          expired_at={dataPlanPanel.expired_at} 
          supervisor={dataPlanPanel.supervisor} />
      </Navbar>
      <section className={style.EmployeePage}>
        <Typography.Title tag="h2" className={style.h2}>ИПР</Typography.Title>
      </section>
    </main>
  );
}



export default PlanPage;