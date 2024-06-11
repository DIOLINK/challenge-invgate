import { Col, Container } from 'react-bootstrap';

export const EmptyTodo = ({ title = 'Empty TODO' }: { title: string }) => {
  return (
    <Container className="text-center">
      <Col className="d-flex align-items-center justify-content-center res">
        <h2>{title}</h2>
      </Col>
    </Container>
  );
};
