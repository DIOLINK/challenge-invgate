import { RefObject } from 'react';
import { Form } from 'react-bootstrap';

export const FormAddTODO = ({
  refInput,
  errorMessage,
  title,
}: {
  refInput: RefObject<HTMLInputElement>;
  errorMessage?: string;
  title?: string;
}) => {
  return (
    <Form.Group controlId="id">
      <Form.Label>Todo:</Form.Label>
      <Form.Control
        type="text"
        placeholder="Add to do"
        required
        isInvalid={!!errorMessage}
        ref={refInput}
      />
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
      {title && (
        <Form.Text id="old-title">
          <p className="py-2">OLD TODO: {title}</p>
        </Form.Text>
      )}
    </Form.Group>
  );
};
