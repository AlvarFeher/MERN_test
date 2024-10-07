import React from "react";

const SideMenu = () => {
  return (
    <div className="sideMenu">
      <ul className="menuList">
        <li><a href="#home">Home</a></li>
        <li><a href="#tasks">Tasks</a></li>
        <li><a href="#completed">Completed</a></li>
        <li><a href="#statistics">Statistics</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
      <button className="addListBtn">Add new list</button>
    </div>
  );
};

export default SideMenu;