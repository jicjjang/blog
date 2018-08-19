<template>
  <div class="slides">
    <section>
      <div>
        <img src="/blog/static/slides/image/vuetiful-korea/logo.png" alt="background" style="width: 50%; margin: 0 auto; background: none; border: none;" />
        <p style="margin: 20px 0 0 0;"><a href="http://kr.vuetiful.com/">Vuetiful korea 5th</a> 세미나 리뷰</p>
        <p style="font-size: 20px;">* `s` 키를 누르시면 slide에 대한 설명을 보실 수 있습니다.</p>
      </div>
      <aside class="notes">
        안녕하세요. 핀테크 서비스개발 파트 Jed 입니다. 이전부터 개인적으로 계속 참여하고 있던 Vue.js 국내 커뮤니티인
        Vuetiful-korea 5번째 세미나에서 들었던 내용을 리뷰해보려 합니다.
      </aside>
    </section>

    <section>
      <div>
        <h2>리뷰 순서</h2>
        <ul style="margin: 0;">
          <li class="fragment">Nuxt로 Art하게 프론트 설계해보기</li>
          <li class="fragment">스프링 부트에서 Vue.js 맛보기</li>
          <li class="fragment">더퀴즈라이브 웹 버전 개발기</li>
          <li class="fragment">전체적인 리뷰</li>
        </ul>
      </div>
    </section>

    <section>
      <div>
        <h2>Nuxt로 Art하게 프론트 설계해보기</h2>
        <div><a href="http://kr.vuetiful.com/static/pdf/01.pdf">발표 자료 다운로드</a></div>
      </div>
      <aside class="notes">
        애초에 중점적으로 들으려 했던 발표 내용은 아니지만, 신입개발자가
        express와 vue.js만으로 설계와 vue-router를 유연하게 사용하기 힘들어
        nuxt.js를 선택했다는 얘기입니다. 기초적인 내용을 설명하고
        ppt의 마무리 정리를 하지 않았기 때문에 따로 리뷰하지 않겠습니다.
      </aside>
    </section>

    <section>
      <section>
        <h2>스프링 부트에서 Vue.js 맛보기</h2>
        <div><a href="http://kr.vuetiful.com/static/pdf/02.pdf">발표 자료 다운로드</a></div>
        <aside class="notes">
          스프링 부트에서 Vue.js나 React.js를 사용하는 프로젝트는 진행해본 경험도 있고,
          스탭들이 모여있는 slack에 미리 업로드 해주신 미완성된 발표자료를 보았기 때문에
          큰 기대를 하지 않고 봤던 발표였습니다.
        </aside>
      </section>
      <section>
        <div>
          <img src="/blog/static/slides/image/vuetiful-korea/5th/example2-1.png" alt="example2-1">
        </div>
        <aside class="notes">
          Vue.js를 Spring boot에서 많이 사용하시는 템플릿인 thymeleaf와
          섞어서 사용하는 부분이 있었습니다. thymeleaf와 함께 사용하는 것에
          대해서는 별로 생각해보지 않았기 때문에 이후 따로 찾아봤습니다.

          thymeleaf와 함께 사용함으로써 얻는 점은 초기 Data fetching을
          서버가 해준다는 것으로, Client side rendering 이지만 초기 데이터를
          화면이 그려지기 시작할 때 함께 가지고 있게 됩니다.
          
          초기 렌더링 시, 화면 뼈대를 그린 뒤의 fetch하여 데이터를 채워넣는 방식 대신
          화면을 그릴 때 데이터를 한꺼번에 그려넣어야 하는데, SSR은 과하다 판단될 때
          사용할 수 있을 것입니다.
        </aside>
      </section>
    </section>

    <section>
      <section>
        <h2>더퀴즈라이브 웹 버전 개발기</h2>
        <div><a href="http://kr.vuetiful.com/static/pdf/03.pdf">발표 자료 다운로드</a></div>
        <aside class="notes">
          이 발표를 들으러 간 세미나였는데, 실제 출시는 하지 않기로 됐다고 합니다.
        </aside>
      </section>
      <section>
        <div>
          <img src="/blog/static/slides/image/vuetiful-korea/5th/example3-1.png" alt="example3-1">
        </div>
        <aside class="notes">
          요즘 많이들 하시는 모바일 라이브 퀴즈쇼에 대한 웹버전 개발기인데
          추후 개발에 도입을 고려중인 Rxjs에 대한 설명이 있었습니다.
          
          실제로 사용되지 않은 이유는 웹에서의 동영상 플레이어에 대한 컨트롤이 모바일에서 처럼
          용이하지 않은 부분이 있었고, 특정 시간의 높은 트래픽으로
          사용자들의 입력 동기화(퀴즈쇼이기 때문에 정해진 시간안에 입력이 됐는지
          초 단위로 중요함)가 중요했는데 이 이슈를 해결하지 못했다고 합니다.
        </aside>
      </section>
      <section>
        <div>
          <img src="/blog/static/slides/image/vuetiful-korea/5th/example3-2.png" alt="example3-2">
        </div>
        <aside class="notes">
          또한 궁금했던 영상과 퀴즈를 어떤 방식으로 컴포넌트화 해놨는지
          구조에 대한 설명도 들을 수 있었습니다.

          영상은 다른 컴포넌트들과 아무런 연관없이 틀어만 놓는 형식이었고
          트래픽에 대한 소켓의 역활이 중요해 보였습니다.
        </aside>
      </section>
      <section>
        <div>
          <img src="/blog/static/slides/image/vuetiful-korea/5th/example3-3.png" alt="example3-3">
          <a href="https://play.thequiz.live">Demo</a>
        </div>
        <aside class="notes">
          실제로 라이브 퀴즈쇼 출시 초기에 사용을 해봤었는데, 동접자 10만명이 넘더라구요.
        </aside>
      </section>
    </section>

    <section>
      <section>
        <h2>전체적인 리뷰</h2>
        <aside class="notes">
          3, 4회 세미나에선 직접 발표도 했었는데, 다른 분들이 발표하는 모습을 보면서
          발표 방식을 되돌아 보는것과 최근에는 React로만 개발을 하고있는 이유들로
          스탭으로 참여를 했습니다.
          
          2회 세미나에서 부터 참여를 해왔지만, 이 모임의 발표 레벨은 상당히 낮습니다.
          발표를 자원해주시는 분들이 적을 뿐더러, 현업에서 사용이 적은게 문제이거나
          존잘러들의 낮은 참여도가 문제라고 생각됩니다.

          Vue.js 기술에 대한 실무 적용도 고려하고 있기 때문에 이런 부분들에 대한
          자료조사가 중요해 보입니다.
        </aside>
      </section>
    </section>

    <section>
      <h2>Q&amp;A</h2>
    </section>

    <section>
      <h1>끝</h1>
      <div>감사합니다.</div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'vuetiful-korea-5',
    layout: 'slides',
  }
</script>
