const request = require("request");

const weather = (city, callback) => {
  const url =
    "http://api.weatherapi.com/v1/current.json?key=82992e45ce6749e3a24154608242503&q=" +
    encodeURIComponent(city);

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect weather service!", undefined);
    } else if (response.body.error) {
      callback("There is no city in this name", undefined);
    } else {
      callback(undefined, response.body.current);
    }
  });
};

// const temp = (fahrenheit, callback) => {
//     const celcius = (fahrenheit - 32) / 1.8
//     if (celcius <= 10){
//         callback(undefined, "it's cold, be carful")
//     } else {
//         callback('say hello to summer!' , undefined)
//     }
// }

module.exports = weather;
