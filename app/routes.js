var express = require('express');
    router = express.Router();
    utils = require(__dirname + '/utils');

router.use(utils.autoStoreData);

router.get('/', function (req, res) {

  res.render('index');

});

router.get('/give-your-address/confirm-address', function (req, res) {

  var selectAddress = req.query.selectAddress;

  if (selectAddress == "false"){
    res.redirect("/give-your-address/manual-address");
  } else {
    res.render('give-your-address/confirm-address', { 'address' : selectAddress });
  }

});

router.post('/find-your-gp-doctor/select-gp', function (req, res) {

  if (req.body.selectPractice == "false"){
    res.redirect("/find-your-gp-doctor/manual-gp");
  } else {
    res.render('find-your-gp-doctor/select-gp');
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
