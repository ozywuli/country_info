var gulp = require('gulp');
var rename = require('gulp-rename');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var cmq = require('gulp-combine-media-queries');

var imagemin = require('gulp-imagemin');

var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var babelify = require('babelify');
var watchify = require('watchify');
var notify = require('gulp-notify');


function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}



function compileHTML() {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./build/'));
}
function compileCSS() {
  return gulp.src('./src/assets/scss/main.scss')
    .pipe(plumber({
        errorHandler: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe( autoprefixer('last 2 version') )
    .pipe( cmq({
        log: true
    }))
    .pipe(gulp.dest('./build/assets/css'))
    .pipe( minifycss() )
    .pipe( rename('main.min.css'))
    .pipe( gulp.dest('./build/assets/css') )
}
function compileData() {
  return gulp.src('./src/assets/data/*.json')
  .pipe( gulp.dest('./build/assets/data') );
}
function compileImg() {
  return gulp.src('./src/assets/img/*')
  .pipe( imagemin() )
  .pipe( gulp.dest('./build/assets/img') );
}
function buildScript(file, watch) {
  
  var props = {
    entries: ['./src/assets/js/' + file],
    debug : true,
    transform:  [babelify, reactify]
  };

  // watchify() if watch requested, otherwise run browserify() once 
  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulp.dest('./build/assets/js'));
  }

  // listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  // run it once the first time buildScript is called
  return rebundle();
}




function watchHTML(error) {
  gulp.watch(['./src/*.html'], ['html']);
}
function watchCSS(error) {
  gulp.watch(['./src/assets/scss/*.scss', './src/assets/scss/**/*.scss'], ['html']);
}
function watchData(error) {
  gulp.watch(['./src/assets/data/*.json'], ['html']);
}
function watchImg(error) {
  gulp.watch(['./src/assets/img/*'], ['html']);
}



// run once
gulp.task('html', ['css', 'scripts'], function() {
  return compileHTML();
});

gulp.task('css', function() {
  return compileCSS();
})

gulp.task('data', function() {
  return compileData();
})

gulp.task('img', function() {
  return compileImg();
})

gulp.task('scripts', function() {
  return buildScript('app.js', false);
});







// run 'scripts' task first, then watch for future changes
function watchTask(error) {
  watchHTML();
  watchCSS();
  watchData();
  watchImg();
  buildScript('app.js', true);
}


gulp.task('watch', ['html', 'css', 'data', 'img', 'scripts'], watchTask);
gulp.task('default', ['watch'])
