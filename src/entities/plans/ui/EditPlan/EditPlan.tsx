/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, type FC, type ChangeEvent, type FormEvent } from 'react';
import { Modal } from '@alfalab/core-components-modal';
import { Input } from '@alfalab/core-components-input';
import { UniversalDateInput } from '@alfalab/core-components-universal-date-input';
import { Button } from '@alfalab/core-components-button';
import { useAppDispatch } from 'app/store/hooks';
import { updatePlanById } from 'entities/plans';
import { useParams } from 'react-router-dom';
import style from './EditPlan.module.scss';

interface EditPlanProps {
  closeModal?: () => void;
}

const EditPlanComponent: FC<EditPlanProps> = ({ closeModal }) => {
  const dispatch = useAppDispatch();
  const { plan_id } = useParams();
  const [formData, setFormData] = useState({
    aim: '',
    date: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement> | null) => {
    if (event) {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updatePlanById([Number(plan_id), { aim_description: formData.aim, expires_at: formData.date }]));
    if (closeModal) {
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Modal.Header hasCloser className={style.header}>
        Редактировать ИПР
      </Modal.Header>

      <Modal.Content className={style.body}>
        <label htmlFor="aim">
          Изменить цель ИПР
          <Input
            id="aim"
            required
            size="m"
            name="aim"
            onChange={handleInputChange}
            value={formData.aim}
            placeholder="Пример: Вырасти до тимлида"
            block
          />
        </label>
        <label htmlFor="date">
          Изменить срок ИПР
          <UniversalDateInput
            id="date"
            required
            onChange={handleInputChange}
            pattern="\d{2}\.\d{2}\.\d{4}"
            size="m"
            name="date"
            value={formData.date}
            block
            view="date"
          />
        </label>
      </Modal.Content>

      <Modal.Footer className={style.footer}>
        <Button className={style.footerButton} block size="s" type="submit" view="primary">
          Изменить
        </Button>
        {/* <Button className={style.footerButton} block size="s">
          Отменить
        </Button> */}
      </Modal.Footer>
    </form>
  );
};

export default EditPlanComponent;
