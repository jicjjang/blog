<template>
  <app-home :pageIndex="id" />
</template>

<script>
  import Home from '~/pages/blog'

  export default {
    components: {
      'appHome': Home
    },
    asyncData ({params}) {
      return {
        id: params.id
      }
    }
  }
</script>
