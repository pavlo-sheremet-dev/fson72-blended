import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

import { nanoid } from '@reduxjs/toolkit';
import { useTodos } from 'redux/todos/useTodos';

export const SearchForm = () => {
  const { addTodo } = useTodos();

  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo({ value, id: nanoid() });
    setValue('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        onChange={handleChange}
        value={value}
      />
    </SearchFormStyled>
  );
};
