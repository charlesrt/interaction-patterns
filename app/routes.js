var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

  res.render('index');

});


// Example routes - feel free to delete these

// Passing data into a page

router.get('/examples/template-data', function (req, res) {

  res.render('examples/template-data', { 'name' : 'Foo' });

});

// Branching

router.get('/examples/over-18', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18;

  if (over18 == "false"){

    // redirect to the relevant page
    res.redirect("/examples/under-18");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18');

  }

});

// add your routes here

router.get('/give-your-address/confirm-address', function (req, res) {

  console.log(req.session.data);

  var selectAddress = req.query.selectAddress;

  if (selectAddress == "false"){
    res.redirect("/give-your-address/manual-address");
  } else {
    res.render('give-your-address/confirm-address', { 'address' : selectAddress });
  }

});

router.get('/find-your-gp-doctor/select-gp', function (req, res) {

  var selectPractice = req.query.selectPractice;

  if (selectPractice == "false"){
    res.redirect("/find-your-gp-doctor/manual-gp");
  } else {
    res.render('find-your-gp-doctor/select-gp', { 'practice' : selectPractice });
  }

});

router.get('/find-your-gp-doctor/confirm-gp', function (req, res) {

  var selectGP = req.query.selectGP;
      selectPractice = req.body.practice;
      console.log(req.body);


  if (selectGP == "false"){
    res.redirect("/find-your-gp-doctor/manual-gp");
  } else {
    res.render('find-your-gp-doctor/confirm-gp', {
      'practice' : selectPractice,
      'gp' : selectGP
    });
  }

});

module.exports = router;
