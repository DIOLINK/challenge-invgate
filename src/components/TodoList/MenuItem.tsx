import { useTODO } from '@/contexts/TODOContext';
import { useUIContext } from '@/contexts/UI/UIProvider';
import { MODAL_TYPES } from '@/contexts/UI/constants';
import { Todo } from '@/types';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { Button, Stack } from 'react-bootstrap';

export const MenuItem = ({ todoSelect }: { todoSelect: Todo }) => {
  const { deleteTodo } = useTODO();
  const { openModal, setTypeModel } = useUIContext();

  const MENU_LIST = [
    {
      name: 'edit',
      icon: <IconEdit stroke={2} color={'var(--bs-info)'} size={24} />,
      action: (todo?: Todo) => {
        setTypeModel({
          type: MODAL_TYPES.ADD_NEW_TODO,
          property: { todo },
        });
        openModal();
      },
    },
    {
      name: 'delete',
      icon: <IconTrash stroke={2} color={'var(--bs-danger)'} size={24} />,
      action: (todo?: Todo) => {
        setTypeModel({
          type: MODAL_TYPES.CONFIRMATION_MODAL,
          property: {
            message: 'Are you sure you want to delete this todo?',
            callback: () => deleteTodo(todo),
          },
        });
        openModal();
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
