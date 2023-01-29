//Setup of the router
const express = require('express');
const Router = express.Router;
const router = Router();
//Shorthand syntacs: const router = require('express').Router();

const cubeController = require('./controllers/cubeController'); // We need the controllers in the router
const homeController = require('./controllers/homeController');

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAcoutPage);
router.get('/404', homeController.getErrorPage);

router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
router.get('/details/:cubeId', cubeController.getCubeDetails);

module.exports = router;