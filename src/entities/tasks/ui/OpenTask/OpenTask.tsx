import { type FC, useEffect, useState, type ChangeEvent } from 'react';
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
import { getTaskById, updateTaskById } from 'entities/tasks';
import style from './OpenTask.module.scss';
import { AppStatus, type Task } from '../../model/types/Task';

const OpenTask: FC = () => {
  const task = useAppSelector((state) => state.tasks.currentTask);
  const { comments } = useAppSelector((state) => state.comments);
  const { task_id } = useParams();
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

  useEffect(() => {
    if (normalizeTaskId) {
      dispatch(getTaskById(normalizeTaskId));
      dispatch(getTasksComments(normalizeTaskId));
    }
  }, [dispatch, normalizeTaskId]);

  const renderFooterButtons = (task: Task) => {
    if (userRole === 'employee') {
      return task?.status === 'in_progress' ? (
        <>
          <Button view="primary" onClick={sendForVerification}>
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
      ) : null;
    }

    return null;
  };

  return (
    <div className={style.OpenTask}>
      <SidePanelDesktop.Header />
      <SidePanelDesktop.Content className={style.content}>
        <div className={style.inputsWrapper}>
          {isDisabled && <div className={style.disabler} />}
          <Input
            className={style.font}
            size="m"
            name="taskName"
            onChange={handleChange}
            value={formData.taskName || task?.name}
            block
            type="text"
            placeholder="  Название задачи"
          />
          <div className={style.dateWrapper}>
            <UniversalDateInput
              className={style.font}
              onChange={handleChange}
              block
              size="m"
              name="date"
              value={formData.date || task?.expires_at}
              view="date-range"
              placeholder="  Дата"
              rightAddons={<CalendarIcon style={{ marginRight: 8 }} />}
            />
            <span className={style.status}>{AppStatus[task?.status || 'created'].toUpperCase()}</span>
          </div>
          <Textarea
            className={style.font}
            onChange={handleChange}
            name="description"
            size="m"
            value={formData.description || task?.description}
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
    </div>
  );
};

export default OpenTask;
