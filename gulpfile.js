var gulp = require('gulp');
var fs   = require('fs')
fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
  require('./gulp/' + task)
});

gulp.task("sass", ["sass-watch"]);
gulp.task("unit", ["run-unit"]);
gulp.task("e2e", ["run-e2e"]);