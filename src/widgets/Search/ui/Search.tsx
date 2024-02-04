import { useRef, type FC, useEffect, useState } from 'react';
import { MagnifierMIcon } from '@alfalab/icons-glyph/MagnifierMIcon';
import style from './Search.module.scss';

interface SearchProps {
  height?: 40 | 48;
  width?: 175 | 925 | '100%';
}

const Search: FC<SearchProps> = ({ height = 48, width = '100%' }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const currentInputRef = inputRef.current;
    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };
    currentInputRef?.addEventListener('focus', handleFocus);
    currentInputRef?.addEventListener('blur', handleBlur);

    return () => {
      currentInputRef?.removeEventListener('focus', handleFocus);
      currentInputRef?.removeEventListener('blur', handleBlur);
    };
  }, []);
  return (
    <div style={{ height, width }} className={style.Search}>
      {!isFocused && (
        <>
          <MagnifierMIcon /> <span>Поиск</span>
        </>
      )}
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default Search;
