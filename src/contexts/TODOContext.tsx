import {
  editTodoById,
  filterTodo,
  hasIncompleteTodo,
  removeTodoById,
} from '@/helpers';
import { useLocalState } from '@/hooks/useLocalStorage';
import { Todo } from '@/types';

import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type TsFunction = (todo?: Todo) => void;
interface TODOContextProps {
  todoList: Todo[];
  isPending: boolean;
  addTodo: TsFunction;
  deleteTodo: TsFunction;
  editTodo: TsFunction;
  setFilter: Dispatch<React.SetStateAction<TSFilter>>;
}

const TODOContext = createContext<TODOContextProps>({
  todoList: [],
  isPending: false,
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  setFilter: () => {},
});

export interface TSFilter {
  search: string;
  selectFilter: string;
}
export const TODOContextProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<TSFilter>({
    search: '',
    selectFilter: 'all',
  });
  const [value, setValue] = useLocalState<Todo[]>('todoList', []);
  const [todoList, setTodoList] = useState<Todo[]>(value);

  useEffect(() => {
    setValue(todoList);
  }, [todoList]);

  function addTodo(todo?: Todo) {
    if (!!todo) setTodoList([...todoList, { ...todo }]);
  }

  function deleteTodo(todo?: Todo) {
    if (!!todo) setTodoList(() => removeTodoById(todo.id, todoList));
  }

  function editTodo(todo?: Todo) {
    if (!!todo) setTodoList(() => editTodoById(todo.id, todoList, todo));
  }

  return (
    <TODOContext.Provider
      value={{
        todoList: filterTodo(filter.search, todoList, filter.selectFilter),
        isPending: hasIncompleteTodo(todoList),
        addTodo,
        deleteTodo,
        editTodo,
        setFilter,
      }}
    >
      {children}
    </TODOContext.Provider>
  );
};

export const useTODO = () => {
  return useContext(TODOContext);
};
