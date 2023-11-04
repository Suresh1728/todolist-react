import React, { useState } from 'react';

const TodoItem = ({ todo, toggleCompletion, editTodo, deleteTodo }) => {
  const [isEditing, setEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo.title);

  const handleUpdateTodo = () => {
    editTodo(todo.id, updatedTodo);
    setEditing(false);
  };

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleCompletion(todo.id)}
      >
        {isEditing ? (
          <input
            type="text"
            value={updatedTodo}
            onChange={(e) => setUpdatedTodo(e.target.value)}
          />
        ) : (
          todo.title
        )}
      </span>
      {isEditing ? (
        <button className="save" onClick={handleUpdateTodo}>Save</button>
      ) : (
        <button className="edit" onClick={() => setEditing(true)}>Edit</button>
      )}
      <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
