module.exports = app => {
    const todos = require("../controllers/todo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Todo
    router.post("/createTodo", todos.create);
  
    // Retrieve all Todos
    router.get("/listTodos", todos.findAll);
  
    // Update a Todo with id to mark completed
    router.put("/markTodoCompleted/:id", todos.updateCompleted);
    
    // Update a Todo with id to mark uncompleted
    router.put("/markTodoUncompleted/:id", todos.updateUncompleted);
  
    // Delete a Todo with id
    router.delete("/deleteTodo/:id", todos.delete);
  
    app.use('/', router);
  };