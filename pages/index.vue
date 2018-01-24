<template>
  <section class="container">
    <div>
      <h1 class="title">
        jicjjang.github.io
      </h1>
      <h2 class="subtitle">
        This blog has been used since 2018 using Nuxtjs with vuejs
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/list/Card'
import Category from '~/components/list/Category'
import Preview from '~/components/list/Preview'

export default {
  components: {
    appCard: Card,
    appCategory: Category,
    appPreview: Preview
  }
}
</script>

<style>

</style>
