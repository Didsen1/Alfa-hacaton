import { type FC } from 'react';
import { Table } from '@alfalab/core-components-table';
import { Typography } from '@alfalab/core-components-typography';
import styles from './NoTasks.module.scss';

const NoTasks: FC = () => (
  <Table.TRow className={styles.taskContainer}>
    <Table.TCell width="300px">
      <Typography.Text view="primary-small" tag="div" className={styles.title}>
        Задач нет
      </Typography.Text>
    </Table.TCell>
  </Table.TRow>
);

export default NoTasks;
