const request = require('request')
const currentWeather = require('./utils/weather')


currentWeather('New York', (error, response) => {
    console.log(error)
    console.log(response)
})

