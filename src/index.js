const express = require('express');

const setViewEngain = require('./configs/viewEngain');
const config = require('./configs/config');

const app = express();
setViewEngain(app);

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(config.PORT, () => { console.log(`Server is running on ${config.PORT}...`) });