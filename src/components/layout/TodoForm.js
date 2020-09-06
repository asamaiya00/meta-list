import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateTodo, clearCurrent } from '../../actions/todoActions';

const TodoForm = ({ todo: { todos, current }, updateTodo,clearCurrent }) => {
  const [content, setContent] = useState('');
  const [completed, setCompleted] = useState(false);
  const [comments, setComments] = useState('');

  useEffect(() => {
    if (current) {
      setContent(current.content);
      setCompleted(current.completed);
      setComments(current.comments);
    }
  }, [current]);

  const onClick = () => {
    const updated = {
      id: current.id,
      name:current.name,
      content,
      comments,
      completed,
      date: new Date(),
    };
    updateTodo(updated);
    clearCurrent();
  };
  if (!current) return <h3 className="center">Click on task</h3>;
  return (
    <form>
      <h3 className="center">Task Detail</h3>
      <h6 className="center">Content</h6>

      <input
        type="text"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <h6 className="center">Comments</h6>
      <input
        type="text"
        name="comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <br />
      <label>
        <input
          type="checkbox"
          name="completed"
          checked={completed}
          value={completed}
          onChange={(e) => setCompleted(!completed)}
        />

        <span>Completed</span>
      </label>
      <br />
      <a
        href="#!"
        className="waves-effect waves-light blue btn col s12"
        onClick={onClick}
      >
        Save
      </a>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

export default connect(mapStateToProps, { updateTodo,clearCurrent })(TodoForm);
