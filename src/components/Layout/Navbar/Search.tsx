import { AddItem } from '@/components';
import { ChangeEvent } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { LayoutProps } from '..';
interface SearchProps extends LayoutProps {}
export const Search = ({
  setShowModal,
  setTodoFilters,
  todoFilter,
}: SearchProps) => {
  const OPTIONS_SELECTED = [
    { value: 'all', label: 'All Todo' },
    { value: 'done', label: 'Done' },
    { value: 'pending', label: 'Pending' },
  ];

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void {
    setTodoFilters({
      ...todoFilter,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <Col md={8}>
      <Form className="flex-grow-1">
        <Row className="justify-content-between align-items-center pointer">
          <Col>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              autoComplete="off"
              name="search"
              onChange={(event) =>
                handleChange(event as ChangeEvent<HTMLInputElement>)
              }
            />
          </Col>
          <Col xs="3">
            <Form.Select
              aria-label="Default select example"
              name="selectFilter"
              onChange={(event) =>
                handleChange(event as ChangeEvent<HTMLSelectElement>)
              }
            >
              {OPTIONS_SELECTED.map((option, index) => (
                <option key={option.value + index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </Col>
          <AddItem onClick={() => setShowModal(true)} />
        </Row>
      </Form>
    </Col>
  );
};
