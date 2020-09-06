import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { deleteTodo } from '../../actions/todoActions';
import { connect } from 'react-redux';

const TodoItem = ({ todo, deleteTodo } ) => {
 
  return (
    <li className="collection-item">
      <div>
        <a
          href="#!"
          className={`${todo.completed ? 'green-text' : 'blue-text'} `}
          //   onClick={() => setCurrent(log)}
        >
          {todo.name}
        </a>
        <a
          href="#!"
          onClick={() => deleteTodo(todo.id)}
          className="secondary-content"
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTodo })(TodoItem);
