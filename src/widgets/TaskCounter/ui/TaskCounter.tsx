import { type FC } from 'react';
import styles from './TaskCounter.module.scss';

interface TaskCounterProps {
  children: React.ReactNode;
}

const TaskCounter: FC<TaskCounterProps> = ({ children }) => (
  <div className={styles.taskCounter}>
    {children}
  </div>
);

export default TaskCounter;
