<template>
  <main>
    <article itemprop="blogPost" itemscope="" itemtype="http://schema.org/BlogPosting">
    <header class="section-padding--lg mast">
      <a class="nav nav--white" :href="baseUrl">
        <i class="fa fa-lg fa-arrow-left"></i>
        <span>Back to Posts</span>
      </a>
      <figure class="absolute-bg mast__img" :style="`background-image: url(${baseUrl}/${post.image});`"></figure>
      <div class="mast__container">
        <span><time :datetime="new Date(post.time)" itemprop="datePublished">{{ postDate(post.time) }}</time></span>
        <h1 itemprop="name headline">{{ post.title }}</h1>
        <span>Posted in {{ post.category }}</span>
      </div>
    </header>

    <section class="section-padding post markdown-body" itemprop="articleBody" v-html="postContent"></section>

    <section class="profile">
      <div class="profile__card">
        <div class="profile__img">
          <figure class="absolute-bg" :style="`background-image: url('${baseUrl}/image/mine.jpg');`"></figure>
        </div>
        <div class="profile__container">
          <p>프론트 개발을 좋아하고 꾸준히 공부하는 서버 개발자. 새로운 기술에 관심이 많음. React + Vue 개발 진행중. 현재 Bugs Music 재직중.</p>
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
    <a class="next__link" :href="`${baseUrl}/${this.postList[index+1].path}`" :style="`background-image: url('${baseUrl}/${this.postList[index+1].image}');`">
      <div class="next__container">
        <span>Read Next</span>
        <h2>{{ this.postList[index+1].title }}</h2>
      </div>
    </a>
  </section>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Marked from 'marked'

  export default {
    name: 'post',
    layout: 'post',
    head: {
      title: 'June',
      meta: [
        { hid: 'og:title', name: 'og:title', content: 'June' },
        { hid: 'og:url', name: 'og:url', content: 'https://jicjjang.github.io/blog' },
        { hid: 'og:site_name', name: 'og:site_name', content: 'June' },
        { hid: 'og:description', name: 'og:description', content: 'June\'s blog' },
        { hid: 'og:image', name: 'og:image', content: 'https://jicjjang.github.io/blog/image/mine.jpg' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'June\'s blog' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'June' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://jicjjang.github.io/blog' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://jicjjang.github.io/blog/image/mine.jpg' },
      ]
    },
    asyncData ({ params }) {
      return {
        postName: params.postName || 1
      }
    },
    data() {
      return {
        post: {},
        index: 0,
        image: ''
      }
    },
    computed: {
      ...mapGetters([
        'baseUrl',
        'postList'
      ]),
      postContent() {
        return Marked(require(`~/static/posts/${this.postName}.md`))
      }
    },
    methods: {
      postDate(time) {
        const postDate = new Date(time);
        return `${postDate.getMonth() + 1} ${postDate.getDate()}, ${postDate.getFullYear()}`
      }
    },
    created() {
      for (let i in this.postList) {
        if (this.postList[i].path.split('post/')[1] === this.postName) {
          this.post = this.postList[i];
          this.index = parseInt(i);
          break;
        }
      }
    }
  }
</script>
