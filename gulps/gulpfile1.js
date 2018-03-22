var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    htmlmin = require('gulp-htmlmin'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');
//http://www.ydcss.com/archives/20
gulp.task('connect', function() {
  connect.server({
    root: 'src',
    port: 8000,
    livereload: true
  });
});

gulp.task('Loading', function () {
    var options = {
        removeComments: true,
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('./../html/loading/loading.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('./../think/public/static/css')).pipe(connect.reload()); //将会在src/css下生成index.css
    gulp.src('./../html/loading/loading.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./../think/public/static/html')).pipe(connect.reload());
});
gulp.task('watch', function () {
  gulp.watch(['./../html/loading/loading.less,./../html/loading/loading.html'], ['Loading']);
});
gulp.task('Loadinginit',['watch','connect']);

gulp.task('testLess', function () {
    gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
});

gulp.task('default', ['testLess']);

