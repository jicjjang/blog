<template>
  <section class="previews">
    <app-list-preview :postList="postList" :categoryList="categoryList" :page="page" :baseUrl="baseUrl" />
    <app-list-contents :postList="postList" :categoryList="categoryList" :page="page" :baseUrl="baseUrl" />
  </section>
</template>

<script>
  import Preview from '~/components/list/Preview'
  import Contents from '~/components/list/contents'
  import ContentsMap from '~/posts/contentsMap.js'

  export default {
    props: ['pageIndex'],
    components: {
      appListContents: Contents,
      appListPreview: Preview
    },
    data () {
      return {
        baseUrl: 'http://localhost:3000',
        // baseUrl: 'https://jicjjang.github.io'
        postList: ContentsMap.post,
        categoryList: ContentsMap.category,
        page: {
          index: this.pageIndex || 1,
          hasNext: ContentsMap.post.length > (this.pageIndex * 10),
          hasPrevious: this.pageIndex > 1
        }
      }
    },
    created () {
      this.postList = this.postList.filter((v, i) => {
        return i >= (this.page.index-1)*10 && i < this.page.index*10
      });
    }
  }
</script>
