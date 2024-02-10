import { useState, type FC, type FormEvent, type ChangeEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SidePanelDesktop } from '@alfalab/core-components-side-panel/desktop';
import { Input } from '@alfalab/core-components-input';
import { UniversalDateInput } from '@alfalab/core-components-universal-date-input';
import CalendarIcon from 'shared/icons/calendar-icon.svg?react';
import { Textarea } from '@alfalab/core-components-textarea';
import { Button } from '@alfalab/core-components-button';
import { useAppDispatch } from 'app/store/hooks';
import { getPlanById } from 'entities/plans';
import { createTask, getAllTasks } from 'entities/tasks';
import style from './CreateTaskComponent.module.scss';

const CreateTaskComponent: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const dispatch = useAppDispatch();
  const { plan_id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    expires_at: '',
    description: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      createTask([
        Number(plan_id),
        { name: formData.name, expires_at: formData.expires_at, description: formData.description },
      ])
    );
    setFormData({
      name: '',
      expires_at: '',
      description: '',
    });
    closeModal();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | null) => {
    if (event) {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.CreateTaskComponent}>
      <SidePanelDesktop.Header />

      <SidePanelDesktop.Content className={style.content}>
        <Input
          className={style.font}
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          size="m"
          block
          type="text"
          placeholder="  Название задачи"
        />
        <div className={style.dateWrapper}>
          <UniversalDateInput
            className={style.font}
            name="expires_at"
            pattern="\d{2}\.\d{2}\.\d{4}"
            required
            onChange={handleChange}
            block
            value={formData.expires_at}
            size="m"
            view="date"
            placeholder="  Дата"
            rightAddons={<CalendarIcon style={{ marginRight: 8 }} />}
          />
        </div>
        <Textarea
          className={style.font}
          name="description"
          required
          value={formData.description}
          onChange={handleChange}
          size="m"
          placeholder="  Опишите задачу"
          block
          minRows={20}
        />
      </SidePanelDesktop.Content>

      <SidePanelDesktop.Footer className={style.footer} sticky>
        {/* <div className={style.commentInputWrapper}>
          <CommentInput />
          <IconButton className={style.sendButton} icon={PaperAirplaneMIcon} />
        </div> */}
        <div className={style.footerButtonsWrapper}>
          <Button type="submit" view="primary">
            Создать
          </Button>
        </div>
      </SidePanelDesktop.Footer>
    </form>
  );
};

export default CreateTaskComponent;
