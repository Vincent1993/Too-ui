const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const postcss = require('gulp-postcss');

// compile component css
gulp.task('compile', () =>
  gulp
    .src(['../lib'])
    .pipe(
      sass({
        paths: [path.resolve(__dirname, 'node_modules')]
      })
    )
    .pipe(postcss())
    .pipe(csso())
    .pipe(gulp.dest(file => file.base.replace('.scss', '.css')))
);
