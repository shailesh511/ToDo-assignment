require('./DbConnection').connect()
const express = require('express');
const createToDoController = require('../Controllers/createToDoController');
const deleteTodoController = require('../Controllers/deleteTodoController');
const getTodosController = require('../Controllers/getTodosController')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))


//home route
app.get("/",(req, res)=>{
    res.status(200).send("Welcome man...")
})

//createToDoController
app.post("/createTodo", createToDoController)

//getTodoController
app.get("/getTodos", getTodosController)

//deleteTodoController
app.delete("/deleteTodo", deleteTodoController)

module.exports = app;