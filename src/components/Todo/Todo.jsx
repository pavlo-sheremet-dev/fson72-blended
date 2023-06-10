import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

import { useTodos } from 'redux/todos/useTodos';

export const Todo = ({ idx, description, id }) => {
  const { toggleSelectedTodo, deleteTodo } = useTodos();

  const handleEditClick = () => {
    toggleSelectedTodo({
      id,
      description,
    });
  };

  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{idx + 1}
      </Text>
      <Text>{description}</Text>
      <DeleteButton type="button" onClick={() => deleteTodo(id)}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
      <EditButton type="button" onClick={handleEditClick}>
        <RiEdit2Line size={24} />
      </EditButton>
    </TodoWrapper>
  );
};
