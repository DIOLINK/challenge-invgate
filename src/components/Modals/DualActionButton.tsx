import { Button } from 'react-bootstrap';

interface DualActionButtonProps {
  actionLabel?: string;
  cancelLabel?: string;
  onAction?: () => void;
  onCancel: () => void;
}
export const DualActionButton = ({
  actionLabel = 'Action',
  cancelLabel = 'Cancel',
  onAction,
  onCancel,
}: DualActionButtonProps) => {
  return (
    <>
      <Button variant="secondary" onClick={onCancel}>
        {cancelLabel}
      </Button>
      {actionLabel && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </>
  );
};
