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
        //http validation will be added.
    },
    difficultyLevel: {
        type: Number,
        require: true,
        max: 6,
        min: 1,
    },
    //Accessories will be added
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;