<template>
  <main>
    <article itemprop="blogPost" itemscope="" itemtype="http://schema.org/BlogPosting">
    <header class="section-padding--lg mast">
      <a class="nav nav--white" href="https://jicjjang.github.io/">
        <i class="fa fa-lg fa-arrow-left"></i>
        <span>Back to Posts</span>
      </a>
      <figure class="absolute-bg mast__img" style="background-image: url('https://jicjjang.github.io/assets/image/review/ittrend/background.jpg');"></figure>
      <div class="mast__container">
        <span><time datetime="2017-12-17T00:00:00+00:00" itemprop="datePublished">Dec 17, 2017</time></span>
        <h1 itemprop="name headline">[Review] 2018 IT 트렌트 스페셜 리포트</h1>

          <span>
            Posted in Review
          </span>

        <span></span>
      </div>
    </header>

    <section class="section-padding post" itemprop="articleBody"></section>

    <section class="profile">
      <div class="profile__card">
        <div class="profile__img">
          <figure class="absolute-bg" style="background-image: url('https://jicjjang.github.io/assets/image/mine.jpg');"></figure>
        </div>
        <div class="profile__container">
          <p>프론트 개발을 좋아하고 꾸준히 공부하는 서버 개발자. 새로운 기술에 관심이 많음. React + Vue 개발 진행중. 현재 Bugs Music 재직중.</p>

            <ul class="profile__social">

                <li><a class="fa fa-lg fa-envelope-o" href="mailto:jicjjang12@gmail.com"></a></li>


                <li><a class="fa fa-lg fa-github" href="https://github.com/jicjjang" target="_blank"></a></li>

                <li><a class="fa fa-lg fa-linkedin" href="https://www.linkedin.com/in/jicjjang" target="_blank"></a></li>

                <li><a class="fa fa-lg fa-instagram" href="https://instagram.com/jicjjang12" target="_blank"></a></li>

            </ul>

        </div>
      </div>
    </section>

  </article>
  <section class="next">
    <a class="next__link" href="https://jicjjang.github.io/2017/12/13/life/" style="background-image: url('https://jicjjang.github.io/assets/image/beat.png');">
      <div class="next__container">
        <span>Read Next</span>
        <h2>서울시 공공앱 공모전</h2>
      </div>
    </a>
  </section>
  </main>
</template>

<script>
  export default {
    name: 'post',
    layout: 'post',
    head: {
      title: 'June',
      meta: [
        { hid: 'og:title', name: 'og:title', content: 'June' },
        { hid: 'og:url', name: 'og:url', content: 'https://jicjjang.github.io' },
        { hid: 'og:site_name', name: 'og:site_name', content: 'June' },
        { hid: 'og:description', name: 'og:description', content: 'June\'s blog' },
        { hid: 'og:image', name: 'og:image', content: 'https://jicjjang.github.io/assets/image/mine.jpg' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'June\'s blog' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'June' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://jicjjang.github.io' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://jicjjang.github.io/assets/image/mine.jpg' },
      ]
    },
    asyncData ({ params }) {
      return {
        postName: params.postName || 1
      }
    },
    async mounted() {
      const result = await import(`../../../posts/${this.postName}.md`);
      document.querySelector('.section-padding.post').innerHTML = result;
    }
  }
</script>
