<template>
  <app-home :pageIndex="1" />
</template>

<script>
  import Home from '~/pages'

  export default {
    components: {
      'appHome': Home
    }
  }
</script>
