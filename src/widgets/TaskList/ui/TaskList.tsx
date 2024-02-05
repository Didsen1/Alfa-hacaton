import { type FC } from 'react';
import { type Task } from 'entities/tasks';
import AllTasks from '../AllTasks/ui/AllTasks';
import styles from './TaskList.module.scss';

const TaskList: FC<{ data: Task[] }> = ({ data }) => (
  <div className={styles.tasks}>
    <div className={styles.conteiner}>
      <div>
        <AllTasks data={data} />
      </div>
    </div>
  </div>
);

export default TaskList;
