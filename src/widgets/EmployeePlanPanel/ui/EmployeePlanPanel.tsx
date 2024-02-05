import type { FC } from 'react';
import { Typography } from '@alfalab/core-components-typography';
import { type Plan } from 'entities/plans';
import style from './EmployeePlanPanel.module.scss';

interface PlanPanelProps extends Plan {
  supervisor: {
    full_name: string;
    position: string;
  };
}

/* eslint-disable camelcase */
const EmployeePlanPanel: FC<PlanPanelProps> = ({ expires_at, aim_description, supervisor }) => (
  <div className={style.panelWrapper}>
    <div className={style.supervisorWrapper}>
      <Typography.Title tag="h3" className={style.supervisorTitle}>
        Руководитель
      </Typography.Title>
      <Typography.Text tag="p" className={style.supervisorName}>
        {supervisor.full_name}
      </Typography.Text>
      <Typography.Text tag="p" className={style.supervisorPosition}>
        {supervisor.position}
      </Typography.Text>
    </div>
    <div className={style.aimWrapper}>
      <Typography.Title tag="h3" className={style.aimTitle}>
        Цель ИПР
      </Typography.Title>
      <Typography.Text tag="p">{aim_description}</Typography.Text>
    </div>
    <div>
      <Typography.Title tag="h3" className={style.expired_atTitle}>
        Срок ИПР
      </Typography.Title>
      <Typography.Text tag="p">{expires_at}</Typography.Text>
    </div>
  </div>
);

export default EmployeePlanPanel;
