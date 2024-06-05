import { PropsWithChildren } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from './Navbar';

interface LayoutProps {}
export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <NavBar />
      <Container fluid="md">
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </>
  );
};
