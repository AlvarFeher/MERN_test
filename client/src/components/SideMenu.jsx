import React from "react";

const SideMenu = () => {
  return (
    <div className="sideMenu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#tasks">Tasks</a></li>
        <li><a href="#completed">Completed</a></li>
        <li><a href="#statistics">Statistics</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
      <button className="inline-flex items-center  whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3">Add new list</button>
    </div>
  );
};

export default SideMenu;