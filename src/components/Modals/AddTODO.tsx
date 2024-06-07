import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

interface AddTODOProps {
  showModal: boolean;
  handleClose: () => void;
}

export function AddTODO({ showModal = false, handleClose }: AddTODOProps) {
  return (
    <Modal id="ADD-TODO" show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New TODO</Modal.Title>
      </Modal.Header>
      <Modal.Body>NEW TODO</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
