const path = require('path')
const express = require('express')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')





app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'me!'
    })
})



app.get('/weather', (req, res) => {
    res.send({
        city: 'NewYork',
        forecast: 'Rainy'
    })
})

app.get('/about', (req, res) => {
    res.send()
})

app.listen(3000, () => {
    console.log('Server is up!')
})