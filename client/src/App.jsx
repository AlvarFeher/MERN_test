import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Navbar from "./components/Navbar";
import SideMenu from './components/SideMenu';
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const[lists, setLists] = useState([]);

  // Fallback test todos
  const testLists = [
    {
      _id: 1,
      title: "Test List 1",
      todos: [
        { _id: 1, title: "Test Todo 1", done: false },
        { _id: 2, title: "Test Todo 2", done: true },
      ],
    },
    {
      _id: 2,
      title: "Test List 2",
      todos: [
        { _id: 3, title: "Test Todo 3", done: false },
        { _id: 4, title: "Test Todo 4", done: false },
      ],
    },
  ];

  const testTodos = [
    { _id: 1, text: "Test Todo 1", completed: false },
    { _id: 2, text: "Test Todo 2", completed: true },
    { _id: 3, text: "Test Todo 3", completed: false }
  ];

  // Fetch todos from the backend
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:5050/todoLists"); // Replace with your backend URL
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setLists(data); // Set the fetched todos in state
      } catch (error) {
        console.error("Error fetching todos, using test todos:", error);
        setLists(testLists); // Use test todos if there's an error
      }
    };

    fetchTodos();
  }, []); // Empty dependency array means this will run once on component mount

  // Add a new todo to the state
  const addList = (newList) => {
    setLists([...lists, newList]);
  };

  const addTodo = async (listId, todo) => {
    try {
      // Send a request to the backend to add the new todo to the list
      const response = await fetch(`http://localhost:5050/todoLists/${listId}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
  
      if (!response.ok) {
        throw new Error("Failed to add todo");
      }
  
      const updatedList = await response.json();
  
      // Update the specific list with the new todo in the state
      setLists((prevLists) =>
        prevLists.map((list) =>
          list._id === listId ? updatedList : list
        )
      );
    } catch (error) {
      console.error("Error adding todo:", error);
    }
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
        <SideMenu addList = {addList}/>
        <div className="mainPart">
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleComplete={toggleComplete} />
        </div>
      </div>
    </div>
  );
}

export default App;
