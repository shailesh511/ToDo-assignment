const app = require("../Connnection/ExpressApp");
const Todo = require("../model/Todo");

const createToDoController = async (req, res)=>{
    try{
    const ftitle = req.body?.title;
    const ftask = req.body?.task;
    
    //if any field is missing 
    if(ftitle === undefined || ftask === undefined || ftitle==='' || ftask === '' ){
       res.status(401).send("All fields are required...")
    }
    
    //if Todo already exist
    const existingTodo = await Todo.findOne({title: ftitle})
    if(existingTodo){
        res.status(401).send("title already exists!!!!")
    }

    //if not then create a model and save it into database
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