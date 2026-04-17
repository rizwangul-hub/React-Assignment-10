import React, { useState } from "react";
import TaskCard from "./TaskCard";

const Column = ({ title, initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  // Add Task
  const handleAddTask = () => {
    if (!newTask) return;

    const task = {
      title: newTask,
      description: "New task added",
      priority: "Low",
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Delete Task
  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-xl w-80">
      {/* Column Title + Counter */}

      <h2 className="text-xl font-bold mb-3">
        {title} ({tasks.length})
      </h2>

      {/* Tasks */}
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          description={task.description}
          priority={task.priority}
          onDelete={() => handleDelete(index)}
        >
          👤 Assigned to: Ali
        </TaskCard>
      ))}

      {/* Add Task */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />

        <button
          onClick={handleAddTask}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Column;
