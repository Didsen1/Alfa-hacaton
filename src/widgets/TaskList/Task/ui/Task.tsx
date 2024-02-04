import { type FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from '@alfalab/core-components-table';
import { Typography } from '@alfalab/core-components-typography';
import { Status } from '@alfalab/core-components-status';
import Sidebar from 'widgets/Sidebar/index';
import { AppStatus, type Task as TTask } from 'entities/tasks';
import styles from './Task.module.scss';

interface TaskProps extends TTask {}

enum color {
  'failed' = 'red',
  'done' = 'green',
  'in_progress' = 'orange',
  'created' = 'grey',
  'under_review' = 'purple',
}

const Task: FC<TaskProps> = ({ description, expires_at, name, status, id }) => {
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const closeModal = () => {
  //   setIsModalVisible(false);
  // };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${id}`);
  };

  return (
    <Table.TRow onClick={handleClick} className={styles.taskContainer}>
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
            {AppStatus[status]}
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
};
export default Task;
