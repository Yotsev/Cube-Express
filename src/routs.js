//Setup of the router
const express = require('express');

//Shorthand syntacs: const router = require('express').Router();
const Router = express.Router;
const router = Router();

const cubeController = require('./controllers/cubeController'); // We need the controllers in the router
const homeController = require('./controllers/homeController');

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAcoutPage);

router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
module.exports = router;