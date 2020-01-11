module.exports = function() {
  $.gulp.task("libsJS:dev", () => {
    var libs = [
      "node_modules/svg4everybody/dist/svg4everybody.min.js",
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/wow.js/dist/wow.min.js"
    ];
    return $.gulp
      .src(libs)
      .pipe($.gp.concat("libs.min.js"))
      .pipe($.gulpWebpack($.webpackConfig, $.webpack))
      .pipe($.gulp.dest("./build/static/js/"))
      .pipe(
        $.browserSync.reload({
          stream: true
        })
      );
  });

  $.gulp.task("libsJS:build", () => {
    var libs = [
      "node_modules/svg4everybody/dist/svg4everybody.min.js",
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/wow.js/dist/wow.min.js"
    ];
    return $.gulp
      .src(libs)
      .pipe($.gp.concat("libs.min.js"))
      .pipe($.gulpWebpack(webpackConfig, webpack))
      .pipe($.gulp.dest("./build/static/js/"));
  });

  $.gulp.task("js:copy", () => {
    return $.gulp
      .src(["./dev/static/js/*.js", "!./dev/static/js/libs.min.js"])
      .pipe($.gulp.dest("./build/static/js/"))
      .pipe($.gulpWebpack(webpackConfig, webpack)) //del
      .pipe(
        $.browserSync.reload({
          stream: true
        })
      );
  });
};
