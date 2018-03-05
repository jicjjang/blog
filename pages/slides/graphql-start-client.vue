<template>
  <div class="slides">
    <section ondblclick="RevealNotes.open();">
      <h2>GraphQL 시작하기 2</h2>
      <h3>NHN Bugs</h3>
      <p>
        <small>Created by <a href="https://jicjjang.github.io/blog"
                             target="_blank">Junseok, Choi</a></small>
      </p>
      <aside class="notes">
        Client GraphQL 시작하기 발표 시작하겠습니다.
        이번 발표는 설명 위주 및 간단한 내용이었던 이전 발표와는 조금 다르게
        예제 위주로 많이 다룰 예정입니다.
      </aside>
    </section>

    <section>
      <div>
        <h2>순서</h2>
        <ul style="list-style: none; margin: 0;">
          <li class="fragment">1. About GraphQL</li>
          <li class="fragment">2. Example GraphQL</li>
          <li class="fragment">Q &amp; A</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>1. About GraphQL</h2>
      <div style="width: 90%; margin: 0 auto;">
        <div class="fragment" style="font-size: 40px;">Client GraphQL은 필수가 아니다.</div>
        <div class="fragment" style="font-size: 40px;">하지만 사용한다면?</div>
      </div>
      <aside class="notes">
        1/2<br/>
        클라이언트 GraphQL은 앞선 `Server GraphQL`에서도 말했지만 Client GraphQL은 필수가 아닙니다.
        <br/>2/2<br/>
        하지만, 사용한다면 시너지 효과가 나올 수 있고, Vuex에서 (React는 Redux에서) 데이터 관리를 따로 할 필요 없이
        설정만 해주면 알아서 Server GraphQL과 연동이 됩니다.
      </aside>
    </section>

    <section>
      <section>
        <h2>2. Example GraphQL</h2>
        <div>
          <div class="fragment" style="display: inline-block; width: 35%;"><a href="https://github.com/Akryum/vue-apollo"><img src="/blog/static/slides/image/graphql-start/vue-supply.png" /></a></div>
          <div class="fragment" style="display: inline-block; width: 55%; vertical-align: top;"><a href="https://github.com/Akryum/vue-supply"><img src="/blog/static/slides/image/graphql-start/vue-apollo.png" /></a></div>
        </div>
        <aside class="notes">
          2/2<br/>
          Client GraphQL에서는 vue-apollo와 vue-supply 라이브러리를 사용할 예정입니다.
          vue-supply는 GraphQL에서 Vuex를 대체하는 용도로 사용합니다.
          컴포넌트마다 가질 수 있는 props 데이터, 데이터를 주고받는 액션과 이를 적용하는 mutation 같은 기능을 하나로 통합하는 Vuex 대신,
          GraphQL에서 가져온 데이터를 직접 캐시하고, 이를 사용하게 해줍니다.
        </aside>
      </section>
      <section>
        <h2>Client GraphQL에 대해서</h2>
        <div>
          <div class="fragment" style="display: inline-block; width: 40%;"><img src="/blog/static/slides/image/graphql-start/apollo-provider.png" /></div>
          <div class="fragment"><a href="https://github.com/Akryum/vueconf-2017-demo">Demo project</a></div>
        </div>
        <aside class="notes">
          이 전 발표 자료에서 GraphQL에 대한 기본적인 설명은 모두 드렸습니다.
          typedef로의 타입 명시와 resolver로의 구현체를 만들어 적용하면 되는 것이었는데,
          <br/>1/2<br/>
          Client에서는 apollo-provider를 등록해 줘야 합니다.
          이후엔 선택적으로 사용하는 vue-supply에 대해 vuex에 캐시를 입히는 부분,
          vuex의 액션 대신 서버와 데이터를 주고받을 쿼리문 등록 작업을 해주어야 합니다.
          <br/>2/2<br/>
          조금 더 자세한 내용에 대해서는 데모 프로젝트를 살펴보겠습니다.
        </aside>
      </section>
    </section>

    <section>
      <section>
        <h1>Q &amp; A</h1>
      </section>
      <section>
        <h1>끝</h1>
        <div>감사합니다.</div>
      </section>
    </section>

  </div>
</template>

<script>
  export default {
    name: "graphql-start-client",
    layout: 'slides',
  }
</script>
