
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: {type: String, required: true, minlength: 1, trim: true}, 
  last_name: {type: String, required: true, minlength: 1, trim: true},
  email: {type: String, required: true, unique: true, trim: true},
  password: {type: String, required: true, trim: true, minlength: 8, maxlength: 32, 
    // validate: {
    //       validator: function( value ) {
    //         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
    //       },
    //       message: "Password failed validation, you must have at least 1 number, uppercase and special character"
    //     }
      },
  birthday:{ type: Date, required: true, trim: true, default: new Date() },
},
{ timestamps: true });

var User = mongoose.model('User', UserSchema);


