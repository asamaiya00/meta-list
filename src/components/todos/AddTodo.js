import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import { addTodo } from '../../actions/todoActions';
import { connect } from 'react-redux';

const AddTodo = ({ addTodo }) => {
  const [name, setName] = useState('');
  const onSubmit = (e) => {
    if (name.trim() === '' && e.keyCode === 13) {
      M.toast({ html: 'Enter todo name' });
    } else if (e.keyCode === 13) {
      addTodo(name);
      setName('');
    }
  };
  return (
    <div className="row">
      <div>
        <input
          placeholder="Add new..."
          type="text"
          name="name"
          onKeyDown={(e) => onSubmit(e)}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
