const request = require('postman-request');
const config = require('./config');

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

request({ url: config.mapbox_url }, (error, response) => {
    const data = JSON.parse(response.body);
    if(error) {
        console.log("Unable to connect to location services");
    } else if(data.features.length === 0) {
        console.log("Unable to find location, Try again")
    } else {
        console.log('Longitude: '+data.features[0].center[0]+' Latitute: '+ data.features[0].center[1])
    }
})