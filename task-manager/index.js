const express = require('express')
require('./src/db/mongoose')
const Task = require('./src/models/tasks')



const app = express()
const port = process.env.PORT || 3000


app.use(express.json())

app.post('/tasks', (req, res) => {
     const task = Task(req.body)
     task.save().then(() => {
        res.send(task)
     }).catch((e) => {
        res.status(400).send(e)
     })
})


app.listen(port, () => {
    console.log('Server is up on port'+ port)
})