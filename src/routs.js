//Setup of the router
const express = require('express');
const Router = express.Router;
const router = Router();
//Shorthand syntacs: const router = require('express').Router();

// We need the controllers in the router
const cubeController = require('./controllers/cubeController'); 
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');

//Using routs in the router giving it acctions for the controllers
router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAcoutPage);
router.get('/404', homeController.getErrorPage);

router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
router.get('/cubes/:cubeId/details', cubeController.getCubeDetails);
router.get('/cubes/:cubeId/attachAccessory', cubeController.getAttachAccessory);
router.post('/cubes/:cubeId/attachAccessory', cubeController.postAttachAccessory);

//Useing modular routs in the cotrollers directly
router.use('/accessory', accessoryController);

module.exports = router;