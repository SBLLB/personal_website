var gulp = require('gulp');
var sass = require("gulp-sass");

gulp.task('sass-build', function() {
  gulp.src('./app/public/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/public/css'));
});

gulp.task('sass-watch', function() {
  gulp.watch('./app/public/scss/*.scss', ['sass-build']);
});