module.exports = function() {
  $.gulp.task("img:dev", () => {
    return $.gulp
      .src("./dev/static/img/**/*.{png,jpg,gif}")
      .pipe($.gulp.dest("./build/static/img/"));
  });

  $.gulp.task("img:build", () => {
    return $.gulp
      .src("./dev/static/img/**/*.{png,jpg,gif}")
      .pipe($.gp.tinypng("B1QrfS0SWhmttdg0g4mz0tJ6SYw3dphx"))
      .pipe($.gulp.dest("./build/static/img/"));
  });

  $.gulp.task("svg:copy", () => {
    return $.gulp
      .src("./dev/static/img/general/*.svg")
      .pipe($.gulp.dest("./build/static/img/general/"));
  });
};
