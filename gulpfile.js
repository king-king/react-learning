const gulp = require('gulp');
const path=require('path');

gulp.task('watch', function () {
    gulp.watch([
        'src/**/*'
    ], function (e) {
        //any changed detected, call build task
        console.log(path.dirname(e.path));
    });
});