import { useState, type FC } from 'react';
import { Circle } from '@alfalab/core-components-icon-view/circle';
import { Typography } from '@alfalab/core-components-typography';
import { ButtonDesktop } from '@alfalab/core-components-button/desktop';
import { type Plan } from 'entities/plans';
import { BASE_URL } from 'utils/constants/api';
import AppModal from 'widgets/Modal';
import EditPlanComponent from 'entities/plans/ui/EditPlan/EditPlan';
import style from './PlanPanel.module.scss';

interface PlanProps extends Partial<Plan> {}

/* eslint-disable camelcase */
const PlanPanel: FC<PlanProps> = ({ expires_at, aim_description, employee }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className={style.panelWrapper}>
        <div className={style.employeeWrapper}>
          <Circle imageUrl={employee?.photo ? BASE_URL + employee.photo : ''} />
          <div className={style.employeeData}>
            <Typography.Text tag="p" className={style.employeeName}>
              {employee?.full_name}
            </Typography.Text>
            <Typography.Text tag="p" className={style.employeePosition}>
              {employee?.position}
            </Typography.Text>
          </div>
        </div>
        <div className={style.aimWrapper}>
          <Typography.Text tag="p" className={style.aimTitle}>
            Цель ИПР
          </Typography.Text>
          <Typography.Text tag="p" className={style.aim}>
            {aim_description}
          </Typography.Text>
        </div>
        <div className={style.expired_atWrapper}>
          <Typography.Text tag="p" className={style.expired_atTitle}>
            Срок ИПР
          </Typography.Text>
          <Typography.Text tag="p" className={style.expired_at}>
            {expires_at}
          </Typography.Text>
        </div>
        <ButtonDesktop onClick={openModal} view="primary">Редактировать</ButtonDesktop>
      </div>
      <AppModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <EditPlanComponent />
      </AppModal>
    </>
  );
};

export default PlanPanel;
