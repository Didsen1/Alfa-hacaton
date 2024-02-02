import { useState, type FC, useRef, useCallback, useEffect } from 'react';
import AccordionButton from 'widgets/TaskList/AccordionButton/ui/AccordionButton';
import { type Task } from 'entities/task/model/Task';
import FilterCalendar from 'widgets/FilterCalendar/ui/FilterCalendar';
import FilterStatus from 'widgets/FilterStatus/ui/FilterStatus';
import { data } from '../../../utils/dataTasks';
import CurrentTasks from '../CurrentTasks/ui/CurrentTasks';
import AllTasks from '../AllTasks/ui/AllTasks';
import styles from './TaskList.module.scss';

interface ExpandedSections {
  all: boolean;
  current: boolean;
}

const filterTasksByStatus = (tasks: Task[], filteredStatus: { key: string; content: string }[]): Task[] => {
  const statusList = filteredStatus.map((status) => status.content.toLowerCase());
  if (statusList.length === 0) {
    return tasks;
  }
  return tasks.filter((task) => statusList.includes(task.status.toLowerCase()));
};

const parseDate = (dateStr: string): Date => {
  const [day, month, year] = dateStr.split('.').map(Number);
  return new Date(year, month - 1, day);
};

const filterTasks = (tasks: Task[]): Task[] => {
  const currentDate = new Date();

  return tasks.filter((task) => {
    const createdDate = parseDate(task.created_at);
    if (
      task.status.toLowerCase() === 'не выполнено' ||
      task.status.toLowerCase() === 'выполнено' ||
      (task.status.toLowerCase() === 'создано' && createdDate > currentDate)
    ) {
      return false;
    }
    return true;
  });
};

const TaskList: FC = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    all: false,
    current: false,
  });
  const allTasksRef = useRef<HTMLTableElement>(null);
  const currentTasksRef = useRef<HTMLTableElement>(null);
  const [filteredStatus, setFilteredStatus] = useState<{ key: string; content: string }[]>([]);
  const [allCollapseStyle, setAllCollapseStyle] = useState({ height: '0px' });
  const [currentCollapseStyle, setCurrentCollapseStyle] = useState({ height: '0px' });

  const getCollapseClassName = (isExpanded: boolean) => `${styles.collapse} ${isExpanded ? styles.collapse_open : ''}`;

  const updateCollapseHeight = (
    isExpanded: boolean,
    ref: React.RefObject<HTMLElement>,
    setCollapseStyle: React.Dispatch<React.SetStateAction<{ height: string }>>
  ) => {
    const height = isExpanded ? `${ref.current?.scrollHeight}px` : '0px';
    setCollapseStyle({ height });
  };

  const toggleExpanded = useCallback((section: keyof ExpandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  }, []);

  useEffect(() => {
    updateCollapseHeight(expandedSections.all, allTasksRef, setAllCollapseStyle);
    updateCollapseHeight(expandedSections.current, currentTasksRef, setCurrentCollapseStyle);
    const handleResize = () => {
      updateCollapseHeight(expandedSections.all, allTasksRef, setAllCollapseStyle);
      updateCollapseHeight(expandedSections.current, currentTasksRef, setCurrentCollapseStyle);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [expandedSections.all, expandedSections.current, filteredStatus]);

  return (
    <div className={styles.tasks}>
      <div className={styles.filter}>
        <FilterCalendar />
        <FilterStatus setFilteredStatus={setFilteredStatus} />
      </div>
      <div className={styles.conteiner}>
        <AccordionButton text="Все задачи" expanded={expandedSections.all} toggleExpanded={() => toggleExpanded('all')} />
        <div className={getCollapseClassName(expandedSections.all)} style={allCollapseStyle}>
          <AllTasks itemRef={allTasksRef} data={filterTasksByStatus(data, filteredStatus)} />
        </div>
      </div>
      <div className={styles.conteiner}>
        <AccordionButton
          text="Задачи на сегодня"
          expanded={expandedSections.current}
          toggleExpanded={() => toggleExpanded('current')}
        />
        <div className={getCollapseClassName(expandedSections.current)} style={currentCollapseStyle}>
          <CurrentTasks itemRef={currentTasksRef} data={filterTasks(data)} />
        </div>
      </div>
    </div>
  );
};

export default TaskList;
