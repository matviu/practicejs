var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.',
      index: 'index.html'
    },
  })
})

gulp.task('less', function() {
  return gulp.src('./less/styles.less')
    .pipe(less().on('error', console.log))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', ['browserSync', 'less'], function() {
  gulp.watch('*.css', browserSync.reload);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('*.js', browserSync.reload);
})
