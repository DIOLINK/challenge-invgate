import { Modal } from 'react-bootstrap';
import { DualActionButton } from './DualActionButton';

interface TemplateModalProps {
  title: string;
  showModal: boolean;
  message?: string;
  handleClose: () => void;
  renderBody?: () => JSX.Element;
  renderFooter?: () => JSX.Element;
  id?: string;
}
export const TemplateModal = ({
  title = 'Modal',
  showModal = false,
  message,
  handleClose = () => {},
  renderBody,
  renderFooter = () => <DualActionButton onCancel={handleClose} />,
  id = 'template-modal',
  ...props
}: TemplateModalProps) => {
  return (
    <Modal id={id} {...props} show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {renderBody && renderBody()}
        {message && <p>{message}</p>}
      </Modal.Body>
      <Modal.Footer>{renderFooter()}</Modal.Footer>
    </Modal>
  );
};
