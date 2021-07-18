var gulp =require('gulp') ;
var liveserver =require('gulp-live-server') ;
var args =require('./utils/args') ;

gulp.task('serve', (cb)=>{
    if(!args.watch){ cb(); }

    var server = liveserver.new(['--harmony', 'server/bin/www']);
    server.start();

    gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], (file) =>{
        server.notify.apply(server,[file]);
    });

    gulp.watch(['server/routes/**/*.js', 'server/app.js'], (file) =>{
        server.start.bind(server)();
    });
});