var gulp = require('gulp');

var truncate = require('./index.js');

var paths = ["examples/samples/*.js"];


gulp.task('truncate',function(){
	return gulp
			.src(paths)
			.pipe(truncate())
			.pipe(gulp.dest('examples/samples/dist'))
})

gulp.task('default',['truncate'])