<template>
  <nuxt />
</template>

<script>
  export default {
    name: "resumeLayout",
    head () {
      return {
        title: 'June\'s resume',
        meta: [
          {hid: 'og:title', name: 'og:title', content: 'June\'s resume'},
          {hid: 'og:url', name: 'og:url', content: `https://jicjjang.github.io/blog/resume`},
          {hid: 'og:site_name', name: 'og:site_name', content: 'June'},
          {hid: 'og:description', name: 'og:description', content: 'June\'s resume'},
          {hid: 'og:image', name: 'og:image', content: 'https://jicjjang.github.io/blog/image/mine.jpg'},
          {hid: 'twitter:description', name: 'twitter:description', content: 'June\'s resume'},
          {hid: 'twitter:title', name: 'twitter:title', content: 'June\'s resume'},
          {hid: 'twitter:url', name: 'twitter:url', content: `https://jicjjang.github.io/blog/resume`},
          {hid: 'twitter:image', name: 'twitter:image', content: 'https://jicjjang.github.io/blog/image/mine.jpg'},
        ],
        script: [
          { type: 'text/javascript', src: '/blog/script/google-analytics.js' },
          { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
          { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js' },
          { type: 'text/javascript', src: '/blog/script/resume/main.js' },
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
          { rel: 'stylesheet', href: '/blog/css/resume/styles-2.css' },
        ]
      }
    },
  }
</script>

<style scoped>

</style>
