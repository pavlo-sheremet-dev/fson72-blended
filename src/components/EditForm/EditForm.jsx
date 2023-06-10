import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import { SearchFormStyled, FormBtn, InputSearch } from 'components';
import { BtnEdit } from './EditForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, toggleSelectedTodo } from 'redux/todos/todosSlice';
import { selectSelectedTodo } from 'redux/todos/selectors';

export const EditForm = () => {
  const editingTodo = useSelector(selectSelectedTodo);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.search.value;
    dispatch(
      editTodo({
        id: editingTodo.id,
        value,
      })
    );
    dispatch(toggleSelectedTodo());
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <RiSaveLine size="16px" />
      </FormBtn>
      <BtnEdit type="button" onClick={() => dispatch(toggleSelectedTodo())}>
        <MdOutlineCancel size="16px" />
      </BtnEdit>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        defaultValue={editingTodo.description}
      />
    </SearchFormStyled>
  );
};
