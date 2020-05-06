const express = require('express');
const {queryTemperatureAvaragHour,queryTemperatureAvaragDay} = require('./temperature.service');

temperature = express.Router();

temperature.get('/hourAvg/:hours', ( req, res ) => {
    let temperatureAvg = queryTemperatureAvaragHour(req.params.hours)
    res.json('temperature is');
});

temperature.get('/dayAvg', ( req, res ) => {
    res.json("sassi di mare")
});

module.exports = temperature;