import { type CSSProperties, type FC } from 'react';
import style from './Column.module.scss';

interface ColumnProps {
  max: number;
  name: string;
  amount: number;
  color: CSSProperties['backgroundColor'];
  width: number;
}

const Column: FC<ColumnProps> = ({ amount, max, name, color, width }) => {
  const height = `${(404 / max) * amount}px`;
  return (
    <div className={style.Column}>
      <span>{amount}</span>
      <div className={style.columnBody} style={{ height, width, backgroundColor: color }} />
      <span>{name}</span>
    </div>
  );
};

export default Column;
