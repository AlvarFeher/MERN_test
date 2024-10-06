import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleComplete }) {
  // Filter tasks into completed and incomplete
  const completedTodos = todos.filter((todo) => todo.completed);
  const incompleteTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <h2 className="sectionTitle">TODOs</h2>
      <div className="todosContainer">
      <ul>
        {incompleteTodos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
      </div>

      <h2 className="sectionTitle">DONE</h2>
      <div className="todosContainer">
      <ul>
        {completedTodos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
      </div>
  
    </div>
    
  );
}

export default TodoList;
