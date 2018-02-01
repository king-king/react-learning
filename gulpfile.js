const gulp = require('gulp');
const path = require('path');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

let src = 'test/**';
let delayId;

function compile() {
    console.log('compile ...');
    return gulp.src(src + '/*.jsx')
        .pipe(babel({
            presets: ['react',"stage-2"]
        }))
        .on('error', (e) => {
            console.log(e);
        })
        .pipe(rename(function (p) {
            p.basename = "main";
            p.extname = ".js";
        }))
        .pipe(gulp.dest(src));
}

gulp.task('default', function () {
    gulp.watch([
        'test/**/*.jsx'
    ], function (e) {
        //any changed detected, call build task
        src = path.dirname(e.path);
        clearTimeout(delayId);
        delayId = setTimeout(compile, 3000);
    });
});

gulp.task('c', function () {
    return compile();
});