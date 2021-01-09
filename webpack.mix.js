const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
const CompressionPlugin = require('compression-webpack-plugin')

mix.webpackConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/assets/js'),
    },
  },
  plugins: [
    new CompressionPlugin(),
  ],
})

mix.options({
  terser: {
      extractComments: false,
  }
})

/*
 |--------------------------------------------------------------------------
 | Admin
 |--------------------------------------------------------------------------
 */

mix
  .js('resources/assets/js/app.js', 'public/assets/js/')
  .sass('resources/assets/sass/crater.scss', 'public/assets/css/')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')],
  })

if (!mix.inProduction()) {
  mix
    .webpackConfig({
      devtool: 'source-map',
    })
    .sourceMaps()
} else {
  mix.version()
}
