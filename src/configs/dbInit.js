//Initializing of the Database

const mongoose = require('mongoose');
const config = require('./config');

async function initDatabase(){
    mongoose.set('strictQuery', false); // There is a warning about that should be provided

    await mongoose.connect(config.DB_URI);

    console.log(`DB connected`);
}

module.exports = initDatabase;