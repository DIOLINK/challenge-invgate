import { isDone } from '@/helpers';
import { Todo } from '@/types';
import { Badge, Col, ListGroup, Row } from 'react-bootstrap';
import { MenuItem } from './MenuItem';

export const TodoItem = ({
  todo,
  onEdit,
  onDelete,
  onStatus,
}: {
  todo: Todo;
  onEdit: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
  onStatus: (todo: Todo) => void;
}) => {
  return (
    <ListGroup.Item
      as="li"
      className={`d-flex justify-content-between align-items-center mt-1 border-1 ${todo.completed ? 'opacity-25' : 'opacity-100'} `}
    >
      <Row className="ms-2 me-auto">
        <Col className={`${isDone(todo.completed).text} fw-bold`}>
          {todo.title}
        </Col>
      </Row>
      <Badge
        bg={isDone(todo.completed).status}
        className="text-uppercase text-dark pointer"
        onClick={() => onStatus(todo)}
      >
        {isDone(todo.completed).text}
      </Badge>
      <MenuItem
        handleEdit={() => onEdit(todo)}
        handleDelete={() => onDelete(todo)}
      />
    </ListGroup.Item>
  );
};
