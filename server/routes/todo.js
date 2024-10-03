import express from "express";
import Todo from "../models/Todo.js";  // Import the Todo model

const router = express.Router();

// Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();  // Use Mongoose to find all todos
    res.status(200).json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving todos");
  }
});

// Get a single todo by id
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);  // Use Mongoose to find by id
    if (!todo) {
      return res.status(404).send("Todo not found");
    }
    res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving todo");
  }
});

// Create a new todo
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done,
    });
    const savedTodo = await newTodo.save();  // Save the new todo to MongoDB
    res.status(201).json(savedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating todo");
  }
});

// Update a todo by id
router.patch("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        done: req.body.done,
      },
      { new: true }  // Return the updated document
    );
    if (!updatedTodo) {
      return res.status(404).send("Todo not found");
    }
    res.status(200).json(updatedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating todo");
  }
});

// Delete a todo by id
router.delete("/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).send("Todo not found");
    }
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting todo");
  }
});

export default router;
