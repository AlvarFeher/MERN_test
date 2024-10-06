import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Navbar from "./components/Navbar";
import SideMenu from './components/SideMenu';
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // Fallback test todos
  const testTodos = [
    { _id: 1, text: "Test Todo 1", completed: false },
    { _id: 2, text: "Test Todo 2", completed: true },
    { _id: 3, text: "Test Todo 3", completed: false }
  ];

  // Fetch todos from the backend
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:5050/todos"); // Replace with your backend URL
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTodos(data); // Set the fetched todos in state
      } catch (error) {
        console.error("Error fetching todos, using test todos:", error);
        setTodos(testTodos); // Use test todos if there's an error
      }
    };

    fetchTodos();
  }, []); // Empty dependency array means this will run once on component mount

  // Add a new todo to the state
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Toggle todo complete status
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <Navbar />
      <div className="menuSplit">
        <SideMenu />
        <div className="mainPart">
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleComplete={toggleComplete} />
        </div>
      </div>
    </div>
  );
}

export default App;
