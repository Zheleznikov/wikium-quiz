"use strict";
const $ = require('gulp-load-plugins')();

const { src, dest } = require("gulp");
module.exports = () =>
  src("src/audio/**/*.*")
    .pipe($.newer("build/images"))
    .pipe(dest("build/audio"));
