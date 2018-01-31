<template>
  <li class="preview" itemprop="blogPost" itemscope="" itemtype="http://schema.org/BlogPosting" @mouseover="setPreviewIndex(index)">
    <nuxt-link class="preview__link" :to="`/${post.path}`" itemprop="url">
      <span class="preview__date" itemprop="datePublished" :datetime="new Date(post.time)">{{ postDate(post.time) }}</span>
      <h2 class="preview__header" itemprop="name">{{ post.title }}</h2>
      <p class="preview__excerpt" itemprop="description">{{ post.description }}</p>
      <span class="preview__more">Read More</span>
    </nuxt-link>
  </li>
</template>

<script>
  export default {
    name: "post",
    props: [
      'index',
      'post',
      'baseUrl',
      'setPreviewIndex'
    ],
    methods: {
      postDate(time) {
        const postDate = new Date(time);
        return `${postDate.getMonth() + 1} ${postDate.getDate()}, ${postDate.getFullYear()}`
      }
    }
  }
</script>

<style scoped>

</style>
