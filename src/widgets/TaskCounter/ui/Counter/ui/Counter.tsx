import { type FC } from 'react';
import styles from './Counter.module.scss';

interface CounterProps {
  title: string;
  quantity: number;
}

const Counter: FC<CounterProps> = ({ title, quantity }) => (
  <div className={styles.counter}>
    <div className={styles.conteiner}>
      <p className={styles.title}>{title}</p>
      <span className={styles.quantity}>{quantity}</span>
    </div>
  </div>
);

export default Counter;
