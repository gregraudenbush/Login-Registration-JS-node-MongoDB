var mongoose = require('mongoose');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;

module.exports = {
  show: function(req, res) {
    User.find({}, function(err, people) {
      res.json({people: people});
    })
  },
  register: function(req, res) {
    console.log(req.body.first_name)
    var user = new User({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password, birthday: req.body.birthday});
    user.save(function(err) {
      if(err){
        console.log("something went wrong" + err.message);
        res.render('index', {errors: err})
      } else {
        res.render('welcome', {message: "Thank You for Registering ", user: req.body.first_name});
      }
    })
  },
  remove: function(req, res) {
    
    User.remove({name: req.params.name},function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/');
      }
    })
  },

  user: function(req, res) {
    // var api = new Api({name: req.params.name});
    User.findOne({name: req.params.name},function(err, people) {
      if(err){
        console.log("something went wrong");
      } else {
        res.json({people: people});
      }
    })
  },
  login: function(req, res) {
    
    User.find({email: req.body.email, password: req.body.password},function(err, user) {
      if(err){
        console.log("Email or Password Invalid");
        res.render('index', {errors: err})
      } else {
        if(user.length == 0){
        res.render('index', {message: "not in our system"})
        }else{
        res.render("welcome", {message: "Your are logged in", user: user, });
        }
      }
    })
  }
}
