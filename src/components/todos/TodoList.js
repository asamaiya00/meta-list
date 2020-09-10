import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { getTodos } from '../../actions/todoActions';
import Preloader from '../layout/Preloader';

const TodoList = (props) => {
  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);
  // console.log(props)
  const {
    todo: { todos, loading },
    getTodos,
    id
  } = props;
  console.log(props)
  if (loading || todos === null) return <Preloader />;
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">{id}</h4>
        </li>
        {!loading && todos.length === 0 ? (
          <p className="center">No items to show...</p>
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
