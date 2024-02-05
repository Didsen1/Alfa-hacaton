import type { FC } from 'react';
import { Table } from '@alfalab/core-components-table';
import { type Plan } from 'entities/plans';
import Employee from '../Employee/Employee';

import style from './EmployeeList.module.scss';

interface EmployeeListProps {
  plans: Plan[];
}

const EmployeeList: FC<EmployeeListProps> = ({ plans }) => (
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
        {plans.length &&
          plans.map((plan) => (
            <Employee key={plan?.id} expires_at={plan?.expires_at} status={plan?.status} employee={plan?.employee} />
          ))}
      </Table.TBody>
    </Table>
  </div>
);
export default EmployeeList;
