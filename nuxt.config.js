
const webpack = require('webpack')
const md = require('markdown-it')
const hljs = require('highlight.js')

const script = []

if ('gh-pages' === process.env.NODE_ENV) {
  script.push({ innerHTML: "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga')ga('create', 'UA-106571171-1', 'auto')ga('send', 'pageview')" })
}

module.exports = {
  head: {
    title: 'Nil Gradisnik',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nilgradisnik.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script
  },
  modules: [
    '@nuxtjs/markdownit'
  ],
  css: [
    '@/assets/normalize.css',
    '@/assets/hljs.css'
  ],
  loading: { color: '#3B8070' },
  build: {
    publicPath: '/static/',
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
            import: [
              '~nib/lib/nib/index.styl',
              '~assets/mixins.styl',
              '~assets/common.styl'
            ]
          },
          context: '/'
        }
      })
    ]
  },
  markdownit: {
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value
        } catch (__) {}
      }
      return ''
    }
  }
}
