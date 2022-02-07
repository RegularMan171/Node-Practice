const request = require('postman-request');
const config = require('./config');

request({ url: config.url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
})