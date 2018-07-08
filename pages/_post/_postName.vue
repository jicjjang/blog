<template>
  <section class="section-padding post markdown-body" itemprop="articleBody" v-html="postContent"></section>
</template>

<script>
  import Marked from 'marked'

  // post 형식의 데이터들은 모두 post로. 
  export default {
    name: 'post__postName',
    layout: 'post',
    data() {
      return {
        post: '',
        postName: ''
      }
    },
    validate ({ params }) {
      return params.post === 'post' ||
        params.post === 'revlog'
    },
    computed: {
      postContent() {
        return Marked(require(`~/static/static/${this.post}/${this.postName}.md`))
      }
    },
    created() {
      this.post = this.$route.params.post || 'post';
      this.postName = this.$route.params.postName || 1;
    }
  }
</script>
