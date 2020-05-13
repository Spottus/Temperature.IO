const express = require('express');
const {database} = require('./temperature.service');

temperature = express.Router();

temperature.get('/hour-Avg/:day/:month/:year/:hours', ( req, res ) => {

    var query = `SELECT avg(celsius) FROM log where log.day = '${req.params.day}' 
                    and log.month = '${req.params.month}' 
                    and log.year = '${req.params.year}' and log.hours = '${req.params.hours}'; );`

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

temperature.get('/day-Avg/:day/:month/:year', ( req, res ) => {
    var query = `SELECT avg(celsius) FROM log where log.day = '${req.params.day}' 
            and log.month = '${req.params.month}' 
            and log.year = '${req.params.year}'; );`

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




