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

exports.getCubeDetails = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', { cube });
};