<template>
  <app-home :categoryName="categoryName" />
</template>

<script>
  import Home from '~/pages'

  export default {
    components: {
      'appHome': Home
    },
    asyncData ({ params }) {
      return {
        categoryName: params.categoryName
      }
    },
    mounted () {
      if (!this.categoryName) {
        location.href = '/blog'
      }
    }
  }
</script>

<style>

</style>
