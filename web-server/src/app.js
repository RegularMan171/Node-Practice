const path  = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');


app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: "Name"
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About me",
        name: "Not my name"
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpMessage: "Help is coming"
    })
})

app.get('/weather', (req, res) => {
    res.send([{
        forecast: "It's Sunny",
        location: "Hyderabad"
    }])
});


app.listen(3000, () => {
    console.log("server is running")
})
