import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODOS,
  UPDATE_TODO,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
} from './types';

export const getTodos = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('http://localhost:5000/todos');
    const data = await res.json();
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
    dispatch({
      type: ADD_TODO,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = (todo) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`http://localhost:5000/todos/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
    dispatch({
      type: UPDATE_TODO,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setCurrent = (todo) => {
  return {
    type: SET_CURRENT,
    payload: todo,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
