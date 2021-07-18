var gulp = require('gulp');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var webpack = require('webpack');
var gulpWebpack= require( 'webpack-stream');
var named = require('vinyl-named');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var { log, colors } = require('gulp-util');
var args = require('./utils/args');

gulp.task("scripts", ()=>{
    return gulp.src(['app/js/index.js'])
    .pipe(plumber({
        errorHandle: function(){

        }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'babel'
            }, null, (error, status)=>{
                log(`Finished '${colors.cyan('scripts')}'`,status,toString({
                    chunks: false
                }))
            }]
        }
    }))
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
        basename: 'cp',
        extname:'.min.js'
    }))
    .pipe(uglify({
        compress: {properties: false},
        output: {'quote_keys': true}
    }))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch,livereload()))
});