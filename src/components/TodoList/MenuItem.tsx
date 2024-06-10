import { Todo } from '@/types';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { Button, Stack } from 'react-bootstrap';

export const MenuItem = ({ todoSelect }: { todoSelect: Todo }) => {
  const MENU_LIST = [
  {
    name: 'edit',
    icon: <IconEdit stroke={2} color={'var(--bs-info)'} size={24} />,
    action: function () {
      console.log('first');
    },
  },
  {
    name: 'delete',
    icon: <IconTrash stroke={2} color={'var(--bs-danger)'} size={24} />,
    action: function () {
      console.log('first');
    },
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
            onClick={() => menu.action(todoSelect)}
          >
            {menu.icon}
          </Button>
        ))}
      </Stack>
    </div>
  );
};
