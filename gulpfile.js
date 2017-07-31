'use strict';

var gulp = require('gulp');
var liferayThemeTasks = require('liferay-theme-tasks');
var runSequence = require('run-sequence').use(gulp);
var svgSprite = require("gulp-svg-sprites");

liferayThemeTasks.registerTasks({
	gulp: gulp
});

gulp.task('build:svgSprite', function () {
    return gulp.src('src/images/icons/*.svg')
        .pipe(svgSprite({
            preview: false,
            svg: {
                sprite: "theme-icons.svg"
            }
        }))
        .pipe(gulp.dest("src/images/"));
});

liferayThemeTasks.registerTasks({
	gulp: gulp,
	hookFn: function(gulp) {
		gulp.hook('before:build:base', function(done) {
			runSequence(
				'build:svgSprite'
			)
		});
	}
});