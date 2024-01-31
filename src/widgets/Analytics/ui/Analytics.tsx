import { type FC } from 'react';
import style from './Analytics.module.scss'
import Chart from './Chart/Chart';
import { type column } from '../model/types/chart';

interface AnalyticsProps {

}

const taskColumns: column[] = [
  { amount: 10, name: 'Создано' },
  { amount: 2, name: 'Не выполнено' },
  { amount: 18, name: 'В работе' },
  { amount: 8, name: 'На проверке' },
  { amount: 24, name: 'Выполнено' },
];

const planColumns: column[] = [
  { amount: 1, name: 'Создано' },
  { amount: 1, name: 'Не выполнено' },
  { amount: 1, name: 'В работе' },
  { amount: 6, name: 'Выполнено' },
];

const Analytics: FC<AnalyticsProps> = () => {
  const a = ''
  return (
    <div className={style.chartWrapper}>
      <Chart columns={taskColumns} width={404} heading='Статусы задач' color='#61BE76' />
      <Chart columns={planColumns} width={320} heading='Статусы ИПР' color='#FF9352' />
    </div>
  );
};

export default Analytics