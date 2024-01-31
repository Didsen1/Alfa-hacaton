import { Circle } from "@alfalab/core-components-icon-view/circle";
import { Typography } from "@alfalab/core-components-typography";
import { ButtonDesktop } from '@alfalab/core-components-button/desktop';
import { type Plan } from "entities/plan/model/Plan";
import type { FC } from "react";
import style from "./PlanPanel.module.scss"

interface PlanProps extends Plan { }


/* eslint-disable camelcase */
const PlanPanel: FC<PlanProps> = ({ expired_at, employee, }) => (
  <div className={style.panelWrapper}>
    <div className={style.employeeWrapper}>
      <Circle imageUrl={employee.img} />
      <div className={style.employeeData}>
        <Typography.Text tag="p" className={style.employeeName}>{employee.full_name}</Typography.Text>
        <Typography.Text tag="p" className={style.employeePosition}>{employee.position}</Typography.Text>
      </div>
    </div>
    <div className={style.aimWrapper}>
      <Typography.Text tag="p" className={style.aimTitle}>Цель ИПР</Typography.Text>
      <Typography.Text tag="p" className={style.aim}>?</Typography.Text>
    </div>
    <div className={style.expired_atWrapper}>
      <Typography.Text tag="p" className={style.expired_atTitle}>Срок ИПР</Typography.Text>
      <Typography.Text tag="p" className={style.expired_at}>{expired_at}</Typography.Text>
    </div>
    <ButtonDesktop view='primary'>Редактировать</ButtonDesktop>
  </div >
)

export default PlanPanel;