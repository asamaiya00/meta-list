import React, { useState } from 'react';

const TodoForm = () => {
  const [content, setContent] = useState('');
  const [completed, setCompleted] = useState(false);
  const [comments, setComments] = useState('');

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
    </form>
  );
};

export default TodoForm;
