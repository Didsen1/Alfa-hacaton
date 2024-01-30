import { type FC } from 'react';
import { SidePanelDesktop } from '@alfalab/core-components-side-panel/desktop';
import { Input } from '@alfalab/core-components-input';
import { UniversalDateInput } from '@alfalab/core-components-universal-date-input';
import CalendarIcon from 'shared/icons/calendar-icon.svg?react';
import { Textarea } from '@alfalab/core-components-textarea';
import { Collapse } from '@alfalab/core-components-collapse';
import { Button } from '@alfalab/core-components-button';
import { IconButton } from '@alfalab/core-components-icon-button';
import { PaperAirplaneMIcon } from '@alfalab/icons-glyph/PaperAirplaneMIcon';
import style from './OpenTask.module.scss';
import CommentInput from '../CommentInput/CommentInput';
import Comment from '../Comment/Comment';
import { type Task } from '../../model/types/Task';

interface OpenTaskProps {
  planId: string;
  taskId: string;
}

const MOCK_TASK: Task = {
  task_id: '932',
  name: 'Изучение UML',
  description:
    // eslint-disable-next-line max-len
    'Разобрать на вебинаре способы выстраивания отношений с внешними деловыми партнёрами, направленные на сотрудничество. Разработать решение существующей проблемы взаимодействия на ВКС совещаниях, направленного на достижение конкретного результата: получение дорожной карты ускорения получения отчётов по проекту «Целый год без % по кредитной карте от Альфа-Банка» от 20.06.2023. Учесть условие соблюдения общих интересов и целей всех компаний участников.Разобрать на вебинаре способы выстраивания отношений с внешними деловыми партнёрами, направленные на сотрудничество. Разработать решение существующей проблемы взаимодействия на ВКС совещаниях, направленного на достижение конкретного результата: получение дорожной карты ускорения получения отчётов по проекту «Целый год без % по кредитной карте от Альфа-Банка» от 20.06.2023. Учесть условие соблюдения общих интересов и целей всех компаний участников.Разобрать на вебинаре способы выстраивания отношений с внешними деловыми партнёрами, направленные на сотрудничество. Разработать решение существующей проблемы взаимодействия на ВКС совещаниях, направленного на достижение конкретного результата: получение дорожной карты ускорения получения отчётов по проекту «Целый год без % по кредитной карте от Альфа-Банка» от 20.06.2023. Учесть условие соблюдения общих интересов и целей всех компаний участников.Разобрать на вебинаре способы выстраивания отношений с внешними деловыми партнёрами, направленные на сотрудничество. Разработать решение существующей проблемы взаимодействия на ВКС совещаниях, направленного на достижение конкретного результата: получение дорожной карты ускорения получения отчётов по проекту «Целый год без % по кредитной карте от Альфа-Банка» от 20.06.2023. Учесть условие соблюдения общих интересов и целей всех компаний участников.',
  created_at: '04.02.2024',
  expires_at: '01.07.2024',
  status: 'В работе',
  comments: [
    {
      author: 'Vityok H. L.',
      type: 'link',
      created_at: '04.02.2024',
      body: 'Ссылка на Альфа Академию',
      link: 'https://www.example.com',
    },
    {
      author: 'Vityok H. L.',
      type: 'text',
      created_at: '04.02.2024',
      body: 'Если будут вопросы по проекту можешь связаться с аналитиком Васильковой М.И.',
    },
    {
      author: 'Vityok H. L.',
      type: 'file',
      created_at: '04.02.2024',
      body: 'Пример отчёта для заполнения итогов обучения',
      link: 'https://www.example.com',
    },
  ],
};

type UserRole = 'admin' | 'user';

const OpenTask: FC<OpenTaskProps> = ({ planId, taskId }) => {

  const userRole: UserRole = 'user';

  
  const renderFooterButtons = () => {
    if (userRole === 'user') {
      return MOCK_TASK?.status === 'В работе' ? (
        <>
          <Button view='primary'>На проверку</Button>
          <Button>Отменить</Button>
        </>
      ) : null;
    }

    if (userRole === 'admin') {
      return MOCK_TASK?.status === 'На проверке' ? (
        <>
          <Button view='primary'>Принять</Button>
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
        <Input className={style.font} size="m" value={MOCK_TASK.name} block type="text" placeholder="  Название задачи" />
        <div className={style.dateWrapper}>
          <UniversalDateInput
            className={style.font}
            block
            size="m"
            value={MOCK_TASK.expires_at}
            view="date-range"
            placeholder="  Дата"
            rightAddons={<CalendarIcon style={{ marginRight: 8 }} />}
          />
          <span className={style.status}>{MOCK_TASK.status.toUpperCase()}</span>
        </div>
        <Textarea
          className={style.font}
          size="m"
          value={MOCK_TASK.description}
          placeholder="  Опишите задачу"
          block
          minRows={20}
        />
        <Collapse className={style.collapse} collapsedLabel="Подробнее" expandedLabel="Скрыть">
          {MOCK_TASK.comments.map(({ author, body, created_at, type, link }) => (
            <Comment created_at={created_at} body={body} author={author} type={type} link={link} />
          ))}
        </Collapse>
      </SidePanelDesktop.Content>
      <SidePanelDesktop.Footer className={style.footer} sticky>
        <div className={style.commentInputWrapper}>
          <CommentInput />
          <IconButton className={style.sendButton} icon={PaperAirplaneMIcon} />
        </div>
        <div className={style.footerButtonsWrapper}>{renderFooterButtons()}</div>
      </SidePanelDesktop.Footer>
    </div>
  );
};

export default OpenTask;
