import React from 'react';
import {
  deleteTodo,
  setCurrent,
  clearCurrent,
} from '../../actions/todoActions';
import { connect } from 'react-redux';

const TodoItem = ({ todo, deleteTodo, setCurrent, clearCurrent,list }) => {
  const deleteItem = () => {
    deleteTodo(list, todo.id);
    clearCurrent();
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#!"
          className={`${todo.completed ? 'green-text' : 'orange-text'} `}
          onClick={() => setCurrent(todo)}
        >
          {todo.name}
        </a>
        <a href="#!" onClick={deleteItem} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTodo, setCurrent, clearCurrent })(
  TodoItem
);
