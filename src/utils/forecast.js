const request = require("request");

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=5394567b5accf0924a8a055f4f2dfff1&query=' + latitude + ',' + longitude;

    request({url, json: true}, (error, response) => {
        if(error){
            callback("Unable to connect", undefined);
        }else if(response.body.error){
            callback("Unable to get forecast", undefined);
        }else {
            callback(undefined, response.body.current.weather_descriptions + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees outside")
        }
    })
}

module.exports = forecast;