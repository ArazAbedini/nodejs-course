const path = require('path')
const express = require('express')
const hbs = require('hbs')
const weather = require('./utils/weather')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
console.log(partialsPath)

app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)




app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'me!'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'about'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help'
    })
})



app.get('/weather', (req, res) => {
    if (!req.query.city){
        return res.send({
            erorr: 'you have to provide city'
        })
    }
    const city = req.query.city
    weather(city, (error, response) => {
        if (error) {
            return res.send(error)
        }
        res.send(JSON.stringify(response, null, 2))
        
    })
})

app.get('/about', (req, res) => {
    res.send()

})


app.get('*', (req, res) => {
    res.render('404', {
        page: 'desired page'
    })
})

app.listen(3000, () => {
    console.log('Server is up!')
})