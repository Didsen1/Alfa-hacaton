import { type FC } from 'react';
import ReactDOM from 'react-dom';
import { Spinner } from '@alfalab/core-components-spinner';
import { useAppSelector } from 'app/store/hooks';
import style from './Loader.module.scss';

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  const { isLoading: commentsIsLoading } = useAppSelector((state) => state.comments);
  const { isLoading: employeesIsLoading } = useAppSelector((state) => state.employees);
  const { isLoading: notificationsIsLoading } = useAppSelector((state) => state.notifications);
  const { isLoading: plansIsLoading } = useAppSelector((state) => state.plans);
  const { isLoading: tasksIsLoading } = useAppSelector((state) => state.tasks);

  const isLoading = commentsIsLoading || employeesIsLoading || notificationsIsLoading || plansIsLoading || tasksIsLoading;

  const content = (
    <div className={style.Loader}>
      <Spinner visible size="m" />
    </div>
  );

  const root = document.getElementById('sidebar');

  return isLoading ? ReactDOM.createPortal(content, root as HTMLElement) : null;
};

export default Loader;
