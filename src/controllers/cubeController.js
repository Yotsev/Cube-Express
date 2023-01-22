//Createing cubeController actions
const Cube = require('../models/Cube');
const db = require('../db.json');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = (req, res) => {
    //Get the data form the form    
    const { name, description, imageUrl, difficultyLevel } = req.body;

    //Save the cube
    let cube = new Cube(name, description, imageUrl, difficultyLevel);
    Cube.save(cube);

    //Redirect
    res.redirect('/');
};

exports.getCubeDetails = (req, res) => {
    let cubeId = Number(req.params.cubeId);

    if (!cubeId) {
        return res.redirect('/404');
    }

    let cube = db.cubes.find(c => c.id === cubeId);

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', {cube});
};