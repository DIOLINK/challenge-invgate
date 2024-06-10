import { Col, Container } from 'react-bootstrap';

export const EmptyTodo = () => {
  return (
    <Container className="text-center">
      <Col className="d-flex align-items-center justify-content-center res">
        <h2>Empty TODO</h2>
      </Col>
    </Container>
  );
};
