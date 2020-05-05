const { Board, Thermometer } = require("johnny-five");
const sqlite3 = require('sqlite3').verbose();

const board = new Board();

let db = new sqlite3.Database('./tempDB.db', sqlite3.OPEN_READWRITE, (err) => {});

board.on("ready", () => {

  const thermometer = new Thermometer({
    controller: "TMP36",
    pin: "A0"
  });  

  thermometer.on("change", () => {
    let db = new sqlite3.Database('./tempDB.db', sqlite3.OPEN_READWRITE);
    const ts = Date.now();
    const date = new Date(ts);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let hours = date.getUTCHours() +2;
    let minutes = date.getUTCMinutes();
    let giorno = ' " ' + day + "-" + month + "-" + hours + ":" + minutes +' " ';
    const {celsius} = thermometer;
    console.log("Thermometer");
    console.log("  celsius      : ", celsius);
    console.log("  time         : ", giorno);
    console.log("--------------------------------------");
    insertTemp(celsius, giorno);
    sleep(1000);

  });
  


function insertTemp(celsius, giorno){

  let db = new sqlite3.Database('./tempDB.db', () => {});
  db.run(`INSERT INTO temp (giorno, temperatura)
    VALUES (?, ?)`,
    [giorno, celsius])
  db.close();
}




  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  
});