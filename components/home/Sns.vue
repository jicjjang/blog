<template>
  <footer class="section-padding--sm footer">
    <a class="footer__link" :href="`${baseUrl}/archive`" itemprop="url">Archive</a>
    <ul class="footer__social">
      <li><a class="fa fa-lg fa-envelope-o" href="mailto:jicjjang12@gmail.com"></a></li>
      <li><a class="fa fa-lg fa-github" href="https://github.com/jicjjang" target="_blank"></a></li>
      <li><a class="fa fa-lg fa-linkedin" href="https://www.linkedin.com/in/jicjjang" target="_blank"></a></li>
      <li><a class="fa fa-lg fa-instagram" href="https://instagram.com/jicjjang12" target="_blank"></a></li>
    </ul>
  </footer>
</template>

<script>
  export default {
    name: "homeComponent__sns",
    props: ['baseUrl']
  }
</script>

