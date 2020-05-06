const express = require('express');


measure = express.Router();

measure.get('/', ( req, res ) => {
    res.send("hello surfshark")
});


module.exports = measure;