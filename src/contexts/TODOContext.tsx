import { getAllTodos } from '@/data/getterTodos';
import {
  editCollectionById,
  editTodoById,
  filterTodo,
  getElementListById,
  hasIncompleteTodo,
  isEmpty,
  removeTodoById,
} from '@/helpers';
import { useLocalState } from '@/hooks/useLocalStorage';
import { CollectionTodo, Todo } from '@/types';

import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type TsFunction = (todo?: Todo) => void;
type CsFunction = (collection?: CollectionTodo) => void;
interface TODOContextProps {
  addCollectionTodo: CsFunction;
  addTodo: TsFunction;
  collectionsTodo: CollectionTodo[];
  deleteCollection: CsFunction;
  deleteTodo: TsFunction;
  editCollection: CsFunction;
  editTodo: TsFunction;
  isLoading: boolean;
  isPending: boolean;
  setCollection: Dispatch<React.SetStateAction<CollectionTodo | null>>;
  setFilter: Dispatch<React.SetStateAction<TSFilter>>;
  todoList: Todo[];
}

const TODOContext = createContext<TODOContextProps>({} as TODOContextProps);

export interface TSFilter {
  search: string;
  selectFilter: string;
}
export const TODOContextProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<TSFilter>({
    search: '',
    selectFilter: 'all',
  });

  const [valueCollectionTodo, setValueCollectionTodo] = useLocalState<
    CollectionTodo[]
  >('collectionTodo', []);

  const [collectionTodo, setCollectionTodo] =
    useState<CollectionTodo[]>(valueCollectionTodo);

  const [collection, setCollection] = useState<CollectionTodo | null>(null);

  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    if (!isEmpty(getElementListById(0, collectionTodo) as [])) return;
    getAllTodos()
      .then((data) => {
        addCollectionTodo({ id: 0, title: 'Example with API', todos: data });
        setIsLoading(false);
      })
      .catch((error) => {
        alert(`Error get all TODOS: ${error.message}`);
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!collection?.todos) return;
    setTodoList(collection?.todos);
  }, [collection]);

  useEffect(() => {
    if (!collection) return;
    editCollection({ ...collection, todos: todoList });
  }, [todoList]);

  useEffect(() => {
    setValueCollectionTodo(collectionTodo);
    setIsLoading(false);
  }, [collectionTodo]);

  function addTodo(todo?: Todo) {
    if (!!todo) setTodoList([...todoList, { ...todo }]);
  }

  function addCollectionTodo(collection?: CollectionTodo) {
    if (!!collection) setCollectionTodo([...collectionTodo, { ...collection }]);
  }

  function deleteTodo(todo?: Todo) {
    if (!!todo) setTodoList(() => removeTodoById(todo.id, todoList) as Todo[]);
  }

  function deleteCollection(collection?: CollectionTodo) {
    if (!!collection)
      setCollectionTodo(
        () => removeTodoById(collection.id, collectionTodo) as CollectionTodo[]
      );
  }

  function editTodo(todo?: Todo) {
    if (!!todo) setTodoList(() => editTodoById(todo.id, todoList, todo));
  }

  function editCollection(collection?: CollectionTodo) {
    if (!!collection)
      setCollectionTodo(() =>
        editCollectionById(collection.id, collectionTodo, collection)
      );
  }

  return (
    <TODOContext.Provider
      value={{
        isLoading,
        collectionsTodo: filterTodo(
          filter.search,
          collectionTodo
        ) as CollectionTodo[],
        todoList: filterTodo(
          filter.search,
          todoList,
          filter.selectFilter
        ) as Todo[],
        isPending: hasIncompleteTodo(todoList),
        addCollectionTodo,
        addTodo,
        deleteCollection,
        deleteTodo,
        editCollection,
        editTodo,
        setFilter,
        setCollection,
      }}
    >
      {children}
    </TODOContext.Provider>
  );
};

export const useTODO = () => {
  return useContext(TODOContext);
};
