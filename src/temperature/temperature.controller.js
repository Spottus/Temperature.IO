const express = require('express');
const {database} = require('./temperature.service');

temperature = express.Router();

temperature.get('/hour-Avg/:hours', ( req, res ) => {

    var query = `SELECT avg(celsius) FROM log where log.hours = '${req.params.hours}'; );`

    database.get(query, (err,row) =>{
        if(err) {
            res.status(400).json({"error":err.message});
            return;
      }
      res.json({
          "temperature":row
        });
    }); 
});

temperature.get('/day-Avg/:day', ( req, res ) => {
      var query = `SELECT avg(celsius) FROM log where log.day = '${req.params.day}'; );`

      database.get(query, (err,row) =>{
        if(err) {
            res.status(400).json({"error":err.message});
            return;
      }
      res.json({
          "temperature":row
        });
    });    
});

module.exports = temperature;