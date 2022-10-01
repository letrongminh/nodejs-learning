const path = require('path');
var express = require('express')
var handlebars = require('express-handlebars');
//import express from 'express';
//import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
    res.render('home');
});
 

app.get('/news', (req, res) => {
  res.render('news');
});


app.get('/search', (req, res) => {
  res.render('search');
});


app.post('/search', (req, res) => {
  res.send('-----');
});

app.listen(3000);