var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),//编译less后压缩css
    sourcemaps = require('gulp-sourcemaps'); //当less有各种引入关系时，编译后不容易找到对应less文件，所以需要生成sourcemap文件，方便修改
    notify = require('gulp-notify'),//异常处理
    plumber = require('gulp-plumber');//异常处理

gulp.task('default', function(){

});

gulp.task('testLess', function(){
  //除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
   gulp.src(['src/less/*.less', '!src/less/**/{reset,test}.less'])
   .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
   .pipe(less())
   .pipe(cssmin({compatibility: 'ie7'})) //兼容IE7及以下需设置compatibility属性
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('src/css'))
});

gulp.task('testWatch', function(){
   gulp.watch('src/**/*.less', ['testLess']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});