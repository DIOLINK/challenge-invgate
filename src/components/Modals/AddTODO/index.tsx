import { useTODO } from '@/contexts/TODOContext';
import { useUIContext } from '@/contexts/UI/UIProvider';
import { Todo } from '@/types';
import { mockTodo } from '@/utils/mockup/todolist';
import { useRef, useState } from 'react';
import { ModalProps } from 'react-bootstrap';
import { DualActionButton } from '../DualActionButton';
import { TemplateModal } from '../TemplateModal';
import { FormAddTODO } from './Form';

export interface AddTODOProps extends ModalProps {
  todo?: Todo;
}

export function AddTODO({ todo, ...props }: AddTODOProps) {
  const { hideModal } = useUIContext();
  const [errorMessage, setErrorMessage] = useState<undefined | string>(
    undefined
  );
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { addTodo, editTodo } = useTODO();
  function handleCreate() {
    setErrorMessage(undefined);
    if (!inputRef.current?.value) {
      setErrorMessage('Required');
      return;
    }
    const mockT = mockTodo();
    addTodo({ ...mockT, title: inputRef.current?.value, completed: false });
    hideModal();
  }
  function handleEdit() {
    setErrorMessage(undefined);
    if (!inputRef.current?.value) {
      setErrorMessage('Required');
      return;
    }
    const mockT = mockTodo();
    editTodo({
      ...todo,
      ...mockT,
      title: inputRef.current?.value,
      completed: false,
      id: todo!.id,
    });
    hideModal();
  }

  return (
    <TemplateModal
      id="ADD_TODO"
      {...props}
      title={todo?.id ? 'EDIT TODO' : 'NEW TODO'}
      handleClose={hideModal}
      renderBody={() => (
        <FormAddTODO
          refInput={inputRef}
          errorMessage={errorMessage}
          title={todo?.title}
        />
      )}
      renderFooter={() => (
        <DualActionButton
          onCancel={hideModal}
          onAction={todo?.id ? handleEdit : handleCreate}
          actionLabel={todo?.id ? 'Edit' : 'Create'}
        />
      )}
    />
  );
}
