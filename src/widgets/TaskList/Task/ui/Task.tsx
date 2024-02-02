import { type FC } from 'react';
import { Table } from '@alfalab/core-components-table';
import { Typography } from '@alfalab/core-components-typography';
import { Status } from '@alfalab/core-components-status';
import { type Task as TTask } from 'entities/task/model/Task';
import styles from './Task.module.scss';

interface TaskProps extends TTask {}

enum color {
  'Не выполнено' = 'red',
  'Выполнено' = 'green',
  'В работе' = 'orange',
  'Создано' = 'grey',
  'На проверке' = 'purple',
}

const Task: FC<TaskProps> = ({ comments, created_at, description, expires_at, name, status, task_id }) => (
  <Table.TRow className={styles.taskContainer}>
    <Table.TCell width="300px">
      <Typography.Text view="primary-small" tag="div" className={styles.title}>
        {name}
      </Typography.Text>
    </Table.TCell>
    <Table.TCell width="312px">
      <Typography.Text view="primary-small" tag="div" className={styles.description}>
        {description}
      </Typography.Text>
    </Table.TCell>
    <Table.TCell width="172px">
      <Typography.Text view="primary-small" tag="div">
        <Status className={styles.status} color={color[status]} view="soft">
          {status}
        </Status>
      </Typography.Text>
    </Table.TCell>
    <Table.TCell width="141px">
      <Typography.Text view="primary-small" tag="div" className={styles.deadline}>
        {expires_at}
      </Typography.Text>
    </Table.TCell>
  </Table.TRow>
);

export default Task;
