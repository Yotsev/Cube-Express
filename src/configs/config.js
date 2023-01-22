const config = {
    production : {
        PORT: 3000
    },
    develpment : {
        PORT: 5000
    }
};

module.exports = config[process.env.NODE_ENV || 'develpment'];