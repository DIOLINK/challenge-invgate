import { AddTODOProps } from '../AddTODO';
import { DualActionButton } from '../DualActionButton';
import { TemplateModal } from '../TemplateModal';
interface ConfirmModalProps extends Omit<AddTODOProps, 'todo'> {
  callback?: () => void;
  message?: string;
}
export const ConfirmModal = ({
  callback = () => {},
  message,
  handleClose,
  showModal,
}: ConfirmModalProps) => {
  return (
    <TemplateModal
      title="Confirm"
      message={message}
      showModal={showModal}
      handleClose={handleClose}
      renderFooter={() => (
        <DualActionButton
          onCancel={handleClose}
          onAction={() => {
            callback();
            handleClose();
          }}
          actionLabel={'Confirm delete'}
        />
      )}
    />
  );
};
