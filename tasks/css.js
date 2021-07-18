var gulp = require('gulp');

gulp.task('pages', () => {
    return gulp.src('app/**/*.css')
    .pipe(gulp.dest('server/public'))
});