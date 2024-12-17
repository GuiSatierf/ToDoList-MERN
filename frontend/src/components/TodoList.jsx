import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task._id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
