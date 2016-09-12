var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
  name: String,
  age: Number,
  username:  String,
  password: String
});

var User = module.exports = mongoose.model('User', user);

module.exports.getUser = function(cb, limit){
  User.find(cb).limit(limit);
}
