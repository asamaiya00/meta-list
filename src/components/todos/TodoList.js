import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { getTodos } from '../../actions/todoActions';
import Preloader from '../layout/Preloader';

const TodoList = ({ todo: { todos, loading }, getTodos }) => {
  useEffect(() => {
    getTodos();
        // eslint-disable-next-line
  }, []);
  if (loading || todos === null) return <Preloader />;
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">Tasks</h4>
        </li>
        {!loading && todos.length === 0 ? (
          <p className="center">No tasks to show...</p>
        ) : (
          todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, { getTodos })(TodoList);
