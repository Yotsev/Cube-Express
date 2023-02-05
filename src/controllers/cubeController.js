//Createing cubeController actions
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
const cubeService = require('../services/cubeService');
const cubeUtils = require('../utils/cubeUtils');

//Get Crate Cude Page
exports.getCreateCube = (req, res) => {
    res.render('cube/create');
};

//Post Crate Cube Page
exports.postCreateCube = async (req, res) => {
    //Get the data form the form    
    const { name, description, imageUrl, difficultyLevel } = req.body;

    //Save the cube to the DB, the properties are passed as a single document(object) this is for mongoose
    let cube = new Cube({ name, description, imageUrl, difficultyLevel });
    await cube.save();

    //Redirect
    res.redirect('/');
};

//Get Cube Details PAge
exports.getCubeDetails = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('cube/details', { cube });
};

//Get Attach Accessory Page
exports.getAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessory.find({ _id: { $nin: cube.accessories } }).lean();

    res.render('cube/attachAccessory', { cube, accessories })
};

//Post Attach Accessory Page
exports.postAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId)
    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);

    await cube.save();

    res.redirect(`/cubes/${cube._id}/details`);
};

//Get Edit Cube Page
exports.getEditCube = async (req, res) => {
    const cube = await cubeService.getOneCube(req.params.cubeId).lean();
    const difficultyLevels = cubeUtils.generateDifficultyLevels(cube.difficultyLevel);

    res.render('cube/edit', { cube, difficultyLevels });
};

//Post Edit Cube
exports.postEditCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    await cubeService.updateCube(req.params.cubeId, { name, description, imageUrl, difficultyLevel });

    res.redirect(`/cubes/${req.params.cubeId}/details`);
};

//Get Delete Cube Page
exports.getDeleteCube = async (req, res) => {
    const cube = await cubeService.getOneCube(req.params.cubeId).lean();
    const difficultyLevels = cubeUtils.generateDifficultyLevels(cube.difficultyLevel);

    res.render('cube/delete', { cube, difficultyLevels })
};

//Post Delete Cube
exports.postDeleteCube = async (req, res) => {
    await cubeService.deleteCube(req.params.cubeId);

    res.redirect('/');
};