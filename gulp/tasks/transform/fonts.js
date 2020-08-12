'use strict'
const { src, dest } = require('gulp');


module.exports = () => src('src/fonts/*.*').pipe(dest('build/fonts'));