// HTML
import htmlmin from 'gulp-htmlmin'

// CSS
import postcss from 'gulp-postcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'

//JavaScript
import gulp from 'gulp'
import babel from 'gulp-babel'
import terser from 'gulp-terser'

//PUG
import pug from 'gulp-pug'

// SASS
/* import sass from 'gulp-sass' */
const sass = require('gulp-sass')(require('sass'))

//Common
import concat from 'gulp-concat'

// Clean CSS
import clean from 'gulp-purgecss'

// Cache Bust
import cacheBust from 'gulp-cache-bust'

// Optimizar imágenes
import imagemin from 'gulp-imagemin'

// Browser Sync
import { init as server, stream, reload } from 'browser-sync'

// Plumber
var plumber = require('gulp-plumber')

// Minificar CSS para Producción
const production = true

// Pluging CSS
const cssPlugins = [
	cssnano(),
	autoprefixer()
]


gulp.task('html-min', () => {
	return gulp
		.src('./dev/*.html')
		.pipe(plumber())
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('./public'))
})

gulp.task('styles', () => {
	return gulp
		.src('./dev/css/styles.css')
		.pipe(plumber())
		.pipe(concat('styles-min.css'))
		.pipe(postcss(cssPlugins))
		.pipe(gulp.dest('./public/css'))
		.pipe(stream())
})

gulp.task('babel', () => {
	return gulp
		.src('./dev/js/*.js')
		.pipe(plumber())
		.pipe(concat('scripts-min.js'))
		.pipe(babel())
		.pipe(terser())
		.pipe(gulp.dest('./public/js'))
})

gulp.task('views', () => {
	return gulp
		.src('./dev/views/pages/*.pug')
		.pipe(plumber())
		.pipe(pug({
			pretty: production ? false : true
		}))
		.pipe(cacheBust({
			type: 'timestamp'
		}))
		.pipe(gulp.dest('./public'))
})

gulp.task('sass', () => {
	return gulp
		.src('./dev/scss/styles.scss')
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(concat('styles-min.css'))
		.pipe(postcss(cssPlugins))
		.pipe(gulp.dest('./public/css'))
		.pipe(stream())
})

gulp.task('clean', () => {
	return gulp
		.src('./public/css/styles-min.css')
		.pipe(plumber())
		.pipe(clean({
			content: ['./public/*.html']
		}))
		.pipe(gulp.dest('./public/css'))
})

gulp.task('imgmin', () => {
	return gulp
		.src('./dev/assets/images/**/*')
		.pipe(plumber())
		.pipe(imagemin([
			imagemin.gifsicle({ interlaced: true }),
			imagemin.mozjpeg({ quality: 30, progressive: true }),
			imagemin.optipng({ optimizationLevel: 1 })
		]))
		.pipe(gulp.dest('./public/assets/images'))
})

gulp.task('default', () => {
	server({
		server: './public'
	})
	// gulp.watch('./dev/*.html', gulp.series('html-min')).on('change', reload)
	// gulp.watch('./dev/css/styles.css', gulp.series('styles'))
	gulp.watch('./dev/views/**/*.pug', gulp.series('views')).on('change', reload)
	gulp.watch('./dev/scss/**/*.scss', gulp.series('sass'))
	gulp.watch('./dev/js/*.js', gulp.series('babel')).on('change', reload)
})