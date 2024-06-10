import { useLocalState } from '@/hooks/useLocalStorage';
import { Todo } from '@/types';
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { EmptyTodo } from './Empty';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const [value, setValue] = useLocalState<Todo[]>('todoList', []);
  const [todoList, setTodoList] = useState<Todo[]>(value);
  if (todoList.length === 0) {
    return <EmptyTodo />;
  }
  return (
    <ListGroup as="ol" numbered>
      {todoList.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ListGroup>
  );
};
