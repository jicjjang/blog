const contentsMap = require('./contentsMap.js');
var pages = [];

for (var i=1; i<100; i++) {
  pages.push('page/' + i);
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This blog has been used since 2018 using Nuxtjs with Vuejs' },
      { hid: 'author', name: 'author', content: 'Junseok, Choi <jicjjang12@gmail.com>' },
      { hid: 'og:type', name: 'og:type', content: 'blog' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@jicjjang' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'June' },
      { hid: 'twitter:domain', name: 'twitter:domain', content: 'https://jicjjang.github.io' },
    ],
    script: [
      { type: 'text/javascript', src: '/blog/static/script/google-analytics.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/blog/static/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inconsolata|Lora|Space+Mono:700' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css' },
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css' },
      { rel: 'stylesheet', href: '/blog/static/css/main.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: (contentsMap.post.map(v => v.path)).concat(contentsMap.category.map(v => 'category/'+v.title.toLowerCase())).concat(pages)
  },
  router: {
    mode: 'history',
    base: '/blog/'
  },
  modules: [
    '@nuxtjs/markdownit'
  ]
};
