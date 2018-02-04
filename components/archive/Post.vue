<template>
  <article class="card" itemprop="blogPost" itemscope="" itemtype="http://schema.org/BlogPosting">
    <nuxt-link class="card__link" :to="`/${post.path}`" itemprop="url">
      <div class="card__img">
        <figure class="absolute-bg wow" :style="`background-image: url(${baseUrl}/${post.image});`"></figure>
      </div>
      <div class="card__container">
        <h2 class="card__header" itemprop="name">{{ post.title }}</h2>
        <p class="card__count" itemprop="datePublished" :datetime="new Date(post.date).getTime()">{{ `${postDate(post.date)} in ${post.category}` }}</p>
        <span class="card__more">Read Post</span>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
  export default {
    name: "archiveComponent__post",
    props: [
      'index',
      'post',
      'baseUrl'
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
