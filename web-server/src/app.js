const express = require('express')


const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})


app.get('/help', (req, res) => {
    res.send('<h1>Help</h1>')
})

app.get('/about', (req, res) => {
    res.send([{
        name: 'Tony Sopranos',
        job: 'Mob'
        },
        {name: 'Walter White',
        job: 'Teacher'}
    ])
})

app.get('/weather', (req, res) => {
    res.send({
        city: 'NewYork',
        forecast: 'Rainy'
    })
})

app.listen(3000, () => {
    console.log('Server is up!')
})