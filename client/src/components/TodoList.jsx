import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleComplete}) {
  return (
    <div className="todosContainer">
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} toggleComplete={toggleComplete}/>
      ))}
    </ul>
    </div>
    
  );
}



export default TodoList;
