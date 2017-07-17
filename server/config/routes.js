var mongoose = require('mongoose');
var User = mongoose.model('User');
var user = require('../controllers/users.js');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index')
  })
  app.get('/welcome', function(req, res) {
    res.render('welcome')
  })
  app.post('/register', function(req,res){
    console.log(req.body.first_name)
    user.register(req, res)
  })
  app.post('/login', function(req,res){
    user.login(req, res)
  })
  // app.get('/remove/:name', function(req,res){
  //   api.remove(req, res)
  // })
  // app.get('/:name', function (req, res) {
  //   api.user(req,res)
  // })
}