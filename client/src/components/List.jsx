import React from "react";
import Todo from "./Todo";  // A component for individual todos

const List = ({ todos, toggleComplete, listId }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <Todo todo={todo} toggleComplete={() => toggleComplete(listId, todo._id)} />
        </li>
      ))}
    </ul>
  );
};

export default List;