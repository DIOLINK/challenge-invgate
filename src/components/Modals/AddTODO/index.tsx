import { editTodoById } from '@/helpers';
import { useLocalState } from '@/hooks/useLocalStorage';
import { Todo } from '@/types';
import { mockTodo } from '@/utils/mockup/todolist';
import { Dispatch, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FormAddTODO } from './Form';

interface AddTODOProps {
  showModal: boolean;
  handleClose: () => void;
  todo?: Todo;
  setTodoList: Dispatch<React.SetStateAction<Todo[]>>;
}

export function AddTODO({
  showModal = false,
  handleClose,
  todo,
  setTodoList,
}: AddTODOProps) {
  const [errorMessage, setErrorMessage] = useState<undefined | string>(
    undefined
  );
  const [todoList, setValue] = useLocalState<Todo[]>('todoList', []);

  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleCreate() {
    setErrorMessage(undefined);
    if (!inputRef.current?.value) {
      setErrorMessage('Required');
      return;
    }
    const mockT = mockTodo();
    const newTodo = {
      ...mockT,
      title: inputRef.current.value,
      completed: false,
    };

    setValue([...todoList, { ...newTodo }]);
    setTodoList([...todoList, { ...newTodo }]);
    handleClose();
  }
  function handleEdit() {
    setErrorMessage(undefined);
    if (!inputRef.current?.value) {
      setErrorMessage('Required');
      return;
    }
    const newTodoList = editTodoById(todo?.id!, todoList, {
      ...todo!,
      title: inputRef.current.value,
    });
    setValue(newTodoList);
    setTodoList(newTodoList);
    handleClose();
  }

  return (
    <Modal id="ADD-TODO" show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{todo?.id ? 'EDIT TODO' : 'NEW TODO'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormAddTODO
          refInput={inputRef}
          errorMessage={errorMessage}
          title={todo?.title}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={todo?.id ? handleEdit : handleCreate}
        >
          {todo?.id ? 'Edit' : 'Create'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
