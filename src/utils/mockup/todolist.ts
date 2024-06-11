import { CollectionTodo, Todo } from '@/types';
import { randomBoolean, randomTitle } from '../common';

export function mockTodo() {
  return {
    id: Date.now(),
    title: randomTitle(),
    completed: randomBoolean(),
    userId: 0,
  };
}
export function mockCollectionTodo(): CollectionTodo {
  return {
    id: Date.now(),
    title: randomTitle(),
    todos: mockTodoList(),
  };
}

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
