//Createing homeController actions
const db = require('../db.json'); // Will be done with services later mb :D

exports.getHomePage = (req, res) =>{
    res.render('index', {cubes: db.cubes});
};

exports.getAcoutPage = (req, res) => {
    res.render('about');
};
