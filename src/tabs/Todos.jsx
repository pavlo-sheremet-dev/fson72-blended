import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectSelectedTodo, selectTodos } from 'redux/todos/selectors';

export const Todos = () => {
  const todos = useSelector(selectTodos);
  const editingTodo = useSelector(selectSelectedTodo);

  // const editTodo = newTodo => {
  //   setTodos(prevTodos =>
  //     prevTodos.map(todo => {
  //       return todo.id !== newTodo.id ? todo : newTodo;
  //     })
  //   );
  // };

  return (
    <>
      {editingTodo ? <EditForm /> : <SearchForm />}
      {todos.length !== 0 ? (
        <Grid>
          {todos.map(({ id, value: todo }, idx) => (
            <GridItem key={id}>
              <Todo id={id} idx={idx} description={todo} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Text>There are no any todos</Text>
      )}
    </>
  );
};
