import type { FC } from 'react';
import { Table } from '@alfalab/core-components-table';
import Employee from '../Employee/Employee';
import { employeeList } from "../../../utils/dataEmployee"

import style from "./EmployeeList.module.scss"

const EmployeeList: FC = () => (
  <div className={style.conteiner}>
    <Table className={style.table}>
      <Table.THead>
        <Table.THeadCell title='СОТРУДНИК' width={613} textAlign="left">СОТРУДНИК</Table.THeadCell>
        <Table.THeadCell title='СТАТУС' width={172} textAlign="left">СТАТУС</Table.THeadCell>
        <Table.THeadCell title='СРОК' width={140} textAlign="left">СРОК</Table.THeadCell>
      </Table.THead>
      <Table.TBody>
        {employeeList.map((employee) => (<Employee {...employee} />))}
      </Table.TBody>
    </Table>
  </div>
)
export default EmployeeList;