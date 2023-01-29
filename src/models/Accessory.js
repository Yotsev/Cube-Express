const mongoose = require('mongoose');

const accessorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
        maxLength: 50
    },
    imageUrl : {
        type: String,
        require: true,
        //Add  the htpp/https validation
    },
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;