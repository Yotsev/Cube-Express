//Setup of the router
const express = require('express');
const Router = express.Router;
const router = Router();
//Shorthand syntacs: const router = require('express').Router();

// We need the controllers in the router
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');
const { isAuthenticated } = require('./middlewares/authmiddleware');

//Using routs in the router giving it acctions for the controllers
router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAcoutPage);
router.get('/404', homeController.getErrorPage);

router.use('/', authController);

router.get('/cubes/create', isAuthenticated, cubeController.getCreateCube);
router.post('/cubes/create', isAuthenticated, cubeController.postCreateCube);
router.get('/cubes/:cubeId/details', cubeController.getCubeDetails);
router.get('/cubes/:cubeId/edit', cubeController.getEditCube);
router.post('/cubes/:cubeId/edit', cubeController.postEditCube);
router.get('/cubes/:cubeId/delete', cubeController.getDeleteCube);

router.get('/cubes/:cubeId/attachAccessory', cubeController.getAttachAccessory);
router.post('/cubes/:cubeId/attachAccessory', cubeController.postAttachAccessory);



//Useing modular routs in the cotrollers directly
router.use('/accessories', accessoryController);

module.exports = router;