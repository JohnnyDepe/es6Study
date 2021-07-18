var gulp = require('gulp');
var args = require('./utils/args');

gulp.task('browser', (cb) => {
    if(!args.watch){ return cb(); }
    gulp.watch('app/**/*.js',['scripts']);
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);
});