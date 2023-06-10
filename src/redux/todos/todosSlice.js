import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      state.items = state.items.filter(todo => todo.id !== payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
