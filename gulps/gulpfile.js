var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    htmlmin = require('gulp-htmlmin');

gulp.task('Loading', function () {
    var options = {
        removeComments: true,
    };
    gulp.src('./../html/loading/loading.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('./../think/public/static/css')); //将会在src/css下生成index.css
    gulp.src('./../html/loading/loading.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./../think/public/static/html'));
});

gulp.task('testLess', function () {
    gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
});

gulp.task('default', ['testLess']);

