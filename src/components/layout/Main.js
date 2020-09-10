import React from 'react';
import TodoList from '../todos/TodoList';
import AddTodo from '../todos/AddTodo';
import TodoForm from './TodoForm';
const Main = ({ match }) => {
  return (
    <React.Fragment>
      <div className="col l6 m6">
        <AddTodo list={match.params.list} />
        <TodoList list={match.params.list} />
      </div>
      <div className="col l4 m4">
        <TodoForm list={match.params.list} />
      </div>{' '}
    </React.Fragment>
  );
};

export default Main;
