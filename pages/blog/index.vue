<template>
  <section class="previews">
    <app-list-preview :postList="postList" :baseUrl="baseUrl" :previewIndex="previewIndex"/>
    <app-list-contents :postList="postList" :categoryList="categoryList" :page="page" :baseUrl="baseUrl" :setPreviewIndex="setPreviewIndex" />
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
          hasNext: ContentsMap.post.length > (this.pageIndex || 1) * 5,
          hasPrevious: (this.pageIndex || 1) > 1
        },
        previewIndex: 0
      }
    },
    created () {
      this.postList = this.postList.filter((v, i) => {
        return i >= (this.page.index-1)*5 && i < this.page.index*5
      });
    },
    methods: {
      setPreviewIndex (previewIndex) {
        this.previewIndex = previewIndex
      }
    }
  }
</script>
