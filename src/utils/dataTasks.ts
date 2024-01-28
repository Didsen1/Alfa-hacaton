interface TaskData {
  id: number;
  date: string;
  title: string;
  description: string;
  color: 'red' | 'green' | 'orange' | 'grey';
  status: 'НЕ ВЫПОЛНЕНО' | 'ВЫПОЛНЕНО' | 'В РАБОТЕ' | 'СОЗДАНО';
  deadline: string;
}

export const data: TaskData[] = [
  {
    id: 28,
    date: '30.06.2022',
    title: 'Повышение квалификации',
    description: 'Пройти курс, получить зачёт по всем разделам',
    color: 'red',
    status: 'НЕ ВЫПОЛНЕНО',
    deadline: '09.01.2024',
  },
  {
    id: 12,
    date: '30.06.2022',
    title: 'Прокачать софт-скилл коммуникации',
    description: 'Наладить коммуникацию с отделом дизайна',
    color: 'green',
    status: 'ВЫПОЛНЕНО',
    deadline: '09.01.2024',
  },
  {
    id: 5,
    date: '30.06.2022',
    title: 'Прокачать хард-скиллы',
    description: 'Выполнить задачу с использованием нового инструмента подготовить разнообразный',
    color: 'orange',
    status: 'В РАБОТЕ',
    deadline: '09.01.2024',
  },
  {
    id: 4,
    date: '30.06.2022',
    title: 'Участие в хакатоне',
    description: 'Принять участие в новогоднем хакатоне вместе с аналитиками и дизайнерами разнообразный',
    color: 'grey',
    status: 'СОЗДАНО',
    deadline: '09.01.2024',
  },
];
