# Boilerplate

## Instalaciones únicas

Este comando sirve para instalar gulp de forma global en el equipo, tenerlo disponible en todos los proyectos y solo se ejecuta una vez:

	npm install --global gulp-cli

## Instalación por proyecto

Estos comandos se ejecutan en cada proyecto donde queramos incluir gulp:
	
	npm init
	npm install --save-dev gulp
	npm install --save-dev @babel/core @babel/register @babel/preset-env
	

## Archivos Base

El proyecto debe contener:

* Un archivo ***.babelrc*** donde pondremos la configuración de babel
* Un archivo ***gulpfile.babel.js*** donde pondremos la configuración de gulp (en el caso de usar babel 6 el archivo deberá llamarse gulpfile.js)

## Transpilar JavaScript
  
Este módulo se usará para convertir el código a es5:
  
	npm install --save-dev gulp-babel
	
Este módulo se usará para minificar u ofuscar el código:
  
	npm install --save-dev gulp-terser
  
Este módulo se usará para unir varios archivos js en uno solo:

	npm install --save-dev gulp-concat

## HTML

Instalamos el módulo para trabajar con html:

	npm install --save gulp-htmlmin

## CSS

Instalamos el módulo postcsss

	npm install --save-dev postcss

Instalamos los módulos para trabajar con css y gulp.

	npm install --save-dev gulp-postcss cssnano autoprefixer

## PUG

Instalamos gulp-pug con el siguiente comando.

	npm install --save-dev gulp-pug

## SASS

Instalamos gulp-sass con el siguiente comando.

	npm install gulp-sass --save-dev

## Purge CSS

Instalamos el módulo para purgar css

	npm install --save-dev gulp-purgecss

## Cache Bust

Instalamos el módulo para limpir la cache

	npm install --save-dev gulp-cache-bust

## Imagemin

Instalamos el módulo para comprimir imagenes

	npm install --save-dev gulp-imagemin@7.1.0

## Browser Sync

Instalamos el módulo para recargar el navegador y sus cambios. 

	npm install --save-dev browser-sync

## Plumber

Instalamos el módulo para avisar de los errores

	npm install --save-dev gulp-plumber