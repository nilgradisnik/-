
const webpack = require('webpack')

module.exports = {
  router: {
    base: 'gh-pages' === process.env.NODE_ENV ? '/home/' : '/'
  },
  modules: [
    '@nuxtjs/markdownit'
  ],
  css: [
    '@/assets/normalize.css'
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: 'home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nilgradisnik.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/static/',
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            preferPathResolver: 'webpack',
            import: ['~nib/lib/nib/index.styl', '~assets/mixins.styl', '~assets/common.styl']
          },
          context: '/'
        }
      })
    ]
  }
}
