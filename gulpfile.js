var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();



var path = {html:['index.html']};


 

gulp.task('sass', function(){
	return gulp.src('./sass/*.scss')
	.pipe(sass() .on('error', sass.logError))
	.pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
	.pipe(gulp.dest("css"))
	.pipe(browserSync.stream());
});

gulp.task('html', function(){
	gulp.src(path.html)
	.pipe(reload({stream:true}));
});


gulp.task('watch',['sass'], function(){
	browserSync.init({
		server: "./"
	});
  gulp.watch('./sass/*.scss',['sass']);
  gulp.watch('*.html').on('change', browserSync.reload);
  

});

gulp.task('default', ['watch']);