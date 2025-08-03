
import { src, dest, series, parallel, watch } from "gulp";
import * as dartSass from "sass"; // Updated to namespace import
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import cssnano from "gulp-cssnano";
import autoprefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import sourcemaps from "gulp-sourcemaps";
// import clean from "gulp-clean"; // Uncomment if you install and use it
import kit from "gulp-kit";
import browserSync from "browser-sync";
const browserSyncc = browserSync.create();
const reload = browserSync.reload;
import imagemin from "gulp-imagemin";
// Import imagemin plugins separately since they aren't named exports of gulp-imagemin
import imageminGifsicle from "imagemin-gifsicle";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminOptipng from "imagemin-optipng";
// Optionally add svgo if needed: import imageminSvgo from "imagemin-svgo";

const paths = {
  html: "./html/*.kit",
  sass: "./src/sass/*.scss",
  js: "./src/js/*.js",
  img: "./src/img/*",
  dist: "./dist",
  sassDest: "./dist/css",
  jsDest: "./dist/js",
  imgDest: "./dist/img",
};

function sassCompiler(done) {
  src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write())
    .pipe(dest(paths.sassDest));
  done();
}

function javaScript(done) {
  src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write())
    .pipe(dest(paths.jsDest));
  done();
}

function convertImages(done) {
  src(paths.img, { encoding: false })
    .pipe(
      imagemin([
        imageminGifsicle({ interlaced: true }),
        imageminMozjpeg({ quality: 75, progressive: true }),
        imageminOptipng({ optimizationLevel: 5 }),
        // Add imageminSvgo here if you need SVGO: imageminSvgo({ plugins: [{ removeViewBox: false }] })
      ])
    )
    .pipe(dest(paths.imgDest));
  done();
}

function handleKits(done) {
  src(paths.html)
    .pipe(kit())
    .pipe(dest("./"));
  done();
}

// Uncomment and install gulp-clean if you want to use this
// function cleanStuff(done) {
//   src(paths.dist, { read: false })
//     .pipe(clean());
//   done();
// }

function startBrowserSync(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    },
  });
  done();
}

function watchForChanges(done) {
    watch("./*.html").on("change", reload);
    watch([paths.html, paths.sass, paths.js], parallel(handleKits, sassCompiler, javaScript)).on(
      "change",
      reload
    );
    watch(paths.img, convertImages).on("change", reload);
    done();
  }

const mainFunctions = parallel(handleKits, sassCompiler, javaScript, convertImages);


  export default series(mainFunctions, startBrowserSync, watchForChanges);