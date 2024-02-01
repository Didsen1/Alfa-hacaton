import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { FilterTag } from '@alfalab/core-components-filter-tag';
import { Popover } from '@alfalab/core-components-popover';
import { Calendar } from '@alfalab/core-components-calendar';
import usePeriod from 'utils/hooks/usePeriod';

const FilterCalendar = () => {
  const { selectedFrom, selectedTo, updatePeriod } = usePeriod();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [filterTag, setFilterTag] = useState(null);
  const calendarRef = useRef(null);

  const handleOpen = () => setOpen(!open);
  const handleClear = () => {
    setOpen(false);
    updatePeriod(null, null);
  };

  const handleUpdatePeriod = (date) => {
    updatePeriod(date);

    if (selectedFrom) {
      setOpen(false);
    }
  };

  const handleFilterTagRef = (node) => {
    setFilterTag(node);
  };

  const handleBlur = (ref, handleClick) => {
    useEffect(() => {
      const listener = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          handleClick(event);
        }
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handleClick]);
  };

  handleBlur(calendarRef, (event) => {
    if (filterTag && !filterTag.contains(event.target)) {
      handleOpen();
    }
  });

  const getDateString = useCallback((date) => {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }, []);

  const selectedRange = useMemo(() => {
    if (selectedFrom && selectedTo) {
      const selectedFromDate = new Date(selectedFrom);
      const selectedToDate = new Date(selectedTo);
      return `${getDateString(selectedFromDate)} - ${getDateString(selectedToDate)}`;
    }
    return '';
  }, [selectedFrom, selectedTo]);

  const checkedContent = (
    <span>
      Диапазон значений: <b>{selectedRange && selectedRange}</b>
    </span>
  );
  const content = <span>Диапазон дат</span>;

  const css = `
    div {
        border-radius: 8px;
    }
  `;
  return (
    <>
      <Popover anchorElement={filterTag} offset={[0, 4]} open={open} preventFlip position="bottom-start">
        <style>{css}</style>
        <div style={{ width: 344, padding: '0 16px' }}>
          <Calendar
            ref={calendarRef}
            responsive
            value={value}
            selectedFrom={selectedFrom}
            selectedTo={selectedTo}
            onChange={handleUpdatePeriod}
            selectorView="month-only"
          />
        </div>
      </Popover>

      <FilterTag
        ref={handleFilterTagRef}
        size="xxs"
        onClick={handleOpen}
        onClear={handleClear}
        checked={selectedRange}
        open={open}
      >
        {selectedRange ? checkedContent : content}
      </FilterTag>
    </>
  );
};

export default FilterCalendar;
