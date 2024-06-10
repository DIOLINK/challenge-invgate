import { IconEdit, IconTrash } from '@tabler/icons-react';
import { Button, Stack } from 'react-bootstrap';

export const MenuItem = ({
  handleDelete,
  handleEdit,
}: {
  handleDelete: () => void;
  handleEdit: () => void;
}) => {
  const MENU_LIST = [
    {
      name: 'edit',
      icon: <IconEdit stroke={2} color={'var(--bs-info)'} size={24} />,
      action: handleEdit,
    },
    {
      name: 'delete',
      icon: <IconTrash stroke={2} color={'var(--bs-danger)'} size={24} />,
      action: handleDelete,
    },
  ];

  return (
    <div className="pl-3">
      <Stack direction="horizontal">
        {MENU_LIST.map((menu, index) => (
          <Button
            variant="link"
            title={menu.name.toUpperCase()}
            key={index}
            onClick={() => menu.action()}
          >
            {menu.icon}
          </Button>
        ))}
      </Stack>
    </div>
  );
};
