var express = require('express');
var router = express.Router();

// link to the account model
var Account = require('../models/account');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Lesson 9',
    message: 'Authentication with Passport OAuth - Part 2',
    user: req.user
  });
});

/* GET register page */
router.get('/register', function(req, res, next) {
  res.render('register', {
    title: 'Register',
    user: req.user
  });
});

/* POST register page */
router.post('/register', function(req, res, next)
{
  // use passport and the Account model to save the new user
  Account.register(new Account ( { username: req.body.username } ),
    req.body.password, function(err, account)
    {
      if (err)
      {
        console.log(err);
        res.render('error');
      }
      else
      {
        res.redirect('/login');
      }
    });
});

/* GET login page */
router.get('/login', function(req, res, next)
  {
    // get session messages if there are any
    var messages = req.session.messages || [];

    // clear the messages out of the session
    req.session.messages = null;

    res.render('login', {
    title: 'Login',
    messages: messages,
    user: req.user
  });
});

/* POST login page */
router.post('/login', passport.authenticate('local',
  {
    successRedirect: '/games',
    failureRedirect: '/login',
    failureMessage: 'Invalid Login' // stored in session.messages
  }));

/* GET logout */
router.get('/logout', function(req, res, next)
{
  req.logout();
  res.redirect('/login');
});

/* GET /facebook */
router.get('/facebook', passport.authenticate('facebook'),
function(req, res, next)
{
  // just redirecting to facebook
});

/* GET /facebook/callback */
router.get('/facebook/callback', passport.authenticate('facebook',
{
  failureRedirect: '/login',
  failureMessage: 'Invalid Login'
}), function(req, res, next)
{
  // show the games page
  res.redirect('/games');
});

/* GET /github */
router.get('/github', passport.authenticate('github'),
function(req, res, next)
{
  // just redirecting to github
});

/* GET /github/callback */
router.get('/github/callback', passport.authenticate('github',
{
  failureRedirect: '/login',
  failureMessage: 'Invalid Login'
}), function(req, res, next)
{
  // show the games page
  res.redirect('/games');
});

module.exports = router;
