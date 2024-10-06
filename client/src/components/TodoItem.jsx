import React from "react";

function TodoItem({ todo, toggleComplete }) {
  return (
    <li className="todoCard">
      <div className="todoContent">
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.title}
        </span>
        <div className="todoActions">
          <input
            type="checkbox"
            checked={todo.completed} // Bind the checkbox to the `completed` state
            onChange={() => toggleComplete(todo.id)} 
            style={{ marginRight: "10px" }}
          />
          <button className="editBtn">Edit</button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
