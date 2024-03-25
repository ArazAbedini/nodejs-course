const request = require('request')

const url = 'http://api.weatherapi.com/v1/current.json?key=82992e45ce6749e3a24154608242503&q=Paris'


request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})