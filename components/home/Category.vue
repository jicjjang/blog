<template>
  <li class="card">
    <a class="card__link" :href="`${baseUrl}/category/${category.title.toLowerCase()}`" itemprop="url">
      <div class="card__img">
        <figure class="absolute-bg" :style="`background-image: url(${baseUrl}/${category.image});`"></figure>
      </div>
      <div class="card__container">
        <h2 class="card__header">{{ category.title }}</h2>
        <p class="card__count"></p>
        <span class="card__more">View All</span>
      </div>
    </a>
  </li>
</template>

<script>
  export default {
    name: "homeComponent__category",
    props: [
      'category',
      'baseUrl',
    ]
  }
</script>

<style scoped>

</style>
