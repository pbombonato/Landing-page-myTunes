const gulp = require('gulp'),
      htmlmin = require('gulp-htmlmin'),
      babel = require('gulp-babel'),
      uglify = require('gulp-uglify'),
      uglifycss = require('gulp-uglifycss'),
      rename = require('gulp-rename')

function appHTML() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('docs'))
}

function appCSS() {
    return gulp.src('src/**/*.css')
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('docs/assets/css')) 
}

function appJS() {
    return gulp.src('src/**/*.js')
        .pipe(babel({ comments: false, presets: ['@babel/preset-env'] }))
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('docs/assets/js'))
}

function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('docs/assets/imgs'))
}

gulp.task('appHTML', appHTML) 
gulp.task('appCSS', appCSS) 
gulp.task('appJS', appJS) 
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}

