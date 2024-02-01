import type { RefObject, FC } from 'react';
import { Table } from '@alfalab/core-components-table';
import Task from 'widgets/TaskList/Task/ui/Task';
import { type Task as TTask } from 'entities/task/model/Task';
import styles from './AllTasks.module.scss';

interface AllTasksProps {
  itemRef: RefObject<HTMLTableElement>;
  data: TTask[];
}

const AllTasks: FC<AllTasksProps> = ({ itemRef, data }) => (
  <Table className={styles.table} ref={itemRef}>
    <Table.THead>
      <Table.THeadCell width="300px" title="Название" className={styles.tableHead}>
        Название
      </Table.THeadCell>
      <Table.THeadCell width="312px" title="Описание" className={styles.tableHead}>
        Описание
      </Table.THeadCell>
      <Table.THeadCell width="172px" title="Статус" className={styles.tableHead}>
        Статус
      </Table.THeadCell>
      <Table.THeadCell width="141px" title="Дедлайн" className={styles.tableHead}>
        Дедлайн
      </Table.THeadCell>
    </Table.THead>
    <Table.TBody>
      {data.map((task) => (
        <Task key={task.task_id} {...task} />
      ))}
    </Table.TBody>
  </Table>
);

export default AllTasks;