//Createing homeController actions

exports.getHomePage = (req, res) =>{
    res.render('index');
};

exports.getAcoutPage = (req, res) => {
    res.render('about');
};
