import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [], selectedTodo: null },
  reducers: {
    addTodo: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      state.items = state.items.filter(todo => todo.id !== payload);
    },
    toggleSelectedTodo: (state, { payload }) => {
      state.selectedTodo = payload ? payload : null;
    },
    editTodo: (state, { payload }) => {
      state.items = state.items.map(todo =>
        todo.id !== payload.id ? todo : payload
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleSelectedTodo, editTodo } =
  todosSlice.actions;
