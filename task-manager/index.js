const express = require('express')
require('./src/db/mongoose')
const Task = require('./src/models/tasks')
const tasksRoutes = require('./src/routes/tasks')
const userRoutes = require('./src/routes/user')



const app = express()
const port = process.env.PORT || 3000



app.use(express.json())
app.use(tasksRoutes)
app.use(userRoutes)

app.listen(port, () => {
    console.log('Server is up on port '+ port)
})