const express = require('express');
const route = express.Router();
const newsController = require('../app/controller/NewsController');


route.use('/:slug', newsController.militaryNews);
route.use('/', newsController.index);



module.exports = route;