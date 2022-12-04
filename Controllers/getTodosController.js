const Todo = require("../model/Todo")

const getTodosController = async (req, res)=>{
    const todos = await Todo.find();
    res.status(201).json(todos);
}

module.exports = getTodosController;