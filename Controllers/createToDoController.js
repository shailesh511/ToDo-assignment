const app = require("../Connnection/ExpressApp");
const Todo = require("../model/Todo");

const createToDoController = async (req, res)=>{
    try{
    const ftitle = req.body.title;
    const ftask = req.body.task;
    const todoModel = await Todo.create({
        title: ftitle,
        tasks: ftask
    })

    res.status(200).json(todoModel);
    console.log(req.body);
    }catch(err){
        console.log(err)
    } 
}

module.exports = createToDoController;