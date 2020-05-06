const sqlite3 = require('sqlite3').verbose();



function queryTemperatureAvaragHour(hour) {
var avgHour;
let database = new sqlite3.Database('./src/database/temperatureDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err){
      console.error(err.message);
    }
});


database.get(`SELECT avg(celsius) FROM log where log.hours = '${hour}'; );`,[],(err,row) => {
    if(err) console.error(err.message);
    avgHour=row;
    
});
console.log(avgHour)
database.close;
return avgHour;
}
    
function queryTemperatureAvaragDay(day) {
let database = new sqlite3.Database('./src/database/temperatureDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err){
    console.error(err.message);
    }
});

let avgDay = database.get(`SELECT avg(celsius) FROM log where log.day = '${day}'; );`,[],(err,row) => {
    if(err) console.error(err.message); 
})
database.close()
return avgDay.row;
}

module.exports = {queryTemperatureAvaragHour,queryTemperatureAvaragDay};