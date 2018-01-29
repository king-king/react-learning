const gulp = require('gulp');
const path = require('path');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

let src = 'test/**/*.jsx';

gulp.task('default', function () {
    gulp.watch([
        'test/**/*.jsx'
    ], function (e) {
        //any changed detected, call build task
        src = path.dirname(e.path);
        console.log(src);
        gulp.start('compile');
    });
});

gulp.task('compile', function () {
    return gulp.src(src + '/*.jsx')
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(rename(function (p) {
            p.basename = "main";
            p.extname = ".js"
        }))
        .pipe(gulp.dest(src));
});