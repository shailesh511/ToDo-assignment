require('dot-env')
const app= require('./Connnection/ExpressApp')
const port = process.env.PORT

app.listen(port, console.log("Server is up and running...."))