import { Layout } from '@/components';
import { EmptyTodo as EmptyCollection } from '@/components/TodoList/Empty';
import { TodoItem as ListTodoItem } from '@/components/TodoList/TodoItem';
import { useTODO } from '@/contexts/TODOContext';
import { ListGroup, Spinner } from 'react-bootstrap';

export const HomePage = () => {
  const { collectionsTodo, isLoading } = useTODO();
  if (isLoading) {
    return <Spinner animation="border" />;
  }
  return (
    <Layout>
      {collectionsTodo.length === 0 ? (
        <EmptyCollection title="Empty List TODO" />
      ) : (
        <ListGroup as="ol">
          {collectionsTodo.map((collection) => (
            <ListTodoItem collection={collection} key={collection.id} />
          ))}
        </ListGroup>
      )}
    </Layout>
  );
};
