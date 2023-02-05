//Seting up the Model for the DB
const mongoose = require('mongoose'); //Can be destrucured const { Schema, model } = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    imageUrl: {
        type: String,
        required: true,
        //http/https validarot can be use as this or like in the Accessory controller
        match: [/^https?:\/\//, 'Invalid image URL'],
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    },
    accessories: [{
         type: mongoose.Types.ObjectId,
         ref: 'Accessory', 
    }],
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;