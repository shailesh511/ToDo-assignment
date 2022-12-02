require('./DbConnection').connect()
const express = require('express')
const app = express();

//home route
app.get("/",(req, res)=>{
    res.status(200).send("Welcome man...")
})



module.exports = app;