import { Todo } from '@/types';

export const THEME = {
  dark: 'dark',
  light: 'light',
  dataTheme: 'data-bs-theme',
  changeMode(mode: string): string {
    return mode === this.light ? this.dark : this.light;
  },
  isDark(mode: string): boolean {
    return mode === this.dark;
  },
};

export const isEmpty = (array = []) => array.length === 0;

export const INIT_VALUE = {
  data: [],
  loading: true,
};

export const isFrontend = () => typeof window !== 'undefined';

export const getItemLocalStorage = <T>(key: string, initialValue: T): T => {
  try {
    if (isFrontend()) {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
  } catch (error) {
    console.error('Error getItemLocalStorage:', error);
  }
  return initialValue;
};

export function isDone(completed: boolean = false): {
  text: 'done' | 'pending';
  status: 'success' | 'warning';
} {
  return {
    text: completed ? 'done' : 'pending',
    status: `${completed ? 'success' : 'warning'}`,
  };
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

export function hasIncompleteTodo(todoList: Todo[]) {
  return todoList.some((todo) => todo.completed === false);
}

export function singleFilter(
  todoList: Todo[] = [],
  isComplete: boolean = false
): Todo[] {
  return todoList.filter((todo) => todo.completed === isComplete);
}

export function filterTodoBySearch(value: string, todoList: Todo[]): Todo[] {
  return todoList.filter((todo) =>
    todo.title.toLowerCase().includes(value.toLowerCase())
  );
}

export function filterTodo(
  value: string,
  todoList: Todo[],
  selectFilter: string = 'all'
) {
  const filtered: { [key: string]: Todo[] } = {
    all: filterTodoBySearch(value, todoList),
    done: filterTodoBySearch(value, singleFilter(todoList, true)),
    pending: filterTodoBySearch(value, singleFilter(todoList)),
  };

  return filtered[selectFilter] as Todo[];
}
