/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, type FC, type ChangeEvent, type FormEvent } from 'react';
import { Modal } from '@alfalab/core-components-modal';
import { Input } from '@alfalab/core-components-input';
import { UniversalDateInput } from '@alfalab/core-components-universal-date-input';
import { type BaseSelectChangePayload } from '@alfalab/core-components-select/typings';
import { InputAutocomplete } from '@alfalab/core-components-input-autocomplete';
import { Button } from '@alfalab/core-components-button';
import { createPlan } from 'entities/plans';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import style from './CreatePlan.module.scss';

interface CreatePlanProps {
  closeModal?: () => void;
}

const CreatePlanComponent: FC<CreatePlanProps> = ({ closeModal }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    employeeName: {
      name: '',
      id: '',
    },
    planAim: '',
    date: '',
  });
  const { employees } = useAppSelector((state) => state.employees);
  const options = employees.map((e) => ({ content: e.full_name, key: String(e.id) }));

  const handelEmployeeChange = (event: BaseSelectChangePayload) => {
    setFormData((prev) => ({
      ...prev,
      employeeName: { id: event.selected?.key as string, name: event.selected?.content as string },
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      createPlan({
        aim_description: formData.planAim,
        // @ts-ignore
        employee_id: Number(formData.employeeName.id),
        expires_at: formData.date,
      })
    );

    if (closeModal) {
      closeModal();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement> | null) => {
    if (event) {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Modal.Header hasCloser className={style.header}>
        Добавить ИПР
      </Modal.Header>

      <Modal.Content className={style.body}>
        <label htmlFor="employeeName">
          Найти сотрудника
          <InputAutocomplete
            size="m"
            name="employeeName"
            block
            value={formData.employeeName.name}
            onChange={handelEmployeeChange}
            placeholder="Ф.И.О."
            options={options}
          />
        </label>
        <label htmlFor="planAim">
          Добавить цель ИПР
          <Input
            size="m"
            onChange={handleChange}
            name="planAim"
            value={formData.planAim}
            id="planAim"
            placeholder="Пример: Вырасти до тимлида"
            block
          />
        </label>
        <label htmlFor="date">
          Добавить срок ИПР
          <UniversalDateInput
            size="m"
            onChange={handleChange}
            name="date"
            value={formData.date}
            id="date"
            block
            view="date"
          />
        </label>
      </Modal.Content>

      <Modal.Footer className={style.footer}>
        <Button className={style.footerButton} type="submit" block size="s" view="primary">
          Добавить
        </Button>
        {/* <Button className={style.footerButton} block size="s">
          Отменить
        </Button> */}
      </Modal.Footer>
    </form>
  );
};

export default CreatePlanComponent;
