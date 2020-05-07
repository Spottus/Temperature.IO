const sqlite3 = require('sqlite3').verbose();


 let database = new sqlite3.Database('./src/database/temperatureDB.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
        console.error(err.message);
    }else{
        console.log('connessione al database temperatureDB');
    }
});

module.exports = {database};



