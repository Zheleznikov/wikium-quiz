'use strict'
const { src, dest } = require('gulp');
const $ = require('gulp-load-plugins')();
const include = require('gulp-file-include');
// const htmlBase64 = require('gulp-inline-image-html');
// const inlineImages = require('gulp-inline-images');
const isProd = process.env.NODE_ENV === 'production';

module.exports = () => src('src/index.html')
    .pipe(include())
    // .pipe($.if(isProd, htmlBase64('build')))
    // .pipe(inlineImages({ attribute: 'data-src', selector: 'img[data-src]' }))
    .pipe($.if(isProd, $.htmlmin({ collapseWhitespace: true })))
    .pipe(dest('build'));
