//making schema
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost/nodeauth');
var db = mongoose.connection;
var userDataSchema = mongoose.Schema({
	name: String,
	email: String,
	username : String,
	password: String
});

//making model/collection/table
var userData = mongoose.model('userDataModel',userDataSchema);

userData.comparePassword = function(password,hash,callback) {
	bcrypt.compare(password,hash,callback);
}

userData.createUser = function(data) {

	bcrypt.hash(data.password,10).then(function(hash){
		data.password = hash;
		data.save();
	});
};

userData.findUser = function(username,callback) {
	userData.findOne({ 'username': username }, callback);
};

userData.findUserById = function(id,callback) {
	userData.findById(id,callback);
}

module.exports = userData;