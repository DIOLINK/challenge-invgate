import { Layout, TodoList } from '@/components';
import { AddTODO } from '@/components/Modals';
import { filterTodo } from '@/helpers';
import { useLocalState } from '@/hooks/useLocalStorage';
import { Filters, Todo } from '@/types';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [value, setValue] = useLocalState<Todo[]>('todoList', []);
  const [todoList, setTodoList] = useState<Todo[]>(value);
  const [todoFilter, setTodoFilters] = useState<Filters>({
    search: '',
    selectFilter: 'all',
  });

  useEffect(() => {
    setValue(todoList);
  }, [todoList]);

  const [todoSelected, setTodoSelected] = useState<Todo | undefined>(undefined);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Layout
        setShowModal={setShowModal}
        setTodoList={setTodoList}
        setTodoFilters={setTodoFilters}
        todoFilter={todoFilter}
      >
        <TodoList
          todoList={filterTodo(
            todoFilter.search,
            todoList,
            todoFilter.selectFilter
          )}
          setTodoSelected={setTodoSelected}
          setShowModal={setShowModal}
          setTodoList={setTodoList}
        />
      </Layout>
      <AddTODO
        showModal={showModal}
        handleClose={() => {
          setShowModal(false);
          setTodoSelected(undefined);
        }}
        setTodoList={setTodoList}
        todo={todoSelected}
      />
    </>
  );
};
