//3-rd party libraries
const express = require('express');

//My modules
const setViewEngain = require('./configs/viewEngain');
const config = require('./configs/config');
const routs = require('./routs');

//Run app and setups
const app = express(); // Run app
setViewEngain(app); // Setup of engine

//Middle wares
app.use(express.static('./src/public')); //Setup of static views middleware
app.use(express.urlencoded({extended:false})); //Getting the form data, externed must be provided not useing it for now
app.use(routs); //Setup routs

app.listen(config.PORT, () => { console.log(`Server is running on ${config.PORT}...`) });