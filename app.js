var express = require('express');
var path = require('path');

//leaving in the bodyParser in case we ever send up form data and need to get data out of form
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// just one "site" with 2 pages, / and about

// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// washing page 
app.get('/washing', function(req, res) {
    res.render('pages/washing');
});

// drying page 
app.get('/drying', function(req, res) {
    res.render('pages/drying');
});

// payment page 
app.get('/payment', function(req, res) {
    res.render('pages/payment');
});




app.listen(3000);  // not setting port number in www.bin, simple to do here
console.log('3000 is the magic port');

module.exports = app;
