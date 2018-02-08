<template>
  <li class="preview" itemprop="blogPost" itemscope="" itemtype="http://schema.org/BlogPosting" @mouseover="setPreviewIndex(index)">
    <a class="preview__link" :href="`${baseUrl}/${post.path}`" itemprop="url">
      <span class="preview__date" itemprop="datePublished" :datetime="new Date(post.date).getTime()">{{ postDate(post.date) }}</span>
      <h2 class="preview__header" itemprop="name">{{ post.title }}</h2>
      <p class="preview__excerpt" itemprop="description">{{ post.description }}</p>
      <span class="preview__more">Read More</span>
    </a>
  </li>
</template>

<script>
  export default {
    name: "homeComponent__post",
    props: [
      'index',
      'post',
      'baseUrl',
      'setPreviewIndex'
    ],
    methods: {
      postDate(date) {
        const postDate = new Date(date);
        return `${postDate.getMonth() + 1} ${postDate.getDate()}, ${postDate.getFullYear()}`
      }
    }
  }
</script>

<style scoped>

</style>
