//3-rd party libraries
const express = require('express');

//My modules
const setViewEngain = require('./configs/viewEngain'); //View Engine;
const config = require('./configs/config'); // Configs
const routs = require('./routs'); // Routs
const initDatabase = require('./configs/dbInit'); // DB

//Run app and setups
const app = express(); // Run app
setViewEngain(app); // Setup of engine

//Middle wares
app.use(express.static('./src/public')); //Setup of static views middleware
app.use(express.urlencoded({extended:false})); //Getting the form data, extended must be provided not useing it for now
app.use(routs); //Setup routs


//Connecting to DB and starting the app only if the db is connected;
initDatabase() 
    .then(()=> app.listen(config.PORT, () => { console.log(`Server is running on ${config.PORT}...`) }))
    .catch((err)=> console.error(err)); // Loger should be added here later;