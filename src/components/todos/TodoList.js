import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodo = async () => {
      const res = await fetch('http://localhost:5000/todos');
      const data = await res.json();
      setTodos(data);
      console.log(data);
    };
    fetchTodo();
  }, []);
  return (
    <div>
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Todos</h4>
      </li>
      {todos.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      )}
    </ul>
  </div>
   
  );
};

export default TodoList;
