import { mockTodoList } from '@/utils';
import { ListGroup } from 'react-bootstrap';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  return (
    <ListGroup as="ol" numbered>
      {mockTodoList(50).map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ListGroup>
  );
};
