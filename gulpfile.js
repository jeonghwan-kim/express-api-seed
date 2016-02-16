/**
 * Created by Chris on 2016. 2. 15..
 */

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    mocha = require('gulp-mocha');


gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('unitTest', function () {
  gulp.src(['./api/**/*.spec.js'])
      .pipe(mocha({
        reporter: 'spec',
        clearRequireCache: true,
        ignoreLeaks: true
      }));
});

gulp.task('watch', function () {
  gulp.watch(['./api/**/*.js'], ['unitTest']);
});

gulp.task('test', ['unitTest', 'watch']);

gulp.task('default', [
  'develop'
]);
