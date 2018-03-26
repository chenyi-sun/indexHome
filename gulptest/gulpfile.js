var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('default', function(){

});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});