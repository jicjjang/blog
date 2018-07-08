<template>
  <main>
    <article itemprop="blogPost" itemscope="" itemtype="http://schema.org/BlogPosting">
      <header class="section-padding--lg mast">
        <a class="nav nav--white" :href="baseUrl" itemprop="url">
          <i class="fa fa-lg fa-arrow-left"></i>
          <span>Back to Posts</span>
        </a>
        <figure class="absolute-bg mast__img" :style="`background-image: url(${baseUrl}/${postData.image});`"></figure>
        <div class="mast__container">
          <span><time :datetime="new Date(postData.date).getTime()" itemprop="datePublished">{{ postDate(postData.date) }}</time></span>
          <h1 itemprop="name headline">{{ postData.title }}</h1>
          <span>Posted in {{ postData.category }}</span>
        </div>
      </header>

      <nuxt />

      <section class="profile">
        <div class="profile__card">
          <div class="profile__img">
            <figure class="absolute-bg" :style="`background-image: url('${baseUrl}/static/image/mine.jpg');`"></figure>
          </div>
          <div class="profile__container">
            <p>프론트 개발을 좋아하고 꾸준히 공부하는 백엔드 개발자. 새로운 기술에 관심이 많음. React + Vue 개발 진행중. 현재 Kakaopay 재직중.</p>
            <ul class="profile__social">
              <li><a class="fa fa-lg fa-envelope-o" href="mailto:jicjjang12@gmail.com"></a></li>
              <li><a class="fa fa-lg fa-github" href="https://github.com/jicjjang" target="_blank"></a></li>
              <li><a class="fa fa-lg fa-linkedin" href="https://www.linkedin.com/in/jicjjang" target="_blank"></a></li>
              <li><a class="fa fa-lg fa-instagram" href="https://instagram.com/jicjjang12" target="_blank"></a></li>
            </ul>
          </div>
        </div>
      </section>
    </article>

    <section class="next" v-if="index > -1 && this.postList[index+1]">
      <a class="next__link" :href="`${baseUrl}/${this.postList[index+1].path}`" itemprop="url" :style="`background-image: url('${baseUrl}/${this.postList[index+1].image}');`">
        <div class="next__container">
          <span>Read Next</span>
          <h2>{{ this.postList[index+1].title }}</h2>
        </div>
      </a>
    </section>

    <div id="disqus_thread"></div>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "postLayout",
    head () {
      return {
        title: 'June',
        meta: [
          {hid: 'og:title', name: 'og:title', content: this.postData.title || 'June'},
          {hid: 'og:url', name: 'og:url', content: `https://jicjjang.github.io/blog/${this.postData.path}`},
          {hid: 'og:site_name', name: 'og:site_name', content: 'June'},
          {hid: 'og:description', name: 'og:description', content: this.postData.description || 'June\'s blog'},
          {hid: 'og:image', name: 'og:image', content: this.postData.image ?
              `https://jicjjang.github.io/blog/${this.postData.image}` :
              'https://jicjjang.github.io/blog/static/image/mine.jpg'},
          {hid: 'twitter:domain', name: 'twitter:domain', content: `https://jicjjang.github.io/blog/${this.postData.path}`},
          {hid: 'twitter:description', name: 'twitter:description', content: this.postData.description || 'June\'s blog'},
          {hid: 'twitter:title', name: 'twitter:title', content: this.postData.title || 'June'},
          {hid: 'twitter:url', name: 'twitter:url', content: `https://jicjjang.github.io/blog/${this.postData.path}`},
          {hid: 'twitter:image', name: 'twitter:image', content: this.postData.image ?
              `https://jicjjang.github.io/blog/${this.postData.image}` :
              'https://jicjjang.github.io/blog/static/image/mine.jpg'},
        ]
      }
    },
    data() {
      return {
        post: '',
        postData: {},
        postName: '',
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
    methods: {
      postDate(date) {
        const postDate = new Date(date);
        return `${postDate.getMonth() + 1} ${postDate.getDate()}, ${postDate.getFullYear()}`
      }
    },
    created() {
      this.post = this.$route.params.post || 1;
      this.postName = this.$route.params.postName || 1;

      for (let i in this.postList) {
        if (this.postList[i].path.split(`${this.post}/`)[1] === this.postName) {
          this.postData = this.postList[i];
          this.index = parseInt(i);
          break;
        }
      }
    },
    mounted() {
      var d = document, s = d.createElement('script');
      s.src = 'https://jicjjang.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    }
  }
</script>

<style scoped>
  #disqus_thread {
    margin: 50px 10% 0 10%;
  }
</style>
