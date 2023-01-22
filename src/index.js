//3-rd party libraries
const express = require('express');

//my modules
const setViewEngain = require('./configs/viewEngain');
const config = require('./configs/config');

const app = express();
setViewEngain(app); // setup of engine

app.use(express.static('./src/public')) //Setup of static views middleware

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(config.PORT, () => { console.log(`Server is running on ${config.PORT}...`) });