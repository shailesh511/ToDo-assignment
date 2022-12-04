require('dot-env')
const app= require('./Connnection/ExpressApp')
const port = process.env.PORT

app.listen(4000, console.log("Server is up and running....on ",port))