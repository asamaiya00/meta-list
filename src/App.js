import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './components/todos/TodoList';
import TodoForm from './components/layout/TodoForm';

function App() {
  return (
    <Provider store={store}>
      <div className="container row">
        <h1>Items</h1>
        <div className="col l6">
          <TodoList />
        </div>
        <div className="col l6">
          <TodoForm />
        </div>
        
      </div>
    </Provider>
  );
}

export default App;
