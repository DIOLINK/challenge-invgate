import { Todo } from '@/types';
import { randomBoolean, randomTitle } from '../common';

export const mockTodoList = (size: number = 5): Todo[] => {
  const arrayTodos: Todo[] = [];
  for (let i = 0; i < size; i++) {
    arrayTodos.push({
      id: i,
      title: randomTitle(),
      completed: randomBoolean(),
      userId: 0,
    });
  }
  return arrayTodos;
};
