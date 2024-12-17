const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// GET - Buscar todas as tarefas
router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// POST - Adicionar nova tarefa
router.post("/tasks", async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
});

// PUT - Atualizar tarefa
router.put("/tasks/:id", async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedTask);
});

// DELETE - Deletar tarefa
router.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Tarefa deletada com sucesso" });
});

module.exports = router;
