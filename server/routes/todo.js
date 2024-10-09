import express from "express";
import List from "../models/List.js";  // Import the List model

const router = express.Router();

// Get all lists with their todos and dones
router.get("/", async (req, res) => {
  try {
    const lists = await List.find();  // Get all lists
    res.status(200).json(lists);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving lists");
  }
});

// Get a single list by id
router.get("/:id", async (req, res) => {
  try {
    const list = await List.findById(req.params.id);  // Find list by ID
    if (!list) {
      return res.status(404).send("List not found");
    }
    res.status(200).json(list);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving list");
  }
});

// Create a new list with todos
router.post("/", async (req, res) => {
  try {
    const newList = new List({
      title: req.body.title,
      todos: req.body.todos,  // Pass an array of todos
    });
    const savedList = await newList.save();  // Save the new list
    res.status(201).json(savedList);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating list");
  }
});

// Add a todo to a list
router.post("/:id/todos", async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    if (!list) {
      return res.status(404).send("List not found");
    }

    list.todos.push({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done,
    });

    const updatedList = await list.save();  // Save the updated list
    res.status(201).json(updatedList);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding todo");
  }
});

// Update a todo by id within a list
router.patch("/:listId/todos/:todoId", async (req, res) => {
  try {
    const list = await List.findById(req.params.listId);
    if (!list) {
      return res.status(404).send("List not found");
    }

    const todo = list.todos.id(req.params.todoId);
    if (!todo) {
      return res.status(404).send("Todo not found");
    }

    // Update todo details
    todo.title = req.body.title || todo.title;
    todo.description = req.body.description || todo.description;
    todo.done = req.body.done !== undefined ? req.body.done : todo.done;

    const updatedList = await list.save();  // Save the updated list with the updated todo
    res.status(200).json(updatedList);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating todo");
  }
});

// Delete a todo by id within a list
router.delete("/:listId/todos/:todoId", async (req, res) => {
  try {
    const list = await List.findById(req.params.listId);
    if (!list) {
      return res.status(404).send("List not found");
    }

    list.todos.id(req.params.todoId).remove();  // Remove the todo
    const updatedList = await list.save();  // Save the updated list

    res.status(200).json(updatedList);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting todo");
  }
});

// Delete a list by id
router.delete("/:id", async (req, res) => {
  try {
    const deletedList = await List.findByIdAndDelete(req.params.id);
    if (!deletedList) {
      return res.status(404).send("List not found");
    }
    res.status(200).json({ message: "List deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting list");
  }
});

export default router;
