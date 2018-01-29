const gulp = require('gulp');
const path = require('path');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

let src = 'test/**/*.jsx';

gulp.task('watch', function () {
    gulp.watch([
        'test/**/*.jsx'
    ], function (e) {
        //any changed detected, call build task
        src = path.dirname(e.path) + '/**/*.jsx'
        console.log(path.dirname(e.path));
    });
});

gulp.task('compile', function () {
    return gulp.src(src)
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(rename((p) => {
            p.basename = 'main';
            p.extname = '.js';
        }))
        .pipe(gulp.dest('test'))
});

gulp.task('default', function () {

});