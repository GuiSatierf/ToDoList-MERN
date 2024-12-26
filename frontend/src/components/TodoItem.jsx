import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

const TodoItem = ({ task, updateTask, deleteTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    deleteTask(task._id);
    setIsModalOpen(false);
  };

  return (
    <li>
      <div class="item-top">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => updateTask(task._id, { completed: !task.completed })}
        />
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.title}
        </span>
      </div>
      <button onClick={() => setIsModalOpen(true)}>Delete</button>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        message={`Tem certeza que deseja deletar a tarefa "${task.title}"?`}
      />
    </li>
  );
};

export default TodoItem;
