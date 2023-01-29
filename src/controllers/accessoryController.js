const router = require('express').Router();

const Accessory = require('../models/Accessory');


router.get('/create', (req, res) => {
    res.render('./accessory/createAccessory');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl } = req.body;
    try{
        
        await Accessory.create({ name, description, imageUrl }); // Or it can be done like in the cubeController
    } catch (err){
        console.log(err.message);
        return res.redirect('/404');
    }

    res.redirect('/');
});

module.exports = router;