import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles/Main.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Obter tarefas
  const fetchTasks = async () => {
    const res = await axios.get("/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Adicionar tarefa
  const addTask = async (task) => {
    const res = await axios.post("/api/tasks", task);
    setTasks([...tasks, res.data]);
  };

  // Atualizar tarefa
  const updateTask = async (id, updatedData) => {
    const res = await axios.put(`/api/tasks/${id}`, updatedData);
    setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
  };

  // Deletar tarefa
  const deleteTask = async (id) => {
    await axios.delete(`/api/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
