const mongoose = require('mongoose');

const accessorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    },
    imageUrl : {
        type: String,
        required: true,
        //http/https validarot can be use as this or like in the Cube controller
        validate: {
            validator: function(value){
                return value.startsWith('http://') || value.startsWith('https://');
            },
            message: 'Invalid image URL',
        }
    },
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;