const sqlite3 = require('sqlite3').verbose();

// open database 
let db = new sqlite3.Database('./tempDB.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the tempDb database.');
});

// db.run
//   (`DROP TABLE temp`, (err) => {
//     if (err) {
//       console.error(err.message);
//     }console.log('va tutto bene')
// });

db.run
  (`CREATE TABLE temp (
    giorno TEXT,
    temperatura TEXT
  );`, (err) => {
    if (err) {
      console.error(err.message);
    }
  })

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});