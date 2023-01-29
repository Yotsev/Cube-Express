//Createing cubeController actions
const Cube = require('../models/Cube');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = async (req, res) => {
    //Get the data form the form    
    const { name, description, imageUrl, difficultyLevel } = req.body;

    //Save the cube to the DB, the properties are passed as a single document(object) this is for mongoose
    let cube = new Cube({ name, description, imageUrl, difficultyLevel });
    await cube.save();

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

    res.render('details', { cube });
};