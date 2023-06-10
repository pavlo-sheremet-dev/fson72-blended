import { useState } from 'react';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/todos/selectors';

const initialTodos = [{ value: 'initialTodo', id: 'id-1' }];

export const Todos = () => {
  const todos = useSelector(selectTodos);

  const [, setTodos] = useLocalStorage('todos', initialTodos);
  const [editingTodo, setEditingTodo] = useState(null);

  const editTodo = newTodo => {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        return todo.id !== newTodo.id ? todo : newTodo;
      })
    );
    toggleEditForm();
  };

  const toggleEditForm = (todo = null) => {
    setEditingTodo(todo ? todo : null);
  };

  return (
    <>
      {editingTodo ? (
        <EditForm
          closeEditForm={toggleEditForm}
          todo={editingTodo}
          editTodo={editTodo}
        />
      ) : (
        <SearchForm />
      )}
      {todos.length !== 0 ? (
        <Grid>
          {todos.map(({ id, value: todo }, idx) => (
            <GridItem key={id}>
              <Todo
                id={id}
                idx={idx}
                description={todo}
                openEditForm={toggleEditForm}
              />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Text>There are no any todos</Text>
      )}
    </>
  );
};
