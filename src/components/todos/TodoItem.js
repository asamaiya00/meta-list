import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const TodoItem = ({ todo }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#!"
          className={`${
            todo.completed ? 'green-text' : 'blue-text'
          } `}
        //   onClick={() => setCurrent(log)}
        >
          {todo.name}
        </a>
        <a href="#!" className="secondary-content">
        
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default TodoItem;
