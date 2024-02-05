import { type FC, useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { SidePanelDesktop } from '@alfalab/core-components-side-panel/desktop';
import { Input } from '@alfalab/core-components-input';
import { UniversalDateInput } from '@alfalab/core-components-universal-date-input';
import CalendarIcon from 'shared/icons/calendar-icon.svg?react';
import { Textarea } from '@alfalab/core-components-textarea';
import { Collapse } from '@alfalab/core-components-collapse';
import { Button } from '@alfalab/core-components-button';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { CommentComponent, getTasksComments, CommentInput } from 'entities/comments';
import { getPlanById } from 'entities/plans';
import { getTaskById, updateTaskById } from 'entities/tasks';
import style from './OpenTask.module.scss';
import { AppStatus, type Task } from '../../model/types/Task';

const OpenTask: FC<{ closeSidebar?: () => void }> = ({ closeSidebar }) => {
  const task = useAppSelector((state) => state.tasks.currentTask);
  const { comments } = useAppSelector((state) => state.comments);
  const { task_id, plan_id } = useParams();
  const { type: userRole } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    taskName: '',
    date: '',
    description: '',
  });

  const normalizeTaskId = Number(task_id);
  const isDisabled = userRole === 'employee';

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | null) => {
    if (event) {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const sendForVerification = () => {
    dispatch(updateTaskById([normalizeTaskId, { status: 'under_review' }]));
  };

  const editTask = () => {
    dispatch(
      updateTaskById([
        normalizeTaskId,
        { name: formData.taskName, expires_at: formData.date, description: formData.description },
      ])
    );
    dispatch(getPlanById(Number(plan_id)));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userRole === 'employee') {
      if (task?.status === 'in_progress') {
        sendForVerification();
      }
    }

    if (userRole === 'superior') {
      if (task?.status === 'in_progress' || task?.status === 'created') {
        editTask();
      }
    }
  };

  useEffect(() => {
    if (normalizeTaskId) {
      dispatch(getTaskById(normalizeTaskId));
      dispatch(getTasksComments(normalizeTaskId));
      setFormData({
        date: task?.expires_at || '',
        description: task?.description || '',
        taskName: task?.name || '',
      });
    }
  }, [dispatch, normalizeTaskId, task?.created_at, task?.description, task?.expires_at, task?.name]);

  const renderFooterButtons = (task: Task) => {
    if (userRole === 'employee') {
      return task?.status === 'in_progress' ? (
        <>
          <Button view="primary" type="submit">
            На проверку
          </Button>
          {/* <Button>Отменить</Button> */}
        </>
      ) : null;
    }

    if (userRole === 'superior') {
      return task?.status === 'under_review' ? (
        <>
          <Button view="primary">Принять</Button>
          <Button>На доработку</Button>
        </>
      ) : task?.status === 'created' || task?.status === 'in_progress' ? (
        <Button type="submit" view="primary">
          Редактировать
        </Button>
      ) : null;
    }

    return null;
  };

  return (
    <form onSubmit={handleSubmit} className={style.OpenTask}>
      <SidePanelDesktop.Header />
      <SidePanelDesktop.Content className={style.content}>
        <div className={style.inputsWrapper}>
          {isDisabled && <div className={style.disabler} />}
          <Input
            className={style.font}
            required
            size="m"
            name="taskName"
            onChange={handleChange}
            value={formData.taskName}
            block
            type="text"
            placeholder="  Название задачи"
          />
          <div className={style.dateWrapper}>
            <UniversalDateInput
              className={style.font}
              required
              onChange={handleChange}
              pattern="\d{2}\.\d{2}\.\d{4}"
              block
              size="m"
              name="date"
              value={formData.date}
              view="date-range"
              placeholder="  Дата"
              rightAddons={<CalendarIcon style={{ marginRight: 8 }} />}
            />
            <span className={style.status}>{AppStatus[task?.status || 'created'].toUpperCase()}</span>
          </div>
          <Textarea
            className={style.font}
            required
            onChange={handleChange}
            name="description"
            size="m"
            value={formData.description}
            placeholder="  Опишите задачу"
            block
            minRows={20}
          />
        </div>

        <Collapse className={style.collapse} collapsedLabel="Подробнее" expandedLabel="Скрыть">
          {comments.map((comment) => (
            <CommentComponent key={comment.id} {...comment} />
          ))}
        </Collapse>
      </SidePanelDesktop.Content>
      <SidePanelDesktop.Footer className={style.footer} sticky>
        <div className={style.commentInputWrapper}>
          <CommentInput />
        </div>
        <div className={style.footerButtonsWrapper}>{task && renderFooterButtons(task)}</div>
      </SidePanelDesktop.Footer>
    </form>
  );
};

export default OpenTask;
