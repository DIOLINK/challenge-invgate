import { Todo } from '@/types';

export function randomTitle(): string {
  const title: string[] = [
    'La sombra del viento',
    'Cien años de soledad',
    '1984',
    'El principito',
    'Don Quijote de la Mancha',
  ];
  return title[Math.floor(Math.random() * title.length)];
}

export function randomBoolean(): boolean {
  return Math.random() >= 0.5;
}

export function removeTodoById(id: number, todoList: Todo[]) {
  return todoList.filter((todo) => todo.id !== id);
}

export function editTodoById(id: number, todoList: Todo[], newTodo: Todo) {
  return todoList.map((todo) => {
    if (todo.id === id) {
      return { ...todo, ...newTodo };
    }
    return todo;
  });
}
