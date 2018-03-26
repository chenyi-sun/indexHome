var gulp = require('gulp'),
    connect = require('gulp-connect'), 
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),//编译less后压缩css
    sourcemaps = require('gulp-sourcemaps'); //当less有各种引入关系时，编译后不容易找到对应less文件，所以需要生成sourcemap文件，方便修改
    notify = require('gulp-notify'),//异常处理
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),//异常处理
    concat = require('gulp-concat'),//使用gulp-concat合并javascript文件，减少网络请求。
    uglify = require('gulp-uglify'),//压缩多个js文件
    htmlmin = require('gulp-htmlmin'), //压缩HTML
    browserSync = require('browser-sync').create();//Browsersync
    var reload      = browserSync.reload;//Browsersync
    var del = require('del');
    var rev = require('gulp-rev'); //对文件名加MD5后缀
    var revCollector = require('gulp-rev-collector');
gulp.task('default', function(){

});

gulp.task('testLess', function(){
  //除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
   gulp.src(['src/less/*.less', '!src/less/**/{reset,test}.less'])
      .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
      .pipe(less())
      .pipe(cssmin({compatibility: 'ie7'})) //兼容IE7及以下需设置compatibility属性
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('src/css'));

  
});

gulp.task('movecss', function(){
   gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(rev())
        .pipe(gulp.dest('dist/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev')) 
        .pipe(reload({stream:true}));
});
gulp.task('testWatch', function(){
   gulp.watch('src/**/*.less', ['testLess']);
   gulp.watch('src/js/*.js',['jsmin']);
   gulp.watch('src/*.html', ['testHtmlmin']);

   browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('rev', function() {
  gulp.src(['./rev/*.json','src/**/*.html'])
    .pipe(revCollector()) //- 执行文件内css名的替换
    .pipe(gulp.dest('./dist')); //- 替换后的文件输出的目录
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
        minifyCSS: true//压缩页面CSSgulp-htmlminy
    };
    gulp.src('src/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'))
        .pipe(reload({stream:true}));
});

gulp.task('testConcat', function(){
    gulp.src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(reload({stream:true}));
});

gulp.task('jsmin', function () {
    gulp.src(['src/js/*.js', '!src/js/**/{test1,test2}.js'])
        .pipe(uglify({
           mangle: true,//mangle: true,//类型：Boolean 默认：true 是否修改变量名
           compress: true,
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(reload({stream:true}));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src/html"
        }
    });
});
gulp.task('clean', function (cb) {
  del([
    // 'dist/report.csv',
    // 这里我们使用一个通配模式来匹配 `mobile` 文件夹中的所有东西
    'src/imgs/**/*',
    // 我们不希望删掉这个文件，所以我们取反这个匹配模式
    '!dist/mobile/deploy.json'
  ], cb);
});