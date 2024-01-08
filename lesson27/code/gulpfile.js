// const gulp = require('gulp');
//
// gulp.task('sayHello', async () => {
//     console.log('Hello')
// })
//
// gulp.task('default', async () => {
//     console.log('hello from default')
// })
/****************************************
 * example
 ****************************************/
const { parallel, series, src, dest, watch } = require("gulp");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const sass = require("sass");
const gulpSass = require("gulp-sass");
const scss = gulpSass(sass);
const clean = require("gulp-clean");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const ssi = require("gulp-ssi");

const APP_PATH = "./app/";
const BID_PATH = "./dist/";
const SCRIPT_PATH = `${APP_PATH}scripts/`;
const STYLES_PATH = `${APP_PATH}styles/`;
const PARTS_PATH = `${APP_PATH}parts/`;

function cleanDist() {
  return src(`${BID_PATH}**/*`, { force: true }).pipe(clean());
}

function html() {
  return src(`${APP_PATH}*.html`).pipe(ssi()).pipe(dest(`${BID_PATH}`));
}
function styles() {
  return src(`${STYLES_PATH}*.scss`)
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest(`${BID_PATH}css`));
}

function scripts() {
  return src([`${SCRIPT_PATH}utils/*.js`, `${SCRIPT_PATH}*.js`])
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      }),
    )
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest(`${BID_PATH}js`));
}

function watcher() {
  watch(`${SCRIPT_PATH}*.js`, scripts);
  watch(`${STYLES_PATH}*.scss`, styles);
  watch(`${PARTS_PATH}*.html`, html);
  watch(`${APP_PATH}*.html`, html);
}

exports.build = series(cleanDist, html, styles, scripts);
exports.default = series(html, styles, scripts, parallel(watcher));
