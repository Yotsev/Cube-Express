const Cube = require('../models/Cube');

exports.getOneCube = (cubeId) => Cube.findById(cubeId);

exports.updateCube = (cubeId, data) => Cube.findByIdAndUpdate(cubeId, data, { runValidators: true });