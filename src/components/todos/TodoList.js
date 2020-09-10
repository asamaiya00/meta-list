import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { getTodos, clearCurrent } from '../../actions/todoActions';
import Preloader from '../layout/Preloader';

const TodoList = ({
  todo: { todos, loading },
  getTodos,
  list,
  clearCurrent,
}) => { 
  useEffect(() => {
    clearCurrent();
    getTodos(list);
    // eslint-disable-next-line
  }, [list]);
  if (loading || todos === null) return <Preloader />;
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">{list}</h4>
        </li>
        {!loading && todos.length === 0 ? (
          <p className="center">No items to show...</p>
        ) : (
          todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} list={list} />
          ))
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, { getTodos, clearCurrent })(TodoList);
