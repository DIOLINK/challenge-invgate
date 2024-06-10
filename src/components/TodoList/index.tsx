import { editTodoById, removeTodoById } from '@/helpers';
import { Todo } from '@/types';
import { Dispatch } from 'react';
import { ListGroup } from 'react-bootstrap';
import { EmptyTodo } from './Empty';
import { TodoItem } from './TodoItem';

export const TodoList = ({
  todoList = [],
  setTodoSelected,
  setShowModal,
  setTodoList,
}: {
  todoList: Todo[];
  setTodoSelected: Dispatch<React.SetStateAction<Todo | undefined>>;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
  setTodoList: Dispatch<React.SetStateAction<Todo[]>>;
}) => {
  function handleChangeStatus(todo: Todo) {
    const newTodoList = editTodoById(todo?.id!, todoList, {
      ...todo!,
      completed: !todo.completed,
    });

    setTodoList(newTodoList);
  }
  function handleDelete(todo: Todo) {
    const newTodoList = removeTodoById(todo?.id!, todoList);
    setTodoList(newTodoList);
  }
  function handleEdit(todo: Todo) {
    setTodoSelected(todo);
    setShowModal(true);
  }
  if (todoList.length === 0) {
    return <EmptyTodo />;
  }
  return (
    <ListGroup as="ol" numbered>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onStatus={handleChangeStatus}
        />
      ))}
    </ListGroup>
  );
};
