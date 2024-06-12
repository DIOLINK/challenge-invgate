import { Todo } from '@/types';

const API_URL = import.meta.env.VITE_API_URL + 'todos/';

export async function getTodoById(idTodo: number): Promise<Todo> {
  return await fetch(API_URL + idTodo)
    .then((response) => response.json())
    .then((data: Todo) => data);
}

export async function getAllTodos(): Promise<Todo[]> {
  return await fetch(API_URL)
    .then((response) => response.json())
    .then((data: Todo[]) => data);
}
