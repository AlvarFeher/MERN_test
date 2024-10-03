import React from "react";

function TodoItem({ todo, toggleComplete}) {
  return (
    <li>
      <div className="todoBtns">
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <input
          type="checkbox"
          checked={todo.completed} // Bind the checkbox to the `completed` state
          onChange={() => toggleComplete(todo.id)} 
          style={{ marginRight: "10px" }}
        />   
        <button>edit</button>
      </div>
    </li>
  );
}

export default TodoItem;
