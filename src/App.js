import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './components/todos/TodoList';
import TodoForm from './components/layout/TodoForm';
import AddTodo from './components/todos/AddTodo';

function App() {
  return (
    <Provider store={store}>
      <div className="row">
        <div className="col l2"></div>
        <div className="col l6">
          <AddTodo />
          <TodoList />
        </div>
        <div className="col l4">
          <TodoForm />
        </div>
      </div>
    </Provider>
  );
}

export default App;
