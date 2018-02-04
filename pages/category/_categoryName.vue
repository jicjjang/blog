<template>
  <app-home :categoryName="categoryName" />
</template>

<script>
  import Home from '~/pages'

  export default {
    name: 'category__categoryName',
    layout: 'category',
    head () {
      return {
        title: 'June',
        meta: [
          {hid: 'og:title', name: 'og:title', content: this.categoryName || 'June'},
          {hid: 'og:url', name: 'og:url', content: `https://jicjjang.github.io/blog/${this.categoryName ? 'category/' + this.categoryName : ''}`},
          {hid: 'og:site_name', name: 'og:site_name', content: 'June'},
          {hid: 'og:description', name: 'og:description', content: 'June\'s blog'},
          {hid: 'og:image', name: 'og:image', content: this.categoryName ?
              `https://jicjjang.github.io/blog/image/${this.categoryName}/${this.categoryName}.jpg` :
              'https://jicjjang.github.io/blog/image/mine.jpg'},
          {hid: 'twitter:description', name: 'twitter:description', content: 'June\'s blog'},
          {hid: 'twitter:title', name: 'twitter:title', content: this.categoryName || 'June'},
          {hid: 'twitter:url', name: 'twitter:url', content: `https://jicjjang.github.io/blog/${this.categoryName ? 'category/' + this.categoryName : ''}`},
          {hid: 'twitter:image', name: 'twitter:image', content: this.categoryName ?
              `https://jicjjang.github.io/blog/image/${this.categoryName}/${this.categoryName}.jpg` :
              'https://jicjjang.github.io/blog/image/mine.jpg'},
        ]
      }
    },
    components: {
      'appHome': Home
    },
    data () {
      return {
        categoryName: ''
      }
    },
    created () {
      this.categoryName = this.$route.params.categoryName || ''
    }
  }
</script>

<style>

</style>
