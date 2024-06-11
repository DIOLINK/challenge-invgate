import { useTODO } from '@/contexts/TODOContext';
import { Todo } from '@/types';
import { mockTodo } from '@/utils/mockup/todolist';
import { useRef, useState } from 'react';
import { DualActionButton } from '../DualActionButton';
import { TemplateModal } from '../TemplateModal';
import { FormAddTODO } from './Form';

export interface AddTODOProps {
  showModal: boolean;
  handleClose: () => void;
  todo?: Todo;
}

export function AddTODO({
  showModal = false,
  handleClose,
  todo,
}: AddTODOProps) {
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
    handleClose();
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
    handleClose();
  }

  return (
    <TemplateModal
      id="ADD_TODO"
      title={todo?.id ? 'EDIT TODO' : 'NEW TODO'}
      handleClose={handleClose}
      showModal={showModal}
      renderBody={() => (
        <FormAddTODO
          refInput={inputRef}
          errorMessage={errorMessage}
          title={todo?.title}
        />
      )}
      renderFooter={() => (
        <DualActionButton
          onCancel={handleClose}
          onAction={todo?.id ? handleEdit : handleCreate}
          actionLabel={todo?.id ? 'Edit' : 'Create'}
        />
      )}
    />
  );
}
