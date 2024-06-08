const temp = (fahrenheit, callback) => {
    const celcius = (fahrenheit - 32) / 1.8
    if (celcius <= 10){
        callback(undefined, "it's cold, be carful")
    } else {
        callback('say hello to summer!' , undefined)
    }
}


module.exports = temp