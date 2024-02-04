import { type Plan } from 'entities/plans/model/types/Plan';

export const mockPlan: Plan = {
  aim_description: 'Вертикальный рост. Развитие лидерских и управленческих компетенций. Переход в тимлида команды.',
  employee: {
    id: 5667,
    full_name: 'Петров Петр Петрович',
    position: 'Разработчик',
    photo: `https://media.tenor.com/4t8eATWrfS4AAAAM/huh-dog-what-dog.gif`,
    short_name: 'sgd',
  },
  expires_at: '24.12.2024',
  status: 'under_review',
  created_at: '14.12.2024',
  id: 3,
  tasks: [],
};
