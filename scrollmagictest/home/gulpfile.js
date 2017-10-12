var gulp = require('gulp'),
    cssmin = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    htmlmin = require('gulp-htmlmin'),
    connect = require('gulp-connect'),
    amdOptimize = require('amd-optimize'),
    concatFile = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('testSass', function(){
    gulp.src([
        'all/css/*.scss'
    ])
    .pipe(sass())
    // .pipe(sourcemaps.write())
    // .pipe(autoprefixer({
    //     browsers: ['last 2 versions', 'Android >= 4.0'],
    //     cascade: true, //是否美化属性值 默认：true 像这样：
    //     //-webkit-transform: rotate(45deg);
    //     //        transform: rotate(45deg);
    //     remove:true //是否去掉不必要的前缀 默认：true 
    // }))
    .pipe(cssmin())
    .pipe(gulp.dest('css'));
});

gulp.task('html', function(){
  gulp.src('./*.html')
      .pipe(connect.reload());
});

gulp.task('testWatch', function(){
    gulp.watch('all/css/*.scss', ['testSass','html']);
    gulp.watch('all/html/*.html',['testHtmlmin','html']);
});

 gulp.task('connect',function(){
    connect.server({
        root:'./',  
        ip:'192.168.31.110',
        livereload:true
    })
})

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
    gulp.src('all/html/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./'));
});

gulp.task('js', function(){
    gulp.src(["all/js/**/*.js","all/js/*.js"])
        .pipe(amdOptimize('all/js/controlscroll',{
            configFile: 'all/js/app-config.js',
            findNestedDependencies: true,
            include: false
        }))
        .pipe(concatFile("common.js"))
        .pipe(gulp.dest("js/common"));
});

gulp.task('jsmin', function(){
    gulp.src('all/js/*.js')
        .pipe(uglify({
            mangle: true, //类型: boolean,默认:true,是否修改变量名
            compress: true, //类型: boolean,默认:true 是否完全压缩
        }))
        .pipe(gulp.dest('js'));
});

gulp.task('default', ['connect','testWatch']);

