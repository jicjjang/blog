<template>
  <section class="container">
    <app-list-preview />
    <app-list-card />
    <app-list-category />
  </section>
</template>

<script>
import Card from '~/components/list/Card'
import Category from '~/components/list/Category'
import Preview from '~/components/list/Preview'

export default {
  components: {
    appListCard: Card,
    appListCategory: Category,
    appListPreview: Preview
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="sass">
  .post__preview
    position: fixed
    top: 0
    left: 0
    width: 45%
  .post__
</style>
