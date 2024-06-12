import { AddItem } from '@/components';
import { useTODO } from '@/contexts/TODOContext';
import { useUIContext } from '@/contexts/UI/UIProvider';
import { MODAL_TYPES } from '@/contexts/UI/constants';
import { analyticLocation } from '@/helpers';
import { ChangeEvent } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
export const Search = () => {
  let location = useLocation();
  const { isHome } = analyticLocation(location);
  const { setFilter } = useTODO();
  const { showModal } = useUIContext();

  const OPTIONS_SELECTED = [
    { value: 'all', label: 'All Todo' },
    { value: 'done', label: 'Done' },
    { value: 'pending', label: 'Pending' },
  ];

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void {
    setFilter((oldFilter) => ({
      ...oldFilter,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <Col md={8}>
      <div className="flex-grow-1">
        <Row className="justify-content-between align-items-center pointer">
          <Col>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              autoComplete="off"
              name="search"
              onChange={(event) => {
                handleChange(event as ChangeEvent<HTMLInputElement>);
              }}
            />
          </Col>
          {!isHome && (
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
          )}
          <AddItem
            btnTitle={isHome ? 'New List TODO' : 'New TODO'}
            onClick={() =>
              showModal(MODAL_TYPES.ADD_NEW_TODO, {
                location,
                isEditing: false,
              })
            }
          />
        </Row>
      </div>
    </Col>
  );
};
