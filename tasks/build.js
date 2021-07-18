var gulp = require('gulp');
var gulpSquence = require('gulp-sequence');

gulp.task('build',gulpSquence('clean','css', 'pages', 'scripts',['browser', 'server']));