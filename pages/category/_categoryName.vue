<template>
  <app-home :categoryName="categoryName" />
</template>

<script>
  import Home from '~/pages'

  export default {
    components: {
      'appHome': Home
    },
    data () {
      return {
        categoryName: ''
      }
    },
    created () {
      this.categoryName = this.$route.params.categoryName || ''
    }
  }
</script>

<style>

</style>
