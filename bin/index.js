require = require('esm')(module); //rewire require to the esm module
module.exports = require('../app.js'); //get esm to compile app.js
