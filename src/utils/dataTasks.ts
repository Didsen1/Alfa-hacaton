import { type Task } from 'entities/tasks';

export const data: Task[] = [
  {
    id: '28',
    created_at: '30.06.2022',
    name: 'Повышение квалификации',
    description: 'Пройти курс, получить зачёт по всем разделам',
    status: 'failed',
    expires_at: '09.01.2024',
    comments: [],
  },
  {
    id: '12',
    created_at: '30.06.2022',
    name: 'Прокачать софт-скилл коммуникации',
    description: 'Наладить коммуникацию с отделом дизайна',
    status: 'done',
    expires_at: '30.01.2024',
    comments: [],
  },
  {
    id: '5',
    created_at: '30.06.2022',
    name: 'Прокачать хард-скиллы',
    description: 'Выполнить задачу с использованием нового инструмента подготовить разнообразный',
    status: 'in_progress',
    expires_at: '20.02.2024',
    comments: [],
  },
  {
    id: '4',
    created_at: '05.02.2024',
    name: 'Участие в хакатоне',
    description: 'Принять участие в новогоднем хакатоне вместе с аналитиками и дизайнерами разнообразный',
    status: 'created',
    expires_at: '05.02.2024',
    comments: [],
  },
];
