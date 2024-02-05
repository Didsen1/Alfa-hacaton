import { type FC } from 'react';
import Navbar, { NavbarLink } from 'widgets/Navbar';
import { Typography } from '@alfalab/core-components-typography';
import ChartIcon from 'shared/icons/chart-with-up-arrow.svg?react';
import CrosshairIcon from 'shared/icons/crosshair-icon.svg?react';
import { Counter } from 'widgets/TaskCounter';
import Chart from './Chart/Chart';
import { type column } from '../model/types/chart';
import style from './Analytics.module.scss';

interface AnalyticsProps {}

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

const Analytics: FC<AnalyticsProps> = () => (
  <>
    <Navbar>
      <NavbarLink to="/Admin" text="ИПР" Icon={CrosshairIcon} />
      <NavbarLink to="/Admin/Analytics" text="Аналитика" Icon={ChartIcon} />
    </Navbar>
    <div className={style.Analytics}>
      <Typography.Title tag="h2" className={style.h2}>
        Аналитика
      </Typography.Title>
      <div className={style.countersWrapper}>
        <Counter quantity={3} title="Завершенные задачи" />
        <Counter quantity={0} title="Просроченные задачи" />
        <Counter quantity={9} title="Всего задач" />
      </div>
      <h2 className={style.heading}>Текущие условия</h2>
      <div className={style.indicatorsWrapper}>
        <div className={style.indicator}>
          <span className={style.indicatorValue}>10</span>
          <span className={style.indicatorName}>ИПР</span>
        </div>
        <div className={style.indicator}>
          <span className={style.indicatorValue}>40%</span>
          <span className={style.indicatorName}>выполнено</span>
        </div>
        <div className={style.indicator}>
          <span className={style.indicatorValue}>46</span>
          <span className={style.indicatorName}>задач</span>
        </div>
        <div className={style.indicator}>
          <span className={style.indicatorValue}>25%</span>
          <span className={style.indicatorName}>выполнено</span>
        </div>
      </div>
      <div className={style.chartWrapper}>
        <Chart columns={taskColumns} width={404} heading="Статусы задач" color="#61BE76" />
        <Chart columns={planColumns} width={320} heading="Статусы ИПР" color="#FF9352" />
      </div>
    </div>
  </>
);

export default Analytics;
