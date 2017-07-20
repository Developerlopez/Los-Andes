let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copy('node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.css');
mix.copy('node_modules/font-awesome/css/font-awesome.css', 'public/css/font-awesome.css');

mix.copyDirectory('node_modules/bootstrap/dist/fonts', 'public/fonts');
mix.copyDirectory('node_modules/font-awesome/fonts', 'public/fonts');

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/style.scss', 'public/css');
