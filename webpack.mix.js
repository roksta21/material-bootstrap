const { mix } = require('laravel-mix');

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

mix
    .js('assets/js/material_bootstrap.js', 'dist')

    .js('samples/app.js', 'samples/compiled.js')

    .sass('assets/scss/material_bootstrap.scss', 'dist');
