import {
  GET_TODOS,
  SET_LOADING,
  ADD_TODO,
  DELETE_TODO,
} from '../actions/types';

const initialState = {
  todos: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
        loading: false,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
        loading: false,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
