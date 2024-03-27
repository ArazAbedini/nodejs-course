const request = require('request')
const currentWeather = require('./utils/weather')
const temp = require('./utils/temp')


const city = process.argv[2]

if (!city) {
    return console.log('please provide city')
}

currentWeather(city, (error, {temp_f}) => {
    if (error) {
        return console.log(error)
    } else {
        const far = temp_f
        temp(far, (hot, cold) => {
            if (hot) {
                console.log(hot)
            } else {
                console.log(cold)
            }
        })

    }
})

