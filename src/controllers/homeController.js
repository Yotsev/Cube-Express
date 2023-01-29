//Createing homeController actions
const Cube = require('../models/Cube');

exports.getHomePage = async (req, res) => {
    const { search, from: difficultyFrom, to: difficultyTo } = req.query;
    let cubes = await Cube.find().lean(); // This is not a good practice. The filtration should be done on DB level. lean() is to coast the document to object
    
    // Will be done with services later mb :D
    if (search) {
        cubes = cubes.filter(c => c.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }

    if (difficultyFrom) {
        cubes = cubes.filter(c => c.difficultyLevel >= difficultyFrom);
    }

    if(difficultyTo) {
        cubes = cubes.filter(c=>c.difficultyLevel <= difficultyTo);
    }

    res.render('index', { cubes: cubes, search, difficultyFrom, difficultyTo });
};

exports.getAcoutPage = (req, res) => {
    res.render('about');
};

exports.getErrorPage = (req, res) => {
    res.render('404');
}