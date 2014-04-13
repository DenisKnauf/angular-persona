'use strict';

var gulp = require('gulp');
var karma = require('gulp-karma');


/* Test files with karma */
gulp.task('karma', function() {

  return gulp.src([
    'bower_components/angular/angular.js',
    'src/*.js',
    'tests/*.js'
  ]).pipe(karma({
    configFile: 'karma.conf.js',
    action: 'watch'
  }))
  .on('error', function(err) {
    // Make sure failed tests cause gulp to exit non-zero
    throw err;
  });
});
