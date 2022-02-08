const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=dc1fa5091d6510868e7d5135ceb7671f&query=37.8267,-122.4233';

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data+=chunk.toString();
    })
    response.on('end', () => {
        console.log(JSON.parse(data).current)
    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end();