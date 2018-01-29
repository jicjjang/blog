<template>
  <app-home :categoryName="categoryName" />
</template>

<script>
  import Home from '~/pages/blog'

  export default {
    components: {
      'appHome': Home
    },
    asyncData ({ params }) {
      return {
        categoryName: params.categoryName
      }
    }
  }
</script>

<style>

</style>
