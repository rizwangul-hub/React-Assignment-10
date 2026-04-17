import React from "react";

const TaskCard = ({ title, description, priority, children, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-3">
      
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>

      <p className="mt-2 text-sm">
        Priority: 
        <span className={`ml-1 font-semibold 
          ${priority === "High" ? "text-red-500" :
            priority === "Medium" ? "text-yellow-500" :
            "text-green-500"}`}>
          {priority}
        </span>
      </p>

      {/* Children Footer */}
      <div className="mt-2 text-blue-600 text-sm">
        {children}
      </div>

      {/* Delete Button (Challenge) */}
      <button
        onClick={onDelete}
        className="mt-3 text-red-500 text-sm hover:underline"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;