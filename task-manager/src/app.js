const express = require('express')
require('./db/mongoose')
const Task = require('./models/tasks')
const tasksRoutes = require('./routes/tasks')
const userRoutes = require('./routes/user')



const app = express()
const port = process.env.PORT



app.use(express.json())
app.use(tasksRoutes)
app.use(userRoutes)

module.exports = app