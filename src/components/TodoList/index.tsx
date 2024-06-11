import { useTODO } from '@/contexts/TODOContext';
import { getElementListById, isEmpty } from '@/helpers';
import { ROUTES } from '@/routers/routes';
import { CollectionTodo } from '@/types';
import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { EmptyTodo } from './Empty';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { todoList, collectionsTodo, setCollection } = useTODO();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id || isEmpty(getElementListById(+id, collectionsTodo) as [])) {
      navigate(ROUTES.home);
    } else {
      const [collection] = getElementListById(+id, collectionsTodo);
      setCollection(collection as CollectionTodo);
    }
  }, [id]);

  if (todoList.length === 0) {
    return <EmptyTodo title="Empty TODO" />;
  }
  return (
    <ListGroup as="ol" numbered>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListGroup>
  );
};
