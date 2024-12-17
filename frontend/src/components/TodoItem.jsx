import React from "react";

const TodoItem = ({ task, updateTask, deleteTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => updateTask(task._id, { completed: !task.completed })}
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
