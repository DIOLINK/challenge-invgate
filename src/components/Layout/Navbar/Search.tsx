import { AddItem } from '@/components';
import { Col, Form, Row } from 'react-bootstrap';
export const Search = () => {
  return (
    <Col md={8}>
      <Form className="flex-grow-1">
        <Row className="justify-content-between align-items-center pointer">
          <Col>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="3">
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Pending Search"
              className="d-flex align-items-center justify-content-around pointer"
            />
          </Col>
          <AddItem variant="primary" btnTitle="Search" iconStart={null} />
          <AddItem />
        </Row>
      </Form>
    </Col>
  );
};
