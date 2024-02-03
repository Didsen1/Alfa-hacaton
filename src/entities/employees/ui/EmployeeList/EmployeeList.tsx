import type { FC } from 'react';
import { Table } from '@alfalab/core-components-table';
import { useAppSelector } from 'app/store/hooks';
import Employee from '../Employee/Employee';

import style from './EmployeeList.module.scss';

const EmployeeList: FC = () => {
  const { employees } = useAppSelector((state) => state.employees);

  return (
    <div className={style.conteiner}>
      <Table className={style.table}>
        <Table.THead>
          <Table.THeadCell title="СОТРУДНИК" width={613} textAlign="left">
            СОТРУДНИК
          </Table.THeadCell>
          <Table.THeadCell title="СТАТУС" width={172} textAlign="left">
            СТАТУС
          </Table.THeadCell>
          <Table.THeadCell title="СРОК" width={140} textAlign="left">
            СРОК
          </Table.THeadCell>
        </Table.THead>
        <Table.TBody>
          {!!employees.length && employees.map((employee) => (
            <Employee key={employee.user_id} plan_id={4} expired_at='fgbf' status='В работе' employee={employee} />
          ))}
        </Table.TBody>
      </Table>
    </div>
  );
};
export default EmployeeList;
