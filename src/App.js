import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users/1/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTask = {
        id: todos.length + 1,
        title: newTodo,
        completed: false,
      };
      setTodos([...todos, newTask]);
      setNewTodo('');
    }
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, updatedTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: updatedTitle } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = showCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input className='input'
          type="text"
          placeholder="Enter new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo} className='input-button'>Add</button>
      </div>
      <div>
        <label className='label'>Show Completed Tasks</label>
        <input className='checkbox'
          type="checkbox"
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
        />
      </div>
      <TodoList
        todos={filteredTodos}
        toggleCompletion={toggleCompletion}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
