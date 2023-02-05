//Createing cubeController actions
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

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
    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('/cube/details', { cube });
};

exports.getAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessory.find({ _id: { $nin: cube.accessories } }).lean();

    res.render('/cube/attachAccessory', { cube, accessories })
};

exports.postAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId)
    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);

    await cube.save();

    res.redirect(`/cubes/${cube._id}/details`);
};