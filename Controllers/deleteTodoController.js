const Todo = require("../model/Todo");


const deleteTodoController = async (req, res)=>{
    try{
    const ftitle = req.body.title;
    const ftask = req.body.task;

    //check whether this user exist or not
    const existingTodo = await Todo.find({title:ftitle, tasks:ftask}).exec();
    console.log(existingTodo);

    if(existingTodo.length===0){
        res.status(400).send("This combination doesn't exist")
    }

    //find the combination in the DB and delete
    const todo = await Todo.findOneAndDelete({title: ftitle, tasks:ftask})
   
    if(todo){
       res.status(200).send("Todo deleted....")
    }

    res.status(400).send("Todo doesn't exist!!!!")
   }
   catch(err){
     console.log(err);
   }
}

module.exports = deleteTodoController;