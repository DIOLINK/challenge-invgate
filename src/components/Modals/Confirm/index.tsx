import { useUIContext } from '@/contexts/UI/UIProvider';
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
  showModal,
}: ConfirmModalProps) => {
  const { hideModal } = useUIContext();
  return (
    <TemplateModal
      title="Confirm"
      message={message}
      showModal={showModal}
      handleClose={hideModal}
      renderFooter={() => (
        <DualActionButton
          onCancel={hideModal}
          onAction={() => {
            callback();
            hideModal();
          }}
          actionLabel={'Confirm delete'}
        />
      )}
    />
  );
};
