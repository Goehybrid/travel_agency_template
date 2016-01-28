var gulp = require("gulp");
var less = require("gulp-less");
var browserSync = require('browser-sync');

// compile .less files
gulp.task('less',function(){
	return gulp.src('less/*.less')
		.pipe(less())
		.pipe(gulp.dest('css'))
});

// browser synchronization
gulp.task('browserSync',function(){
	browserSync({
		server:{
			baseDir:"."
		}
	})
});

// watch file changes
gulp.task('watch',['browserSync','less'],function(){
	// compile .less files on changes
	gulp.watch('less/*.less',['less'])
	// reload page when .html, .css, or .js files change
	gulp.watch('*.html',browserSync.reload);
	gulp.watch('css/*.css',browserSync.reload);
	gulp.watch('js/*.js',browserSync.reload);
});