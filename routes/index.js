var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var userData = require('../models/user');
require('marko/node-require');
var checkExpressValidator = require('express-validator/check');
var {check,validationResult} = checkExpressValidator;
var template = require('../views/layout.marko');

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
 	template.render({filename:"./pages/members.marko",title: "members", user: req.user},res);
});

function ensureAuthenticated(req, res ,next) {
	if(req.isAuthenticated()) {   // req.isAuthenticated() is function provided by passport
		return next();
	} else {
		res.redirect("/users/login");
	}
}

router.get('/users/register', function(req, res, next) {
 	template.render({filename:"./pages/register.marko",title: "register",user: req.user},res);
});

router.get('/users/login', function(req, res, next) {
 	template.render({filename:"./pages/login.marko",title: "login",user: req.user},res);
});

router.get('/users/logout', function(req, res, next) {
 	req.logout();
 	res.redirect('/users/login');
});

router.post('/users/register',[
	check('name').isLength({ min: 1 }).withMessage('Name must not be empty'),
	check('email').isLength({ min: 1 }).withMessage('Email must not be empty').isEmail().withMessage('Email is not valid'),
	check('username').isLength({ min: 1 }).withMessage('username must not be empty'),
	check('password').isLength({ min: 1 }).withMessage('password must not be empty'),
	check('cnfpassword').custom(function(value,{req}){ return (value === req.body.password)}).withMessage('passwords donot match'),
	check('profImage').isLength({ min: 1 }).withMessage('profile image must not be empty')
	],function(req, res, next){
		var reRenderData = {};
		reRenderData.name = req.body.name;
		reRenderData.email = req.body.email;
		reRenderData.username = req.body.username;
		reRenderData.password = req.body.password;
		reRenderData.cnfpassword = req.body.cnfpassword;
		// reRenderData.profImageName = req.body.profImageName;

		var errors;
		if(validationResult(req).isEmpty()) {
			storeDataInDatabase(reRenderData);
			// req.flash('success','you are now registered and may log in.');
			res.writeHead(302, { 'Location': '/' });
			res.end();
		} else{
		    errors = validationResult(req).mapped();
		  	template.render({filename:"./pages/register.marko",title: "register",errorData: errors,reRenderData : reRenderData,user: req.user},res);
		}
});


router.post('/users/login',passport.authenticate('local',{ failureRedirect: '/users/login',
	failureFlash: 'invalid username or password', successFlash: 'You are logged in' }),function(req ,res ,next){
		res.redirect('/');
	req.flash('success','you are logged in.');
});

passport.use(new LocalStrategy(function(username,password,done){
	userData.findUser(username,function(err,user) {
		if(err) {
			console.log("error in finduser");
			throw err;
		} 
		if(!user) {
			console.log("invalid username");
			done(null,false);
		} else {
			userData.comparePassword(password,user.password,function(err,match){
				if(err) {
					console.log("error in comparePassword");
					throw err;
				} 
				if(!match) {
					console.log("wrong password");
					done(null,false);
				} else {
					console.log("successful login");
					done(null,user);
				}
			});
		}
	});
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	userData.findUserById(id, function(err, user) {
	    done(err, user);
	});
});

function storeDataInDatabase(data){
	var userDataNew = new userData(data);
	userData.createUser(userDataNew);
}

module.exports = router;
