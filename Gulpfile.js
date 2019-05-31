var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

function css() {
    return (
        gulp
            .src('./sass/style.scss')
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .on("error", sass.logError)
            .pipe(gulp.dest("."))
    );
}

function watch() {
    gulp.watch('sass/**/*.scss', css)
}

exports.default = css;
exports.watch = watch;