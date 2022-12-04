const mongoose = require("mongoose");
const mongoURL = process.env.DATABASE

const connectionCode = mongoose.connect("mongodb+srv://shailesh511:shailesh511@cluster0.fdqfnkp.mongodb.net/todo", { useNewUrlParser: true, useUnifiedTopology : true })
                       .then(console.log("DB connected"))
                       .catch(err => {
                        console.log("Connection Failed!!!",err)
                        console.log(err)
                        process.exit(1)
                    })

exports.connect = () => { connectionCode }


