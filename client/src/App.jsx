import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // Accept the whole todo object instead of just the text
  const addTodo = (newTodo) => {
    console.log("adding new todo");
    console.log(newTodo);  // This will log the full todo object from the server
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    console.log("check");
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <Navbar />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
