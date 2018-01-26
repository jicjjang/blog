<template>
  <section class="previews">
    <app-list-preview />
    <app-list-contents />
    <div v-html="hello"></div>
  </section>
</template>

<script>
import testMd from '../posts/2015-02-11-web-presentation.md'
import Preview from '~/components/list/Preview'
import Contents from '~/components/list/contents'

export default {
  components: {
    appListContents: Contents,
    appListPreview: Preview
  },
  computed: {
    hello() {
      return testMd
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="sass">
  
</style>
