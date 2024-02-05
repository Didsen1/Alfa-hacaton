import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from '@alfalab/core-components-table';
import { Status } from '@alfalab/core-components-status';
import { Circle } from '@alfalab/core-components-icon-view/circle';
import { useAppSelector } from 'app/store/hooks';
import { type Plan } from 'entities/plans';
import { AppStatus } from 'entities/tasks';
import { BASE_URL } from 'utils/constants/api';
import style from './Employee.module.scss';

interface EmployeeProps extends Partial<Plan> {}

enum color {
  'created' = 'grey',
  'in_progress' = 'orange',
  'under_review' = 'purple',
  'failed' = 'red',
  'done' = 'green',
}

const Employee: FC<EmployeeProps> = ({ expires_at, status, employee }) => {
  const navigate = useNavigate();
  const { plans } = useAppSelector((state) => state.plans);
  const employeesPlan = plans.find((plan) => plan.employee?.id === employee?.id);

  const handleClick = () => {
    if (employeesPlan?.id) {
      navigate(`${employeesPlan?.id}`);
    }
  };

  return (
    <Table.TRow onClick={handleClick}>
      <Table.TCell className={style.employeeCell}>
        {employee?.photo && <Circle imageUrl={BASE_URL + employee.photo} size={48} className={style.circle} />}
        <div>
          <p>{employee?.full_name}</p>
          <p className={style.pWhite}>{employee?.position}</p>
        </div>
      </Table.TCell>
      <Table.TCell>{status && <Status color={color[status]}>{AppStatus[status]}</Status>}</Table.TCell>
      <Table.TCell>{expires_at}</Table.TCell>
    </Table.TRow>
  );
};

export default Employee;
