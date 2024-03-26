const request = require('request')

const url = 'http://api.weatherapi.com/v1/current.json?key=82992e45ce6749e3a24154608242503&q=London'


request({ url: url, json: true}, (error, response) => {
    // const data = JSON.parse(response.body)
    if (error) {
        console.log('Unable to connect weather service!')
    } else if (response.body.error) {
        console.log('Unable to find!')
    } else { 
        console.log(response.body.current)
    }
})