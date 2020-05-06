const express = require('express');
const dotenv = require('dotenv');
const measure = require('./measure/measure.controller');

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use('/measure',measure);

app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }`);
} );