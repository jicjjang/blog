<template>
  <nuxt />
</template>

<script>
  export default {
    name: "defaultLayout",
    head () {
      return {
        title: 'June',
        meta: [
          {hid: 'og:title', name: 'og:title', content: 'June'},
          {hid: 'og:url', name: 'og:url', content: 'https://jicjjang.github.io/blog'},
          {hid: 'og:site_name', name: 'og:site_name', content: 'June'},
          {hid: 'og:description', name: 'og:description', content: 'June\'s blog'},
          {hid: 'og:image', name: 'og:image', content: 'https://jicjjang.github.io/blog/image/mine.jpg'},
          {hid: 'twitter:description', name: 'twitter:description', content: 'June\'s blog'},
          {hid: 'twitter:title', name: 'twitter:title', content: 'June'},
          {hid: 'twitter:url', name: 'twitter:url', content: 'https://jicjjang.github.io/blog'},
          {hid: 'twitter:site', name: 'twitter:site', content: 'https://jicjjang.github.io/blog'},
          {hid: 'twitter:domain', name: 'twitter:domain', content: 'https://jicjjang.github.io/blog'},
          {hid: 'twitter:image', name: 'twitter:image', content: 'https://jicjjang.github.io/blog/image/mine.jpg'},
        ]
      }
    }
  }
</script>
