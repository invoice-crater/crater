const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')

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

mix
  .js('resources/assets/js/app.js', 'public/assets/js/')
  .vue({
    version: 2,
    extractVueStyles: true,
  })
  .sass('resources/assets/sass/crater.scss', 'public/assets/css/')
  .options({
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
