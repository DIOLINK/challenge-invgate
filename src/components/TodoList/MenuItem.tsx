import { useTODO } from '@/contexts/TODOContext';
import { useUIContext } from '@/contexts/UI/UIProvider';
import { MODAL_TYPES } from '@/contexts/UI/constants';
import { CollectionTodo, Todo } from '@/types';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { Button, Stack } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { TodoItemProps } from './TodoItem';
interface MenuItemProps extends TodoItemProps {}
export const MenuItem = ({ todo: todoSelect, collection }: MenuItemProps) => {
  const { deleteTodo, deleteCollection } = useTODO();
  const { showModal } = useUIContext();
  let location = useLocation();
  const MENU_LIST = [
    {
      name: 'edit',
      icon: <IconEdit stroke={2} color={'var(--bs-info)'} size={24} />,
      action: (todo?: Todo) => {
        showModal(MODAL_TYPES.ADD_NEW_TODO, { todo, collection, location });
      },
    },
    {
      name: 'delete',
      icon: <IconTrash stroke={2} color={'var(--bs-danger)'} size={24} />,
      action: (todo?: Todo, collection?: CollectionTodo) => {
        showModal(MODAL_TYPES.CONFIRMATION_MODAL, {
          message: 'Are you sure you want to delete this?',
          callback: () => {
            if (!!todo) {
              deleteTodo(todo);
            } else if (!!collection) {
              deleteCollection(collection);
            }
          },
        });
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
            onClick={() => menu.action(todoSelect, collection)}
          >
            {menu.icon}
          </Button>
        ))}
      </Stack>
    </div>
  );
};
