var gulp = require('gulp');
var gulpif = require('gulp-if');
var livereload = require('gulp-livereload');
var args = require('./utils/args');

gulp.task('pages', ()=>{
    return gulp.src('app/**/*.ejs')
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch, livereload()))
});
