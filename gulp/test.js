var gulp = require("gulp");
var webdriver = require('gulp-webdriver');
var gls = require('gulp-live-server');
var selenium = require('selenium-standalone');
var server = gls.new('app/server.js');
var mocha = require('gulp-mocha');

gulp.task('set-env', function(){
  process.env.NODE_ENV = "test";
});

gulp.task('start-server', ['set-env'], function() {
  server.start();
});

gulp.task('selenium-start', ['start-server'], function (done) {
  selenium.install({
    logger: function (message) { }
  }, function (err) {
    if (err) return done(err);
    selenium.start(function (err, child) {
      if (err) return done(err);
      selenium.child = child;
      done();
    });
  });
});

gulp.task('run-e2e', ['selenium-start'], function() {
  return gulp.src('wdio.conf.js')
  .pipe(webdriver())
  .once('end', function() {
    selenium.child.kill();
    server.stop()
    process.exit(0)
  });
});

gulp.task('run-unit', ['set-env'], function() {
  return gulp.src('./app/**/*.mocha.js', {read: false})
    .pipe(mocha({reporter: 'spec'}));
});