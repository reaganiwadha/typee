const gulp     = require("gulp");
const sass     = require("gulp-sass");
const sassLint = require("gulp-sass-lint");

gulp.task("build-css", function(){
    return gulp.src("sass/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("./css/"));
});

gulp.task("lint-scss", function(){
    return gulp.src("scss/*.scss")
      .pipe(sassLint())
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError());
});

gulp.task("build", ["lint-scss", "build-css"])

gulp.task("watch", function(){
    gulp.watch("scss/*.scss", ["lint-scss", "build-css"]);
});
