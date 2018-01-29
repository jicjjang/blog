<template>
  <section class="previews">
    <div>
      <slot v-for="(post, index) in filteredPostList">
        <figure class="absolute-bg preview__img" :style="getPostStyle(post, index)" :key="index"></figure>
      </slot>
      <div class="previews__container">
        <span>Welcome to</span>
        <h1>June</h1>
      </div>
    </div>
    <div>
      <header>
        <ul class="tabs">
          <li class="tabs__item active" @click="toggleTab">Posts</li>
          <li class="tabs__item" @click="toggleTab">Categories</li>
        </ul>
      </header>

      <div class="tab active">
        <ul itemscope="" itemtype="http://schema.org/Blog">
          <app-home-post v-for="(post, index) in filteredPostList" :key="index" :index="index" :post="post" :baseUrl="baseUrl" :setPreviewIndex="setPreviewIndex" />
        </ul>

        <div class="pagination">
          <a :href="`${baseUrl}/page/${parseInt(page)-1}`" v-if="hasPrevious()">Previous</a>
          <a :href="`${baseUrl}/page/${parseInt(page)+1}`" v-if="hasNext()">Next</a>
        </div>

        <footer class="section-padding--sm footer">
          <a class="footer__archive" :href="`${baseUrl}/archive/`">Archive</a>
          <ul class="footer__social">
            <li><a class="fa fa-lg fa-envelope-o" href="mailto:jicjjang12@gmail.com"></a></li>
            <li><a class="fa fa-lg fa-github" href="https://github.com/jicjjang" target="_blank"></a></li>
            <li><a class="fa fa-lg fa-linkedin" href="https://www.linkedin.com/in/jicjjang" target="_blank"></a></li>
            <li><a class="fa fa-lg fa-instagram" href="https://instagram.com/jicjjang12" target="_blank"></a></li>
          </ul>
        </footer>
      </div>

      <div class="tab">
        <ul class="cards">
          <app-home-category v-for="(category, index) in categoryList" :key="index" :index="index" :category="category" :baseUrl="baseUrl" />
        </ul>

        <footer class="section-padding--sm footer">
          <a class="footer__archive" :href="`${baseUrl}/archive`">Archive</a>
          <ul class="footer__social">
            <li><a class="fa fa-lg fa-envelope-o" href="mailto:jicjjang12@gmail.com"></a></li>
            <li><a class="fa fa-lg fa-github" href="https://github.com/jicjjang" target="_blank"></a></li>
            <li><a class="fa fa-lg fa-linkedin" href="https://www.linkedin.com/in/jicjjang" target="_blank"></a></li>
            <li><a class="fa fa-lg fa-instagram" href="https://instagram.com/jicjjang12" target="_blank"></a></li>
          </ul>
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Post from '~/components/home/Post'
  import Category from '~/components/home/Category'

  export default {
    props: ['pageIndex'],
    components: {
      appHomePost: Post,
      appHomeCategory: Category
    },
    computed: {
      ...mapGetters([
        'baseUrl',
        'postList',
        'categoryList'
      ])
    },
    data () {
      return {
        page: this.pageIndex || 1,
        filteredPostList: [],
        previewIndex: 0
      }
    },
    created () {
      if (this.postList) {
        this.filteredPostList = this.postList.filter((v, i) => {
          return i >= (this.page - 1) * 5 && i < this.page * 5
        });
      }
    },
    methods: {
      getPostStyle(post, index) {
        const target = this.previewIndex || 0;
        return `background-image: url(https://jicjjang.github.io/${post.image}); display: ${index === target ? 'block' : 'none'}`;
      },
      setPreviewIndex (previewIndex) {
        this.previewIndex = previewIndex
      },
      hasNext() {
        return this.postList.length > this.page * 5
      },
      hasPrevious() {
        return this.page > 1
      },
      toggleTab(e) {
        const siblingsPage = document.getElementsByClassName('tab');
        const siblingsTab = e.target.parentNode.childNodes;
        if (siblingsTab[0] === e.target) {
          if (siblingsTab[0].className.indexOf('active') < 0) {
            siblingsTab[0].className = siblingsTab[0].className + ' active';
            siblingsPage[0].className = siblingsPage[0].className + ' active';
            siblingsTab[1].className = siblingsTab[1].className.split(' ')[0];
            siblingsPage[1].className = siblingsPage[1].className.split(' ')[0];
          }
        } else {
          if (siblingsTab[1].className.indexOf('active') < 0) {
            siblingsTab[1].className = siblingsTab[0].className + ' active';
            siblingsPage[1].className = siblingsPage[0].className + ' active';
            siblingsTab[0].className = siblingsTab[0].className.split(' ')[0];
            siblingsPage[0].className = siblingsPage[0].className.split(' ')[0];
          }
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .tab
    display: none
    &.active
      display: block
</style>
