import { isDone } from '@/helpers';
import { Todo } from '@/types';
import { Badge, Col, ListGroup, Row } from 'react-bootstrap';

export const TodoItem = ({ todo }: { todo: Todo }) => {
  console.log('🚀 ~ TodoItem ~ todo:', todo);

  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start mt-1 border-1"
    >
      <Row className="ms-2 me-auto">
        <Col className="fw-bold">{todo.title}</Col>
      </Row>
      <Badge
        bg={isDone(todo.completed).status}
        className="text-uppercase text-dark pointer"
      >
        {isDone(todo.completed).text}
      </Badge>
    </ListGroup.Item>
  );
};
