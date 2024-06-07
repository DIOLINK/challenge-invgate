import { IconPlus } from '@tabler/icons-react';
import { Button, ButtonProps, Col } from 'react-bootstrap';

interface AddItemProps extends ButtonProps {
  btnTitle?: string;
  iconStart?: JSX.Element | null;
}
export const AddItem = ({
  btnTitle = 'New TODO',
  iconStart = <IconPlus stroke={2} size={24} />,
  ...props
}: AddItemProps) => {
  return (
    <Col xs="auto">
      <Button
        variant="outline-primary"
        className="d-flex align-items-center "
        title={btnTitle}
        {...props}
      >
        {iconStart && iconStart}
        {btnTitle}
      </Button>
    </Col>
  );
};
