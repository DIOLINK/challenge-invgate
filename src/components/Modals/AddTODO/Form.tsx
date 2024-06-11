import { RefObject } from 'react';
import { Form } from 'react-bootstrap';

export const FormAddTODO = ({
  refInput,
  errorMessage,
  title,
  label,
  placeholder,
}: {
  refInput: RefObject<HTMLInputElement>;
  errorMessage?: string;
  title?: string;
  label: string;
  placeholder: string;
}) => {
  return (
    <Form.Group controlId="id">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        placeholder={placeholder}
        required
        isInvalid={!!errorMessage}
        ref={refInput}
      />
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
      {title && (
        <Form.Text id="old-title">
          <p className="py-2">{title}</p>
        </Form.Text>
      )}
    </Form.Group>
  );
};
