// Middleware - store any data sent in session, and pass it to all views
exports.autoStoreData = function (req, res, next) {

  if (!req.session.data){
    req.session.data = {};
  }

  for (var i in req.body){
    // any input where the name starts with _ is ignored
    if (i.indexOf("_") != 0){
      req.session.data[i] = req.body[i];
    }
  }

  // send session data to all views
  res.locals.session = req.session.data;

  next();

}
