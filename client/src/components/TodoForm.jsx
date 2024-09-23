import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  async function onSubmit(e) {
    e.preventDefault();
    const person = { ...form };
    try {
      // if the id is present, we will set the URL to /record/:id, otherwise we will set the URL to /record.
      const response = await fetch(`http://localhost:5050/todo${params.id ? "/"+params.id : ""}`, {
        // if the id is present, we will use the PATCH method, otherwise we will use the POST method.
        method: `${params.id ? "PATCH" : "POST"}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('A problem occurred with your fetch operation: ', error);
    } finally {
      setForm({ name: "", position: "", level: "" });
      navigate("/");
    }
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
