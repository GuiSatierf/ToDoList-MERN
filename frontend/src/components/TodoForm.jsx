import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="📝 Add new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit"><i class="bi bi-plus"></i> Add</button>
    </form>
  );
};

export default TodoForm;
