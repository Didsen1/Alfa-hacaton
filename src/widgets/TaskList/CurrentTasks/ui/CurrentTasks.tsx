import type { RefObject, FC } from 'react';
import { Table } from '@alfalab/core-components-table';
import Task from 'widgets/TaskList/Task/ui/Task';
import NoTasks from 'widgets/TaskList/NoTasks/ui/NoTasks';
import { type Task as TTask } from 'entities/task/model/Task';
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
            <Task key={task.task_id} {...task} />
          ))}
        </>
      ) : (
        <NoTasks />
      )}
    </Table.TBody>
  </Table>
);

export default CurrentTasks;
