var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    watch   = require('gulp-watch'),
    sass    = require('gulp-sass');

gulp.task('compile', function(){
    gulp.src('sass/**.scss')
    .pipe(watch('sass/**.scss'))
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('css'))
});

gulp.task('default', ['compile']);