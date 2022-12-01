import mongoose from 'mongoose';
//or const mongoose = require("mongoose");

const Schema = mongoose.Schema
const ToDoSchema = new Schema({
    title: String,
    tasks:  []
})

const ToDoModel = mongoose.model("ToDo", ToDoSchema)

export default ToDoModel;