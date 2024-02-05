/* eslint-disable jsx-a11y/label-has-associated-control */
import { type FC } from 'react';
import { Modal } from '@alfalab/core-components-modal';
import { Input } from '@alfalab/core-components-input';
import { UniversalDateInput } from '@alfalab/core-components-universal-date-input';
import { InputAutocomplete } from '@alfalab/core-components-input-autocomplete';
import { Button } from '@alfalab/core-components-button';
import { useAppDispatch } from 'app/store/hooks';
import style from './CreatePlan.module.scss';

interface CreatePlanProps {}

const CreatePlanComponent: FC<CreatePlanProps> = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Modal.Header hasCloser className={style.header}>
        Добавить ИПР
      </Modal.Header>

      <Modal.Content className={style.body}>
        <label htmlFor="employee-name">
          Найти сотрудника
          <InputAutocomplete size="m" name="employee-name" block placeholder="Ф.И.О." options={[]} />
        </label>
        <label htmlFor="plan-aim">
          Добавить цель ИПР
          <Input size="m" id="plan-aim" placeholder="Пример: Вырасти до тимлида" block />
        </label>
        <label htmlFor="date">
          Добавить срок ИПР
          <UniversalDateInput size="m" id="date" block view="date" />
        </label>
      </Modal.Content>

      <Modal.Footer className={style.footer}>
        <Button className={style.footerButton} block size="s" view="primary">
          Добавить
        </Button>
        {/* <Button className={style.footerButton} block size="s">
          Отменить
        </Button> */}
      </Modal.Footer>
    </>
  );
};

export default CreatePlanComponent;
