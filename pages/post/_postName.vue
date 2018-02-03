<template>
  <app-post :postName="postName" />
</template>

<script>
  import Post from '~/pages/post'

  export default {
    components: {
      'appPost': Post
    },
    data () {
      return {
        postName: ''
      }
    },
    created () {
      this.postName = this.$route.params.postName || '';
    }
  }
</script>
