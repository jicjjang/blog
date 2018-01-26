<template>
  <div>
    <header>
      <ul class="tabs">
        <li class="tabs__item">Posts</li>
        <li class="tabs__item active">Categories</li>
      </ul>
    </header>

    <div class="tab" style="display: block;">
      <ul itemscope="" itemtype="http://schema.org/Blog">
        <li class="preview" itemprop="blogPost" itemscope="" itemtype="http://schema.org/BlogPosting">
          <a class="preview__link" href="https://jicjjang.github.io/2017/12/17/review-2018-it-trend-special-report/" itemprop="url">
            <span class="preview__date" itemprop="datePublished" datetime="2017-12-17T00:00:00+00:00">Dec 17, 2017</span>
            <h2 class="preview__header" itemprop="name">[Review] 2018 IT 트렌트 스페셜 리포트</h2>
            <p class="preview__excerpt" itemprop="description">오늘은 [2018 IT 트렌트 스페셜 리포트] 도서에 대한 리뷰를 진행해보려 합니다. 한빛미디어에서 진행하는 두번쨰 IT관련 도서 리뷰인데요! 평소에 개발서적만 읽었지 개발 트렌트에 대한 생각은 해본적이 없었기 때문에 뭔가 신선하네요. 이...</p>
            <span class="preview__more">Read More</span>
          </a>
        </li>
      </ul>

      <div class="pagination">
        <a href="https://jicjjang.github.io/2">Next</a>
      </div>
      
      <footer class="section-padding--sm footer">
        <a class="footer__archive" href="https://jicjjang.github.io/archive/">Archive</a>
        <ul class="footer__social">
          <li><a class="fa fa-lg fa-envelope-o" href="mailto:jicjjang12@gmail.com"></a></li>
          <li><a class="fa fa-lg fa-github" href="https://github.com/jicjjang" target="_blank"></a></li>
          <li><a class="fa fa-lg fa-linkedin" href="https://www.linkedin.com/in/jicjjang" target="_blank"></a></li>
          <li><a class="fa fa-lg fa-instagram" href="https://instagram.com/jicjjang12" target="_blank"></a></li>
        </ul>
      </footer>
    </div>
    
    <div class="tab active" style="display: none;">
      <ul class="cards">      
        <li class="card">
          <a class="card__link" href="https://jicjjang.github.io/category/etc/">
            <div class="card__img">
              <figure class="absolute-bg" style="background-image: url('https://jicjjang.github.io/assets/image/etc/jwt/background.jpg');"></figure>
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
        <a class="footer__archive" href="https://jicjjang.github.io/archive/">Archive</a>
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

</script>

<style lang="sass">
  
</style>
