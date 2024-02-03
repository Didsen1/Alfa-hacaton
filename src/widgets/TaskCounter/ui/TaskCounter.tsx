import { type FC } from 'react';
import styles from './TaskCounter.module.scss';
import Counter from './Counter/ui/Counter';

const TaskCounter: FC = () => (
  <div className={styles.taskCounter}>
    <Counter title="Всего задач" quantity="4" />
    <Counter title="Новые задачи" quantity="1" />
    <Counter title="Новые комментарии" quantity="1" />
    <Counter title="Просроченные задачи" quantity="0" />
  </div>
);

export default TaskCounter;
