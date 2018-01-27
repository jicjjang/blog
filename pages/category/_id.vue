<template>
  <div>category__{{ id || 'test' }}</div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id
      }
    }
  }
</script>

<style>

</style>
