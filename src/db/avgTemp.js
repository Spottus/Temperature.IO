const sqlite3 = require('sqlite3').verbose();

// open database 
let db = new sqlite3.Database('./tempDB.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }else{
  console.log('Connected to the tempDb database.');
  }
});
var hour = '11';
var day = '6';
var month = '5';

var queryHourAvarage = `SELECT avg(celsius) FROM log where log.hours = '${hour}'; );`
var queryDailyAverage = `SELECT avg(celsius) FROM log where log.day = '${day}' and log.month  = '${month}'; );`


db.all
  ( queryHourAvarage, [], (err,rows) => {
    if (err) {
      console.error(err.message);
    }
    rows.forEach((row) => {
      console.log(row);
    });
  })



  db.all
  ( queryDailyAverage, [], (err,rows) => {
    if (err) {
      console.error(err.message);
    }
    rows.forEach((row) => {
      console.log(row);
    });
  })
  

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});