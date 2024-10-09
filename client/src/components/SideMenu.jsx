import React, { useState } from "react";

const SideMenu = (addList) => {
  const [input, setInput] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle adding a new list
  const addList = async () => {
    const newList = {
      name: input,
      todos: [],
      done: []
    };

    try {
      // Send the new list to your backend (assuming an endpoint is available)
      const response = await fetch("http://localhost:5050/todoList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newList),
      });

      const result = await response.json();
      console.log("New list added:", result);
      
      // Close the pop-up after adding the list
      setShowPopup(false);
      setInput(""); // Reset input field
    } catch (error) {
      console.error("Error adding list:", error);
    }
  };

  // Function to show the pop-up
  const handleAddClick = () => {
    setShowPopup(true);
  };

  // Function to handle canceling the pop-up
  const handleCancel = () => {
    setShowPopup(false);
    setInput(""); // Reset input field
  };

  return (
    <div className="sideMenu">
      <ul className="menuList">
        <li><a href="#home">Today</a></li>
        <li><a href="#tasks">Project 1</a></li>
        <li><a href="#completed">Whatever</a></li>
      </ul>
      <button onClick={handleAddClick} className="addListBtn">Add new list</button>

      {/* Pop-up for entering list name */}
      {showPopup && (
        <div className="popup">
          <div className="popupContent">
            <h2>Add New List</h2>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter list name"
              required
            />
            <div className="popupActions">
              <button onClick={addList}>Add List</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
