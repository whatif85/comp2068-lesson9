var express = require('express');
var router = express.Router();

// reference the business model
var Business = require('../models/business');

// auth check
function isLoggedIn(req, res, next)
{
  if (req.isAuthenticated())
  {
    next();
  }
  else
  {
    res.redirect('/login');
  }
}

// GET handler for /businesses
router.get('/', isLoggedIn, function(req, res, next) {

    // use business model to run a query
    Business.find(function(err, businesses) {
        if (err) {
            console.log(err);
            res.render('error');
        }
        else {
            // load the businesses view
            res.render('businesses', {
                title: 'Businesses',
                businesses: businesses,
                user: req.user
            });
        }
    });
});

/* GET /businesses/add - display empty business form */
router.get('/add', isLoggedIn, function(req, res, next) {

    // load the blank business form
    res.render('add-business', {
        title: 'Add a New Business',
        user: req.user
    });
});

/* POST /businesses/add - process form submission */
router.post('/add', isLoggedIn, function(req, res, next) {
    // use the business model and call the Mongoose create function
    Business.create( {
        title: req.body.title,
        publisher: req.body.publisher,
        genre: req.body.genre,
        year: req.body.year
    }, function(err, business) {
           if (err) {
               console.log(err);
               res.render('error');
           }
        else {
               res.redirect('/businesses');
           }
        });
});

/* GET /businesses/delete/:_id - run a delete on selected business */
router.get('/delete/:_id', isLoggedIn, function(req, res, next) {
    // read the id value from the url
    var _id = req.params._id;

    // use mongoose to delete this business
    Business.remove( { _id: _id }, function(err) {
       if (err) {
           console.log(err);
           res.render('error', {message: 'Delete Error'});
       }
        res.redirect('/businesses');
    });
});

/* GET /businesses/:_id - show the edit form */
router.get('/:_id', isLoggedIn, function(req, res, next) {
    // get the id from the url
    var _id = req.params._id;

    // look up the selected business document with this _id
    Business.findById(_id,  function(err, business) {
      if (err) {
          console.log(err);
          res.render('error', { message: 'Could not find business'});
      }
        else {
          // load the edit form
          res.render('edit-business', {
              title: 'Edit business',
              business: business,
              user: req.user
          });
      }
    });
});

/* POST /businesses/:_id - save form to process business updates */
router.post('/:_id', isLoggedIn, function(req, res, next) {
    // get the id from the url
    var _id = req.params._id;

    // instantiate a new business object & populate it from the form
    var business = new business( {
       _id: _id,
        title: req.body.title,
        publisher: req.body.publisher,
        genre: req.body.genre,
        year: req.body.year
    });

    // save the update using Mongoose
    Business.update( { _id: _id }, business, function(err) {
       if (err) {
           console.log(err);
           res.render('error', {message: 'Could not Update Business'});
       }
        else {
           res.redirect('/businesses');
       }
    });
});

// make controller public
module.exports = router;
