import { useLayoutEffect, type FC } from 'react';
import { SidePanelDesktop } from '@alfalab/core-components-side-panel/desktop';
import { Input } from '@alfalab/core-components-input';
import { UniversalDateInput } from '@alfalab/core-components-universal-date-input';
import CalendarIcon from 'shared/icons/calendar-icon.svg?react';
import { Textarea } from '@alfalab/core-components-textarea';
import { Collapse } from '@alfalab/core-components-collapse';
import { Button } from '@alfalab/core-components-button';
import { IconButton } from '@alfalab/core-components-icon-button';
import { PaperAirplaneMIcon } from '@alfalab/icons-glyph/PaperAirplaneMIcon';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { getTaskById } from 'entities/tasks';
import style from './OpenTask.module.scss';
import CommentInput from '../CommentInput/CommentInput';
import Comment from '../Comment/Comment';
import { type Task } from '../../model/types/Task';

interface OpenTaskProps {
  taskId: number;
}

type UserRole = 'admin' | 'user';

const OpenTask: FC<OpenTaskProps> = ({ taskId }) => {
  const task = useAppSelector((state) => state.tasks.currentTask);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(getTaskById(taskId));
  }, [dispatch, taskId]);

  const userRole: UserRole = 'user';

  const renderFooterButtons = (task: Task) => {
    if (userRole === 'user') {
      return task?.status === 'В работе' ? (
        <>
          <Button view="primary">На проверку</Button>
          <Button>Отменить</Button>
        </>
      ) : null;
    }

    if (userRole === 'admin') {
      return task?.status === 'На проверке' ? (
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
        <Input className={style.font} size="m" value={task?.name} block type="text" placeholder="  Название задачи" />
        <div className={style.dateWrapper}>
          <UniversalDateInput
            className={style.font}
            block
            size="m"
            value={task?.expires_at}
            view="date-range"
            placeholder="  Дата"
            rightAddons={<CalendarIcon style={{ marginRight: 8 }} />}
          />
          <span className={style.status}>{task?.status.toUpperCase()}</span>
        </div>
        <Textarea
          className={style.font}
          size="m"
          value={task?.description}
          placeholder="  Опишите задачу"
          block
          minRows={20}
        />
        <Collapse className={style.collapse} collapsedLabel="Подробнее" expandedLabel="Скрыть">
          {task?.comments.map((comment) => <Comment key={comment.id} {...comment} />)}
        </Collapse>
      </SidePanelDesktop.Content>
      <SidePanelDesktop.Footer className={style.footer} sticky>
        <div className={style.commentInputWrapper}>
          <CommentInput />
          <IconButton className={style.sendButton} icon={PaperAirplaneMIcon} />
        </div>
        <div className={style.footerButtonsWrapper}>{task && renderFooterButtons(task)}</div>
      </SidePanelDesktop.Footer>
    </div>
  );
};

export default OpenTask;
