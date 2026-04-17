import React from "react";
import Column from "./Column";

const Board = () => {

  const todoTasks = [
    { title: "Design Login Page", description: "Create responsive UI", priority: "High" },
    { title: "Setup Project", description: "Initialize React app", priority: "Medium" },
  ];

  const progressTasks = [
    { title: "API Integration", description: "Connect backend", priority: "High" },
    { title: "Fix Bugs", description: "Resolve UI issues", priority: "Low" },
  ];

  const doneTasks = [
    { title: "Project Setup", description: "Completed setup", priority: "Low" },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6">
      
      <Column title="To Do" initialTasks={todoTasks} />
      <Column title="In Progress" initialTasks={progressTasks} />
      <Column title="Done" initialTasks={doneTasks} />

    </div>
  );
};

export default Board;