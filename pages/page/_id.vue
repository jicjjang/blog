<template>
  <app-home :pageIndex="id" />
</template>

<script>
  import Home from '~/pages'

  export default {
    name: "page__id",
    components: {
      'appHome': Home
    },
    data () {
      return {
        id: 0
      }
    },
    created () {
      this.id = this.$route.params.id || 1;
    }
  }
</script>
