//Configuring environments

const config = {
    production : {
        PORT: 3000,
        DB_URI: 'mongodb://127.0.0.1:27017/cubesdb', // Should be different it is here just for consistency
        SECRET: 'PRODSESCRET',
    },
    develpment : {
        PORT: 5000,
        DB_URI: 'mongodb://127.0.0.1:27017/cubesdb', // The connection string for the DataBase
        SECRET: 'DEVSECRET',
    }
};

module.exports = config[process.env.NODE_ENV || 'develpment'];