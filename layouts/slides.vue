<template>
  <div class="reveal" style="position: absolute;">
    <nuxt />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "slidesLayout",
    head () {
      return {
        title: 'June',
        meta: [
          {hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: this.slide.title || 'yes'},
          {hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'},

          {hid: 'og:title', name: 'og:title', content: this.slide.title || 'June'},
          {hid: 'og:url', name: 'og:url', content: `https://jicjjang.github.io/blog/${this.slide.path}`},
          {hid: 'og:site_name', name: 'og:site_name', content: 'June'},
          {hid: 'og:description', name: 'og:description', content: this.slide.description || 'June\'s blog'},
          {hid: 'og:image', name: 'og:image', content: this.slide.image ?
              `https://jicjjang.github.io/blog/${this.slide.image}` :
              'https://jicjjang.github.io/blog/image/mine.jpg'},
          {hid: 'twitter:domain', name: 'twitter:domain', content: `https://jicjjang.github.io/blog/${this.slide.path}`},
          {hid: 'twitter:description', name: 'twitter:description', content: this.slide.description || 'June\'s blog'},
          {hid: 'twitter:title', name: 'twitter:title', content: this.slide.title || 'June'},
          {hid: 'twitter:url', name: 'twitter:url', content: `https://jicjjang.github.io/blog/${this.slide.path}`},
          {hid: 'twitter:image', name: 'twitter:image', content: this.slide.image ?
              `https://jicjjang.github.io/blog/${this.slide.image}` :
              'https://jicjjang.github.io/blog/image/mine.jpg'},
        ],
        script: [
          { type: 'text/javascript', src: '/blog/static/slides/js/reveal.js', async: false },
          { type: 'text/javascript', src: '/blog/static/slides/lib/js/head.min.js' },
        ],
        link: [
          { rel: 'stylesheet', href: '/blog/static/slides/css/reveal.css' },
          { rel: 'stylesheet', href: '/blog/static/slides/css/theme/black.css' },
          { rel: 'stylesheet', href: '/blog/static/slides/lib/css/zenburn.css' },
        ]
      }
    },
    data() {
      return {
        slide: {},
        index: 0,
        image: ''
      }
    },
    computed: {
      ...mapGetters([
        'baseUrl',
        'postList'
      ])
    },
    created() {
      this.slideName = this.$route.path.split('/slides/')[1] || '';

      for (let i in this.postList) {
        if (this.postList[i].path.split('slides/')[1] === this.slideName) {
          this.slide = this.postList[i];
          this.index = parseInt(i);
          break;
        }
      }
    },
    mounted () {
      setTimeout(() => {
        Reveal.initialize({
          dependencies: [
            { src: '/blog/static/slides/plugin/markdown/marked.js' },
            { src: '/blog/static/slides/plugin/markdown/markdown.js' },
            { src: '/blog/static/slides/plugin/notes/notes.js', async: true },
            { src: '/blog/static/slides/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
          ]
        });
      }, 100);
    }
  }
</script>
