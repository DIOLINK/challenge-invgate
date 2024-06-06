import { isDone } from '@/helpers';
import { Todo } from '@/types';
import { Badge, Col, ListGroup, Row } from 'react-bootstrap';
import { MenuItem } from './MenuItem';

export const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-center mt-1 border-1"
    >
      <Row className="ms-2 me-auto">
        <Col className={`${isDone(todo.completed).text} fw-bold`}>
          {todo.title}
        </Col>
      </Row>
      <Badge
        bg={isDone(todo.completed).status}
        className="text-uppercase text-dark pointer"
      >
        {isDone(todo.completed).text}
      </Badge>
      <MenuItem />
    </ListGroup.Item>
  );
};
