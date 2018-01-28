<template>
  <div>
    <header>
      <ul class="tabs">
        <li class="tabs__item active">Posts</li>
        <li class="tabs__item">Categories</li>
      </ul>
    </header>

    <div class="tab" style="display: block;">
      <ul itemscope="" itemtype="http://schema.org/Blog" v-for="(post, index) in postList" :key="index">
        <li class="preview" itemprop="blogPost" itemscope="" itemtype="http://schema.org/BlogPosting">
          <a class="preview__link" :href='`${baseUrl}/blog/${post.path}`' itemprop="url">
            <span class="preview__date" itemprop="datePublished" datetime="2017-12-17T00:00:00+00:00">Dec 17, 2017</span>
            <h2 class="preview__header" itemprop="name">{{ post.title }}</h2>
            <p class="preview__excerpt" itemprop="description">{{ post.description }}</p>
            <span class="preview__more">Read More</span>
          </a>
        </li>
      </ul>

      <div class="pagination">
        <a :href="`${baseUrl}/blog/${page.index-1}`" v-if="page.hasPrevious">Previous</a>
        <a :href="`${baseUrl}/blog/${page.index+1}`" v-if="page.hasNext">Next</a>
      </div>

      <footer class="section-padding--sm footer">
        <a class="footer__archive" :href="`${baseUrl}/archive/`">Archive</a>
        <ul class="footer__social">
          <li><a class="fa fa-lg fa-envelope-o" href="mailto:jicjjang12@gmail.com"></a></li>
          <li><a class="fa fa-lg fa-github" href="https://github.com/jicjjang" target="_blank"></a></li>
          <li><a class="fa fa-lg fa-linkedin" href="https://www.linkedin.com/in/jicjjang" target="_blank"></a></li>
          <li><a class="fa fa-lg fa-instagram" href="https://instagram.com/jicjjang12" target="_blank"></a></li>
        </ul>
      </footer>
    </div>

    <div class="tab active" style="display: none;">
      <ul class="cards" v-for="(category, index) in categoryList" :key="index">
        <li class="card">
          <a class="card__link" :href="`${baseUrl}/category/${category.title.toLowerCase()}`">
            <div class="card__img">
              <figure class="absolute-bg" :style="`background-image: url('${baseUrl}/assets/image/etc/jwt/background.jpg');`"></figure>
            </div>
            <div class="card__container">
              <h2 class="card__header">Etc</h2>
              <p class="card__count">9 Posts</p>
              <span class="card__more">View All</span>
            </div>
          </a>
        </li>
      </ul>

      <footer class="section-padding--sm footer">
        <a class="footer__archive" :href="`${baseUrl}/archive`">Archive</a>
        <ul class="footer__social">
          <li><a class="fa fa-lg fa-envelope-o" href="mailto:jicjjang12@gmail.com"></a></li>
          <li><a class="fa fa-lg fa-github" href="https://github.com/jicjjang" target="_blank"></a></li>
          <li><a class="fa fa-lg fa-linkedin" href="https://www.linkedin.com/in/jicjjang" target="_blank"></a></li>
          <li><a class="fa fa-lg fa-instagram" href="https://instagram.com/jicjjang12" target="_blank"></a></li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'page',
    'postList',
    'categoryList',
    'baseUrl'
  ]
}
</script>

<style lang="sass">

</style>
