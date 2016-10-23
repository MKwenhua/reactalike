var gulp = require('gulp');
var fs = require("fs");
var browserify = require('browserify');
var babelify = require("babelify");
var jsxify = require('jsx-transform').browserifyTransform;
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var sync = require('run-sequence');
var gutil = require('gulp-util');
var gulp = require('gulp');
var stripCssComments = require('gulp-strip-css-comments');



gulp.task('css', function() {
  return gulp.src([
      'css/bootstrap/css/bootstrap.min.css',
      'css/body.css',
      'css/lists.css',
      'css/loader.css',
      'css/graphnav.css',
      'css/headline.css',
      'css/animations.css',
      'css/ani_elements.css',
      'css/nav.css',
      'css/details.css',
      'css/drag.css',
      'css/dropzone.css',
      'css/buttons.css',
      'css/media_queries.css'
    ])
    .pipe(stripCssComments())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('dist'))
});

gulp.task('browserify', function() {
  return browserify('./js/index.js', {
      debug: false
    })
    .transform(jsxify, {
      factory: "EX.node",
      arrayChildren: false
    })
    .transform(babelify, {
      presets: ["es2015"]
    })
    .bundle()
    .on('error', function(err) {
      console.log(`Error : ${ err.message }`);
    })
    .pipe(fs.createWriteStream('./dist/bundle.js'));
});
gulp.task('scripts', function() {
  return gulp.src([
      'js/vendor/canvasjs.min.js',
      'dist/bundle.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist'));
});
gulp.task('default', function(done) {

  sync('browserify', 'css', 'scripts', done);
});