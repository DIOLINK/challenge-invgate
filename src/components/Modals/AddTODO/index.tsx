import { useTODO } from '@/contexts/TODOContext';
import { useUIContext } from '@/contexts/UI/UIProvider';
import { analyticLocation } from '@/helpers';
import { CollectionTodo, Todo } from '@/types';
import { mockCollectionTodo, mockTodo } from '@/utils/mockup/todolist';
import { useRef, useState } from 'react';
import { ModalProps } from 'react-bootstrap';
import { Location } from 'react-router-dom';
import { DualActionButton } from '../DualActionButton';
import { TemplateModal } from '../TemplateModal';
import { FormAddTODO } from './Form';

export interface AddTODOProps extends ModalProps {
  todo?: Todo;
  location?: Location;
  collection?: CollectionTodo;
}

export function AddTODO({
  todo,
  location,
  collection,
  ...props
}: AddTODOProps) {
  const { isHome } = analyticLocation(location!);
  const { hideModal } = useUIContext();
  const [errorMessage, setErrorMessage] = useState<undefined | string>(
    undefined
  );
  const { addTodo, editTodo, addCollectionTodo, editCollection } = useTODO();
  const inputRef = useRef<HTMLInputElement | null>(null);

  function validate(): boolean {
    setErrorMessage(undefined);
    setErrorMessage('Required');
    return !inputRef.current?.value;
  }
  function handleCreate() {
    if (validate()) return;
    if (isHome) {
      const mockC = mockCollectionTodo();
      addCollectionTodo({
        ...mockC,
        title: inputRef.current?.value!,
        todos: [],
      });
    } else {
      const mockT = mockTodo();
      addTodo({
        ...mockT,
        title: inputRef.current?.value!,
        completed: false,
      });
    }
    hideModal();
  }

  function handleEdit() {
    if (validate()) return;

    if (isHome) {
      editCollection({
        ...collection!,
        title: inputRef.current?.value!,
      });
    } else {
      editTodo({
        ...todo!,
        title: inputRef.current?.value!,
        completed: false,
      });
    }

    hideModal();
  }

  return (
    <TemplateModal
      id="ADD_TODO"
      {...props}
      title={isHome ? 'NEW LIST TODO' : todo?.id ? 'EDIT TODO' : 'NEW TODO'}
      handleClose={hideModal}
      renderBody={() => (
        <FormAddTODO
          refInput={inputRef}
          errorMessage={errorMessage}
          title={
            todo?.title || collection?.title
              ? `Old Title: ${todo?.title || collection?.title}`
              : ''
          }
          label={`Title ${isHome ? 'List:' : 'TODO:'}`}
          placeholder={`Add title to new ${isHome ? 'List...' : 'Todo...'}`}
        />
      )}
      renderFooter={() => (
        <DualActionButton
          onCancel={hideModal}
          onAction={todo?.id || collection?.id ? handleEdit : handleCreate}
          actionLabel={todo?.id || collection?.id ? 'Edit' : 'Create'}
        />
      )}
    />
  );
}
