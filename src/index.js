const path = require('path');
var express = require('express')
var handlebars = require('express-handlebars');
//import express from 'express';
//import { engine } from 'express-handlebars';

const app = express();

const routes = require('./router/index.js');


app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));


routes(app);


app.listen(3000);