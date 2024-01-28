import { type Task } from 'entities/task/model/Task';

export const data: Task[] = [
  {
    task_id: '28',
    created_at: '30.06.2022',
    name: 'Повышение квалификации',
    description: 'Пройти курс, получить зачёт по всем разделам',
    status: 'Не выполнено',
    expires_at: '09.01.2024',
    comments: [],
  },
  {
    task_id: '12',
    created_at: '30.06.2022',
    name: 'Прокачать софт-скилл коммуникации',
    description: 'Наладить коммуникацию с отделом дизайна',
    status: 'Выполнено',
    expires_at: '09.01.2024',
    comments: [],
  },
  {
    task_id: '5',
    created_at: '30.06.2022',
    name: 'Прокачать хард-скиллы',
    description: 'Выполнить задачу с использованием нового инструмента подготовить разнообразный',
    status: 'В работе',
    expires_at: '09.01.2024',
    comments: [],
  },
  {
    task_id: '4',
    created_at: '30.06.2022',
    name: 'Участие в хакатоне',
    description: 'Принять участие в новогоднем хакатоне вместе с аналитиками и дизайнерами разнообразный',
    status: 'Создано',
    expires_at: '09.01.2024',
    comments: [],
  },
];
