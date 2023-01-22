//Createing homeController actions
const db = require('../db.json'); // Will be done with services later mb :D

exports.getHomePage = (req, res) => {
    const { search, from: difficultyFrom, to: difficultyTo } = req.query;
    let cubes = db.cubes;

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