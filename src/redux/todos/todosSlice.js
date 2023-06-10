import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import persistReducer from 'redux-persist/es/persistReducer';

import storage from 'redux-persist/lib/storage';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [], selectedTodo: null },
  reducers: {
    addTodo: {
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
      prepare: newTodo => {
        return {
          payload: { ...newTodo, id: nanoid() },
        };
      },
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

const persistedTodosSlice = persistReducer(
  { key: 'todos', storage, whitelist: ['items'] },
  todosSlice.reducer
);

export const { addTodo, deleteTodo, toggleSelectedTodo, editTodo } =
  todosSlice.actions;

export default persistedTodosSlice;
