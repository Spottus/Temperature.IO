const express = require('express');
const dotenv = require('dotenv');
const temperature = require('./temperature/temperature.controller');
const cron = require('node-cron');


dotenv.config();
const app = express();
const port = process.env.PORT;

cron.schedule("40 * * * * *", () => {
console.log("Running Job");
console.log("-------------------");
const {board} = require('./arduino/register');
})


app.use('/temperature',temperature);
app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }`);
});

