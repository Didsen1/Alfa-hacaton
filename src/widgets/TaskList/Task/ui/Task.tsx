import { type FC } from 'react';
import { Table } from '@alfalab/core-components-table';
import { Typography } from '@alfalab/core-components-typography';
import { Status } from '@alfalab/core-components-status';
import styles from './Task.module.scss';

const Task: FC = ({ i }) => (
  <Table.TBody>
    <Table.TRow className={styles.taskContainer}>
      <Table.TCell>
        <Typography.Text view="primary-small" tag="div" className={styles.title}>
          {i.title}
        </Typography.Text>
      </Table.TCell>
      <Table.TCell>
        <Typography.Text view="primary-small" tag="div" className={styles.description}>
          {i.description}
        </Typography.Text>
      </Table.TCell>
      <Table.TCell>
        <Typography.Text view="primary-small" tag="div">
          <Status className={styles.status} color={i.color} view="soft">
            {i.status}
          </Status>
        </Typography.Text>
      </Table.TCell>
      <Table.TCell>
        <Typography.Text view="primary-small" tag="div" className={styles.deadline}>
          {i.deadline}
        </Typography.Text>
      </Table.TCell>
    </Table.TRow>
  </Table.TBody>
);

export default Task;
