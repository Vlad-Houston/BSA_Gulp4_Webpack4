module.exports = function() {
  $.gulp.task("libsJS:dev", () => {
    return $.gulp
      .src("./dev/static/js/main.js")
      .pipe($.gulpWebpack($.webpackConfig, $.webpack))
      .pipe($.gulp.dest("./build/static/js/"))
      .pipe(
        $.browserSync.reload({
          stream: true
        })
      );
  });

  $.gulp.task("libsJS:build", () => {
    return $.gulp
      .src("./dev/static/js/main.js")
      .pipe($.gulpWebpack($.webpackConfig, $.webpack))
      .pipe($.gulp.dest("./build/static/js/"));
  });

  $.gulp.task("js:copy", () => {
    return $.gulp
      .src(["./dev/static/js/*.js", "!./dev/static/js/libs.min.js"])
      .pipe($.gulp.dest("./build/static/js/"))
      .pipe(
        $.browserSync.reload({
          stream: true
        })
      );
  });
};
