const request = require('request')





const weather = (city, callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=82992e45ce6749e3a24154608242503&q=' + encodeURIComponent(city)


    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find!', undefined)
        } else {
            callback(undefined, response.body.current)
        }

    })

}
module.exports = weather
