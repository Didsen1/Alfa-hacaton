import { type FC, type CSSProperties } from 'react';
import style from './Chart.module.scss';
import Column from '../Column/Column';
import { type column } from '../../model/types/chart';

interface ChartProps {
  heading: string;
  color: CSSProperties['backgroundColor'];
  columns: column[];
  width: number;
}

const Chart: FC<ChartProps> = ({ color, columns, heading, width }) => {
  const maxValue = Math.max(...columns.map((column) => column.amount));
  const bodyWidth = width / columns.length;

  return (
    <div className={style.Chart}>
      <span className={style.heading}>{heading}</span>
      <div className={style.columnsWrapper}>
        {columns.map((column) => (
          <Column max={maxValue} width={bodyWidth} color={color} {...column} />
        ))}
      </div>
    </div>
  );
};

export default Chart;
