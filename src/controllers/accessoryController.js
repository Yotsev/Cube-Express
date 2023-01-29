const router = require('express').Router();

const Accessory = require('../models/Accessory');


router.get('/create', (req, res) => {
    res.render('./accessory/createAccessory');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl } = req.body;

    await Accessory.create({ name, description, imageUrl }); // Or it can be done like in the cusecontroller

    res.redirect('/');
});

module.exports = router;