import { useTODO } from '@/contexts/TODOContext';
import { ListGroup } from 'react-bootstrap';
import { EmptyTodo } from './Empty';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { todoList } = useTODO();

  if (todoList.length === 0) {
    return <EmptyTodo />;
  }
  return (
    <ListGroup as="ol" numbered>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListGroup>
  );
};
