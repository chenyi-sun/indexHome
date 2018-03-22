var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    htmlmin = require('gulp-htmlmin');

gulp.task('default', function () {
    var options = {
        removeComments: true,
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('./../html/loading/loading.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./../html/loading'));
});