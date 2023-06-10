import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import { SearchFormStyled, FormBtn, InputSearch } from 'components';
import { BtnEdit } from './EditForm.styled';
import { useSelector } from 'react-redux';

import { selectSelectedTodo } from 'redux/todos/selectors';
import { useTodos } from 'redux/todos/useTodos';

export const EditForm = () => {
  const { editTodo, toggleSelectedTodo } = useTodos();
  const editingTodo = useSelector(selectSelectedTodo);

  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.search.value;

    editTodo({
      id: editingTodo.id,
      value,
    });

    toggleSelectedTodo();
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <RiSaveLine size="16px" />
      </FormBtn>
      <BtnEdit type="button" onClick={() => toggleSelectedTodo()}>
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
