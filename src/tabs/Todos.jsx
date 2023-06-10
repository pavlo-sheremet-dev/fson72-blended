import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

import { useTodos } from 'redux/todos/useTodos';

export const Todos = () => {
  const { todos, editingTodo } = useTodos();

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
