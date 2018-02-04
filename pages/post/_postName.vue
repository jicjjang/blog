<template>
  <section class="section-padding post markdown-body" itemprop="articleBody" v-html="postContent"></section>
</template>

<script>
  import Marked from 'marked'

  export default {
    name: 'post__postName',
    layout: 'post',
    computed: {
      postContent() {
        return Marked(require(`~/static/static/posts/${this.postName}.md`))
      }
    },
    created() {
      this.postName = this.$route.params.postName || 1;
    }
  }
</script>
