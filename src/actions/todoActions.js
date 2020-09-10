import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODOS,
  UPDATE_TODO,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
} from './types';

export const getTodos = (list) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`http://localhost:5000/${list}`);
    const data = await res.json();
    dispatch({
      type: GET_TODOS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteTodo = (list, id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`http://localhost:5000/${list}/${id}`, {
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

export const addTodo = (list, name) => async (dispatch) => {
  try {
    setLoading();
    const todo = {
      name,
      content: '',
      comments: '',
      completed: false,
      date: new Date(),
    };
    const res = await fetch(`http://localhost:5000/${list}`, {
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

export const updateTodo = (list, todo) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`http://localhost:5000/${list}/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_TODO,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setCurrent = (item) => {
  return {
    type: SET_CURRENT,
    payload:  item,
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
