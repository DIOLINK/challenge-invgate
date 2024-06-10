import { TemplateModal } from '../TemplateModal';

export const ConfirmModal = () => {
  function handleClose() {}
  return (
    <TemplateModal
      title="Confirm"
      showModal={false}
      handleClose={handleClose}
    />
  );
};
