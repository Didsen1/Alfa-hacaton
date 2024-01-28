import { useState, type FC, useRef, useCallback } from 'react';
import { Table } from '@alfalab/core-components-table';
import Task from 'widgets/TaskList/Task/ui/Task';
import AccordionButton from 'widgets/TaskList/AccordionButton/ui/AccordionButton';
import styles from './TaskList.module.scss';
import { data } from '../../../utils/dataTasks';

interface ExpandedSections {
  all: boolean;
  current: boolean;
}

const TaskList: FC = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    all: false,
    current: false,
  });
  const itemRef = useRef<HTMLTableElement>(null);

  const toggleExpanded = useCallback((section: keyof ExpandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  }, []);

  return (
    <div className={styles.tasks}>
      <div className={styles.conteiner}>
        <AccordionButton text="Все задачи" expanded={expandedSections.all} toggleExpanded={() => toggleExpanded('all')} />
        <div
          className={`${styles.collapse} ${expandedSections.all ? styles.collapse_open : ''}`}
          style={expandedSections.all ? { height: itemRef?.current?.scrollHeight } : { height: '0px' }}
        > {/* @ts-ignore */}
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
            {data.map((task) => (
              <Task key={task.task_id} {...task} />
            ))}
          </Table>
        </div>
      </div>
      <div className={styles.conteiner}>
        <AccordionButton
          text="Задачи на сегодня"
          expanded={expandedSections.current}
          toggleExpanded={() => toggleExpanded('current')}
        />
      </div>
    </div>
  );
};

export default TaskList;
