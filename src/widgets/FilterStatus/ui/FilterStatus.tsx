import { type FC, useMemo, useState } from 'react';
import { SelectDesktop } from '@alfalab/core-components-select/desktop';
import CustomFieldMultiple from 'widgets/CustomFieldMultiple/ui/CustomFieldMultiple';

const FilterStatus: FC = ({ setFilteredStatus }) => {
  const [selectedMultiple, setSelectedMultiple] = useState([]);

  const options = useMemo(
    () => [
      { key: '0', content: 'Не выполнено' },
      { key: '1', content: 'Выполнено' },
      { key: '2', content: 'В работе' },
      { key: '3', content: 'Создано' },
      { key: '4', content: 'На проверке' },
    ],
    []
  );

  const handleChangeMultiple = ({ selectedMultiple }) => {
    setSelectedMultiple(selectedMultiple.map((option) => option.key));
    setFilteredStatus(selectedMultiple);
  };

  return (
    <SelectDesktop
      allowUnselect
      popoverPosition="bottom-start"
      options={options}
      Field={CustomFieldMultiple}
      onChange={handleChangeMultiple}
      selected={selectedMultiple}
      multiple
      label="Статус"
      fieldProps={{ size: 'xxs' }}
    />
  );
};

export default FilterStatus;
