const request = require('postman-request');
const config = require('../config');

const forecast = (latitude, longitude, callback) => {
    const url = config.weatherStackUrl(latitude, longitude);
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('cannot connect to weather service', undefined);
        } else if (response.body.error) {
            callback('could not find the location', undefined);
        } else {
            callback(undefined, 'The temparature outside is '+response.body.current.temperature+". But it feels like "+response.body.current.feelslike+".\nThe percentage of the occurance of rain: "+response.body.current.precip);
        }
    })
}

module.exports = forecast;