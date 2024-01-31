import { type FC } from 'react';
import { SidePanelDesktop } from '@alfalab/core-components-side-panel/desktop';
import { Input } from '@alfalab/core-components-input';
import { UniversalDateInput } from '@alfalab/core-components-universal-date-input';
import CalendarIcon from 'shared/icons/calendar-icon.svg?react';
import { Textarea } from '@alfalab/core-components-textarea';
import { Button } from '@alfalab/core-components-button';
import { IconButton } from '@alfalab/core-components-icon-button';
import { PaperAirplaneMIcon } from '@alfalab/icons-glyph/PaperAirplaneMIcon';
import style from './CreateTask.module.scss';
import CommentInput from '../CommentInput/CommentInput';

const CreateTask: FC = () => {
  let a;

  return (
    <div className={style.CreateTask}>
      <SidePanelDesktop.Header />

      <SidePanelDesktop.Content className={style.content}>
        <Input className={style.font} size="m" block type="text" placeholder="  Название задачи" />
        <div className={style.dateWrapper}>
          <UniversalDateInput
            className={style.font}
            block
            size="m"
            view="date-range"
            placeholder="  Дата"
            rightAddons={<CalendarIcon style={{ marginRight: 8 }} />}
          />
        </div>
        <Textarea className={style.font} size="m" placeholder="  Опишите задачу" block minRows={20} />
      </SidePanelDesktop.Content>

      <SidePanelDesktop.Footer className={style.footer} sticky>
        <div className={style.commentInputWrapper}>
          <CommentInput />
          <IconButton className={style.sendButton} icon={PaperAirplaneMIcon} />
        </div>
        <div className={style.footerButtonsWrapper}>
          <Button view="primary">Создать</Button>
          <Button>Отменить</Button>
        </div>
      </SidePanelDesktop.Footer>
    </div>
  );
};

export default CreateTask;
