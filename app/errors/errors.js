module.exports =  function(app) {

var log = require('../log');

// catch 404 and forward to error handler
 app.use(function(req, res, next) {
   var err = new Error('Not Found');
   err.status = 404;
   next(err);
 });

 // error handlers

 // development error handler
 // will print stacktrace
 if (app.get('env') === 'development' || app.get('env') === 'test') {
   app.use(function(err, req, res, next) {
     res.status(err.status || 500);
      log(err)
      log(err.stack)
     res.render('site/views/error', {
       message: err.message,
       error: err,
       stack: err.stack,
       title: ""
     });
   });
 }

 // production error handler
 // no stacktraces leaked to user
 app.use(function(err, req, res, next) {
   res.status(err.status || 500);
   res.render('site/views/error', {
     message: "Sorry, somethings gone wrong...",
     error: {},
     title: ""
   });
 });
}