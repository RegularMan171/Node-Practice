const express = require('express');

const app = express();

app.get('', (req, res)=> {
    res.send('Hello')
});

app.get('/help', (req, res) => {
    res.send("help is on way")
});

app.get('/about', (req, res) => {
    res.send("<title>About</title>")
});

app.get('/weather', (req, res) => {
    res.send("Weather")
});


app.listen(3000, () => {
    console.log("server is running")
})
