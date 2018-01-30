<template>
  <article class="card" itemprop="blogPost" itemscope="" itemtype="http://schema.org/BlogPosting">
    <a class="card__link" :href="`${baseUrl}/${post.path}`" itemprop="url">
      <div class="card__img">
        <figure class="absolute-bg wow" :style="`background-image: url(${baseUrl}/${post.image});`"></figure>
      </div>
      <div class="card__container">
        <h2 class="card__header" itemprop="name">{{ post.title }}</h2>
        <p class="card__count" itemprop="datePublished" :datetime="new Date(post.time)">{{ `${postDate(post.time)} in ${post.category}` }}</p>
        <span class="card__more">Read Post</span>
      </div>
    </a>
  </article>
</template>

<script>
  export default {
    name: "post",
    props: [
      'index',
      'post',
      'baseUrl'
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
