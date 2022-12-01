require('dot-env')
const express = require('express')
const app = express();
const port = process.env.PORT;

app.get("/",()=>{
    res.status(200).send("Welcome man...")
})



module.exports = app;