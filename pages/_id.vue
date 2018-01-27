<template>
  <div>index__{{ id }}</div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.path.split('/')[1]
      }
    }
  }
</script>

<style>

</style>
