const five = require('johnny-five');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express()
const board = new five.Board();

const port = process.env.PORT;

app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );