import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftMIcon } from '@alfalab/icons-android/ArrowLeftMIcon';
import style from './BackButton.module.scss';

const BackButton: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleClick} type="button" className={style.BackButton}>
      <ArrowLeftMIcon height={18} width={18}/>
      Назад
    </button>
  );
};

export default BackButton;
