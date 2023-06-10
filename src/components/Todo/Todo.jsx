import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleSelectedTodo } from 'redux/todos/todosSlice';

export const Todo = ({ idx, description, id }) => {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(
      toggleSelectedTodo({
        id,
        description,
      })
    );
  };

  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{idx + 1}
      </Text>
      <Text>{description}</Text>
      <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
      <EditButton type="button" onClick={handleEditClick}>
        <RiEdit2Line size={24} />
      </EditButton>
    </TodoWrapper>
  );
};
