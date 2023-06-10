import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedTodo, selectTodos } from './selectors';

import * as actions from 'redux/todos/todosSlice';

export const useTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const editingTodo = useSelector(selectSelectedTodo);

  const addTodo = newTodo => {
    dispatch(actions.addTodo(newTodo));
  };

  const deleteTodo = id => {
    dispatch(actions.deleteTodo(id));
  };

  const toggleSelectedTodo = (selectedTodo = null) => {
    dispatch(actions.toggleSelectedTodo(selectedTodo));
  };

  const editTodo = updatedTodo => {
    dispatch(actions.editTodo(updatedTodo));
  };

  return {
    todos,
    editingTodo,
    addTodo,
    deleteTodo,
    toggleSelectedTodo,
    editTodo,
  };
};
