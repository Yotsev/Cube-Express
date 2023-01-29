//Seting up the Models for the DB
const mongoose = require('mongoose'); //Can be destrucured const { Schema, model } = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
        maxLength: 50,
    },
    imageUrl: {
        type: String,
        require: true,
        //http/https validarot can be use as this or like in the Accessory controller
        match: [/^https?:\/\//, 'Invalid image URL'],
    },
    difficultyLevel: {
        type: Number,
        require: true,
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