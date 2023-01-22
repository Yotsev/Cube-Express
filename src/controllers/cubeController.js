//Createing cubeController actions
const Cube = require('../models/Cube');

exports.getCreateCube = (req, res) => {
    res.render('create');
}

exports.postCreateCube = (req, res) => {
    //Get the data form the form    
    const {name, description, imageUrl, difficultyLevel} = req.body;

    //Save the cube
    let cube = new Cube(name, description, imageUrl, difficultyLevel);
    Cube.save(cube);

    //Redirect
    res.redirect('/');
}