import type { RefObject, FC } from 'react';
import { Table } from '@alfalab/core-components-table';
import { type Task as TTask } from 'entities/tasks';
import NoTasks from '../../NoTasks/ui/NoTasks';
import Task from '../../Task/ui/Task';
import styles from './CurrentTasks.module.scss';

interface AllTasksProps {
  itemRef: RefObject<HTMLTableElement>;
  data: TTask[];
}

const CurrentTasks: FC<AllTasksProps> = ({ itemRef, data }) => (
  <Table className={styles.table} ref={itemRef}>
    <Table.TBody>
      {data.length !== 0 ? (
        <>
          {data.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </>
      ) : (
        <NoTasks />
      )}
    </Table.TBody>
  </Table>
);

export default CurrentTasks;
