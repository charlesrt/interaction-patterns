var express = require('express');
    router = express.Router();
    utils = require(__dirname + '/utils');

router.use(utils.autoStoreData);

router.get('/', function (req, res) {

  req.session.destroy();

  res.render('index');

});

router.post('/give-your-address/confirm-address', function (req, res) {

  if (req.body.number == "false"){
    res.redirect("/give-your-address/manual-address");
  } else {
    res.render('give-your-address/confirm-address');
  }

});

router.post('/find-your-gp-doctor/select-gp', function (req, res) {

  if (req.body.gpPractice == "false"){
    res.redirect("/find-your-gp-doctor/manual-gp");
  } else {
    res.render('find-your-gp-doctor/select-gp');
  }

});

router.post('/find-your-gp-doctor/confirm-gp', function (req, res) {

  if (req.body.gpName == "false"){
    res.redirect("/find-your-gp-doctor/manual-gp");
  } else {
    res.render('find-your-gp-doctor/confirm-gp');
  }

});

module.exports = router;
