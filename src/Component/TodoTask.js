import React from "react";

function TodoTask({ onToggleComplete, task, onDelete }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task)}
      />
      <span>{task.title}</span>
      <button onClick={() => onDelete(task)}>Delete</button>      
    </div>
  );
}
export default TodoTask;

