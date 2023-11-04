import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleCompletion, editTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompletion={toggleCompletion}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
