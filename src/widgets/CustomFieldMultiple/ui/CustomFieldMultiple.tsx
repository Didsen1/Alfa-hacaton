import React from 'react';
import { FilterTag, type FC } from '@alfalab/core-components-filter-tag';

const CustomFieldMultiple: FC = ({
  label,
  selected,
  setSelectedItems,
  selectedMultiple,
  innerProps: { ref, ...restInnerProps },
  ...restProps
}) => {
  const content = selected && selected.content;
  const checkedContent = (
    <span>
      {!label}
      <b> {selectedMultiple.length !== 1 ? `Выбрано: ${selectedMultiple.length}` : content}</b>
    </span>
  );

  const contentLabel = <span>{label}</span>;

  return (
    <div ref={ref}>
      <FilterTag onClear={() => setSelectedItems([])} checked={!!selected} {...restInnerProps} {...restProps}>
        {selected ? checkedContent : contentLabel}
      </FilterTag>
    </div>
  );
};

export default CustomFieldMultiple;
