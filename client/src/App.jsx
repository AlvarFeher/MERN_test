import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Navbar from "./components/Navbar";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>

      <Navbar/>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
