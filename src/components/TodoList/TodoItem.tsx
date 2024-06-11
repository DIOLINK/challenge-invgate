import { useTODO } from '@/contexts/TODOContext';
import { isDone } from '@/helpers';
import { CollectionTodo, Todo } from '@/types';
import { Badge, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MenuItem } from './MenuItem';

export interface TodoItemProps {
  todo?: Todo;
  collection?: CollectionTodo;
}
export const TodoItem = ({ todo, collection }: TodoItemProps) => {
  const { editTodo } = useTODO();

  return (
    <ListGroup.Item
      as="li"
      className={`d-flex justify-content-between align-items-center mt-1 border-1 ${todo?.completed ? 'opacity-25' : 'opacity-100'} `}
    >
      <Row className="ms-2 me-auto">
        <Link
          to={`/${collection?.id}`}
          className={collection ? 'none' : 'noClick'}
        >
          <Col className={`${isDone(todo?.completed).text} fw-bold`}>
            {todo?.title}
            {collection?.title}
          </Col>
        </Link>
      </Row>
      {!!todo && (
        <Badge
          onClick={() => editTodo({ ...todo, completed: !todo.completed })}
          bg={isDone(todo?.completed).status}
          className="text-uppercase text-dark pointer"
        >
          {isDone(todo?.completed).text}
        </Badge>
      )}
      <MenuItem todo={todo} collection={collection} />
    </ListGroup.Item>
  );
};
