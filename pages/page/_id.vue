<template>
  <app-home :pageIndex="id" />
</template>

<script>
  import Home from '~/pages'

  export default {
    components: {
      'appHome': Home
    },
    asyncData ({ params }) {
      return {
        id: params.id || 1
      }
    },
    mounted () {
      if (!this.id) {
        location.href = '/blog'
      }
    }
  }
</script>
