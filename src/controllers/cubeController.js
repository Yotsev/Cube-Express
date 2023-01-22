//Createing cubeController actions
const Cube = require('../models/Cube');
exports.getCreateCube = (req, res) => {
    res.render('create');
}

exports.postCreateCube = (req, res) => {
    //Get the data form the form    
    const body = req.body;

    //Save the cube
    let cube = new Cube(req.body);
    Cube.save(cube);

    //Redirect
    res.redirect('/');
}