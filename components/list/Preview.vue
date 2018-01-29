<template>
  <div>
    <slot v-for="(post, index) in postList">
      <figure class="absolute-bg preview__img" :style="getPostStyle(post, index)" :key="index"></figure>
    </slot>
    <div class="previews__container">
      <span>Welcome to</span>
      <h1>June</h1>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'postList',
      'baseUrl',
      'previewIndex'
    ],
    methods: {
      getPostStyle(post, index) {
        let target = this.previewIndex || 0
        return `background-image: url(https://jicjjang.github.io/${post.image}); display: ${index == target ? 'block' : 'none'}`;
      }
    }
  }
</script>

<style lang="sass">
  /*.post__preview*/
    /*display: flex*/
    /*flex-direction: column*/
    /*align-items: center*/
    /*justify-content: center*/
    /*height: 100%*/
    /*padding: 2em*/
    /*color: #fff*/
    /*span*/
      /*font-family: "Inconsolata",monospace*/
      /*letter-spacing: 0.05em*/
      /*text-transform: uppercase*/
      /*box-sizing: border-box*/
    /*h1*/
      /*font-size: 3.5em*/
      /*margin: 0*/
      /*font-family: "Space Mono",monospace*/
      /*box-sizing: border-box*/
</style>
