import React, { useState } from "react";

function TodoForm({ listId, addTodo }) {
  const [input, setInput] = useState("");

  const newTodo = { title: input, completed: false };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the server to add the new todo
      const response = await fetch("http://localhost:5050/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo), // Send the form data as JSON
      });

      const result = await response.json();
      addTodo(result); // Add the new todo to the state in the parent component

      // Reset the form after submission
      setInput(""); // Reset input after submission
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
      className="inputTodo"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button className="addTodo" type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
