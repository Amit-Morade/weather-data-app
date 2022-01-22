const request = require('postman-request')

const getweather = function(location, callback) {

    const url = 'http://api.weatherstack.com/current?access_key=e6068d154836879ce1757075e151c680&query=' + location;
    
    request({ url, json: true }, (error, response) => {
        if(error){
            callback({error: "cannot connect to server"}, undefined)
        }else {
            if(response.body.error){
                return callback("location cannot be found", undefined)
            }
            const data = {
                weather_description: response.body.current.weather_descriptions[0],
                temperature: response.body.current.temperature
            }
            callback(undefined, data)
        }
    })
}

module.exports = getweather