
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); 
var path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
require('./server/config/mongoose.js');
// var bcrypt = require('bcrypt');   // or 'bcrypt' on some versions
// bcrypt.hashSync(password, bcrypt.genSaltSync(8));Copy
// bcrypt.compareSync(password, this.password);
// mongoose.Promise = global.Promise;

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");

})