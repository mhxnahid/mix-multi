const mix = require('laravel-mix');
require('dotenv').config()

mix.js('resources/js/office/office.js', 'public/js/office')
mix.js('resources/js/home/home.js', 'public/js/home')

mix.postCss('resources/css/app.css', 'public/css', [
        //
    ]);

// mix.browserSync({
//     proxy: process.env.APP_URL,
//     files: [
//         'resources/views/**/*.php',
//         'public/js/**/*.js',
//         'public/css/**/*.css'
//     ]
// });