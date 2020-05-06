const sqlite3 = require('sqlite3').verbose();

// open database 
let db = new sqlite3.Database('./tempDB.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }else{
  console.log('Connected to the tempDb database.');
  }
});


var queryHourAvarage = `SELECT avg(celsius) FROM log where log.hours = '11'; );`
var queryDailyAverage = `SELECT avg(celsius) FROM log where log.day = '6' and log.month  = '5'; );`


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