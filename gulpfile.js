var gulp              = require('gulp');
var concat            = require('gulp-concat');
var minifycss         = require('gulp-minify-css')
var removeSourcemaps  = require('gulp-remove-sourcemaps');
var rename            = require("gulp-rename");
var sourcemap         = require('gulp-sourcemaps');
var sass              = require('gulp-sass');
var uglify            = require('gulp-uglify');
sass.compiler         = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./scss/style.scss')
    .pipe(sourcemap.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('./css'));
});

gulp.task('cssrename', function () {
  return gulp.src('./css/style.css')
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('build', gulp.series([
  'sass'
]));
