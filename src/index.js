//3-rd party libraries
const express = require('express');

//My modules
const setViewEngain = require('./configs/viewEngain');
const config = require('./configs/config');
const routs = require('./routs');

//Run app and set middlewares
const app = express(); // Run app
setViewEngain(app); // Setup of engine
app.use(express.static('./src/public')) //Setup of static views middleware
app.use(routs); //Setup routs

app.listen(config.PORT, () => { console.log(`Server is running on ${config.PORT}...`) });