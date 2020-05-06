const { Board, Thermometer } = require("johnny-five");
const sqlite3 = require('sqlite3').verbose();
const fs  = require('fs');

const board = new Board();


board.on("ready", () => {

  const thermometer = new Thermometer({
    controller: "TMP36",
    pin: "A0"
  });  

  thermometer.on("change", () => {
    
    const ts = Date.now();
    const date = new Date(ts);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let hours = date.getUTCHours() +2;
    const {celsius} = thermometer;
    let record = day + ',' + month + ',' + hours + ',' + celsius;

    console.log("Thermometer");
    console.log("  day            : ", day);
    console.log("  month          : ", month);
    console.log("  hours          : ", hours);
    console.log("  celsius        : ", celsius);
    console.log("--------------------------------------");
    
    var fs = require('fs');
    var logStream = fs.createWriteStream('log.csv', {flags: 'a'});
    // use {flags: 'a'} to append and {flags: 'w'} to erase and write a new file
    logStream.write(record);
    logStream.end('\n');
    sleep(1000);
    
  });


  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  
});







// function insertTemp(celsius, giorno){

//   let db = new sqlite3.Database('./tempDB.db', sqlite3.OPEN_READWRITE, (err) => {
//     if (err) {
//              console.error(err.message);
//     }
//   });
//   db.run(`INSERT INTO temp (giorno, temperatura)
//     VALUES ('c', 'c')`,
//   )}