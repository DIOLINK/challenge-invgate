import { Filters, Todo } from '@/types';
import { Dispatch, PropsWithChildren } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from './Navbar';

export interface LayoutProps {
  todoFilter: Filters;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
  setTodoList: Dispatch<React.SetStateAction<Todo[]>>;
  setTodoFilters: Dispatch<React.SetStateAction<Filters>>;
}
export const Layout = ({
  children,
  todoFilter,
  setShowModal,
  setTodoList,
  setTodoFilters,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <NavBar
        todoFilter={todoFilter}
        setShowModal={setShowModal}
        setTodoList={setTodoList}
        setTodoFilters={setTodoFilters}
      />
      <Container fluid="md">
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </>
  );
};
