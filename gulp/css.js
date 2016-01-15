var gulp = require('gulp');
var stylus = require('gulp-stylus')

gulp.task('css', function(){
  gulp.src('css/**/*.styl')
    .pipe(stylus())
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets'))

})

gulp.task('watch:css', function(){
  gulp.watch('css/**/*.styl', ['css'])

})
