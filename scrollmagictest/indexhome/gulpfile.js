var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');

gulp.task('default', function(){
    
});

gulp.task('testLess', function(){
    gulp.src([
        'src/less/*.less'
    ])
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'Android >= 4.0'],
        cascade: true, //是否美化属性值 默认：true 像这样：
        //-webkit-transform: rotate(45deg);
        //        transform: rotate(45deg);
        remove:true //是否去掉不必要的前缀 默认：true 
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('jsmin', function(){
    gulp.src('src/js/*.js')
        .pipe(uglify({
            mangle: true, //类型: boolean,默认:true,是否修改变量名
            compress: true, //类型: boolean,默认:true 是否完全压缩
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('testConcat', function(){
    gulp.src('dist/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('public/js'));//合并代码块
});

gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('src/html/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/html'));
});

gulp.task('testWatch', function(){
    gulp.watch('src/less/*.less', ['testLess']);
});

gulp.task('testImagemin', function(){
    gulp.src('src/imgs/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});





