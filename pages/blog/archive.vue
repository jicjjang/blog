<template>
  <section class="archives" itemscope="" itemtype="http://schema.org/Blog">
    <a class="nav nav--black" :href="baseUrl">
      <i class="fa fa-lg fa-arrow-left"></i>
      <span>Back to Posts</span>
    </a>
    <header class="archives__header">
      <span>Archive</span>
    </header>
    <div class="section-padding archives__container">
      <app-archive-post v-for="(post, index) in postList" :key="index" :index="index" :post="post" :baseUrl="baseUrl"/>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Post from '~/components/archive/Post'

  export default {
    name: 'archive',
    components: {
      appArchivePost: Post
    },
    computed: {
      ...mapGetters([
        'baseUrl',
        'postList'
      ])
    },
  }
</script>

<style scoped>

</style>
