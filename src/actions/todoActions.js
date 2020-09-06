import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODOS,
  UPDATE_TODO,
  SET_LOADING,
} from './types';

export const getTodos = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('http://localhost:5000/todos');
    const data = await res.json();
    console.log(dispatch);
    dispatch({
      type: GET_TODOS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'DELETE',
    });
    console.log(dispatch)
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = (name) => async (dispatch) => {
  try {
    setLoading();
    const todo = {
      name,
      content: '',
      comments: '',
      completed: false,
      date: new Date(),
    };
    const res = await fetch('http://localhost:5000/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
    dispatch({
      type: ADD_TODO,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
