import type { FC } from 'react';
import { Table } from '@alfalab/core-components-table';
import { type Employee as TEmployee } from '../../model/types/employee';
import Employee from '../Employee/Employee';

import style from './EmployeeList.module.scss';

interface EmployeeListProps {
  employees: TEmployee[];
}

const EmployeeList: FC<EmployeeListProps> = ({ employees,  }) => (
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
        {!!employees.length &&
          employees.map((employee) => (
            <Employee key={employee.id} id={4} expired_at="fgbf" status="in_progress" employee={employee} />
          ))}
      </Table.TBody>
    </Table>
  </div>
);
export default EmployeeList;
