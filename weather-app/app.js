const request = require('postman-request');
const config = require('./config');
const geocode = require('./utils/geocode')

// request({ url: config.url }, (error, response) => {
//     const data = JSON.parse(response.body);
//     if(error) {
//         console.log('Cannot connect to weather service');
//     } else if (data.error) {
//         console.log('could not find the location');
//     } else {
//         console.log(data.current.temperature, data.current.precip);
//     }
// });

geocode('Hyderabad', (error, data) => {
    console.log('error', error)
    console.log('data', data);
})