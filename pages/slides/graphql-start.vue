<template>
  <div class="slides">
    <section ondblclick="RevealNotes.open();">
      <h2>GraphQL 시작하기 1</h2>
      <h3>NHN Bugs</h3>
      <p>
        <small>Created by <a href="https://jicjjang.github.io/blog"
                             target="_blank">Junseok, Choi</a></small>
      </p>
    </section>

    <section>
      <div>
        <h2>순서</h2>
        <ul style="list-style: none; margin: 0;">
          <li class="fragment">1. About GraphQL</li>
          <li class="fragment">2. Stable GraphQL</li>
          <li class="fragment">3. Example GraphQL</li>
          <li class="fragment">Q &amp; A</li>
        </ul>
      </div>
      <aside class="notes">
        주제를 시작하기 1로 정한것은, 서버와 클라이언트 모두 적용해야 하기 때문인데,
        금일 발표는 서버를 위주로 발표를 진행하고, 추후 발표에서 Vue에 적용한
        클라이언트 위주의 발표를 진행하겠습니다.
      </aside>
    </section>

    <section>
      <section>
        <h2>1. About GraphQL</h2>
        <div style="width: 70%; margin: 0 auto;">
          <span style="display: inline-block; width: 58%; margin: 5px; vertical-align: top;">
            <img class="fragment" data-fragment-index="1" src="/blog/static/slides/image/graphql-start/about1.jpg" />
            <div class="fragment" style="font-size: 20px;" data-fragment-index="3">필요한 것만 정확히 물어볼 수있는 기능을 제공하며 시간이 지남에 따라 API를 쉽게 개발할 수 있도록...</div>
          </span>
          <span style="display: inline-block; width: 38%; margin: 5px;">
            <img class="fragment" data-fragment-index="2" src="/blog/static/slides/image/graphql-start/about2.jpg" />
            <div class="fragment" style="font-size: 20px;" data-fragment-index="4">GraphQL은 단독 버전 관리를 통해 기존 코드 수정없이 보다 깨끗하고 유지보수가 쉽게 사용이 가능...</div>
          </span>
        </div>
        <aside class="notes">
          이러한 장점이 있는데요,
          저희 서비스에 적용한다면 어떤 도움이 될지,
          어떤 점을 미리 살펴봐야 할 지 알아보겠습니다.
        </aside>
      </section>
      <section>
        <h3>Type definition</h3>
        <div class="fragment">
          <img class="fragment" style="display: inline-block; width: 15%; margin: 0 10px;" src="/blog/static/slides/image/graphql-start/type1.jpg" />
          <img class="fragment" style="display: inline-block; width: 15%; margin: 0 10px; vertical-align: top;" src="/blog/static/slides/image/graphql-start/type2.jpg" />
          <span style="display: inline-block; width: 65%; vertical-align: top;">MVC 모델에서의 Model과 동일</span>
        </div>
        <aside class="notes">
          MVC 모델에서의 Model과 동일하게 DB의 필드가 아닌, 가져올 데이터에 대해 사전에 정의를 해놓습니다.
        </aside>
      </section>
      <section>
        <h3>Query & Mutation definition</h3>
        <div class="fragment">
          <img class="fragment" style="display: inline-block; width: 15%; margin: 0 10px;" src="/blog/static/slides/image/graphql-start/type1.jpg" />
          <img class="fragment" style="display: inline-block; width: 15%; margin: 0 10px; vertical-align: top;" src="/blog/static/slides/image/graphql-start/type2.jpg" />
          <span style="display: inline-block; width: 65%; vertical-align: top;">데이터를 가져올 수 있는 조합인 Query 및 Mutation을 정의합니다.</span>
        </div>
        <aside class="notes">
          저희가 기존에 만들던 Query와 동일합니다.
          Mutation은 Get이 아닌 Post, Put, Delete, Options 요청들이며,
          정의에 있어서 Get과 큰 차이는 없습니다.
        </aside>
      </section>
      <section>
        <h3>Interface definition</h3>
        <div class="fragment">
          <div style="display: inline-block; width: 48%; vertical-align: top;">
            <pre><code data-trim data-noescape style="font-size: 12px; line-height: 18px;">
              interface Character {
                id: ID!
                name: String!
                friends: [Character]
                appearsIn: [Episode]!
              }

              type Human implements Character {
                id: ID!
                name: String!
                friends: [Character]
                appearsIn: [Episode]!
                starships: [Starship]
                totalCredits: Int
              }

              type Droid implements Character {
                id: ID!
                name: String!
                friends: [Character]
                appearsIn: [Episode]!
                primaryFunction: String
              }
            </code></pre>
          </div>
          <div style="display: inline-block; width: 48%">interface를 상속하여 타입 구현</div>
        </div>
        <aside class="notes">
          React, Vue에 Flow나 Typescript로 타입에 강제성을 부여는 것과 마찬가지로
          GraphQL에 Interface를 정의 후, type에서 implements 한 값을 정의합니다.
        </aside>
      </section>
      <section>
        <h3>Resolver</h3>
        <div class="fragment">

        </div>
        <aside class="notes">

        </aside>
      </section>
    </section>

    <section>
      <h1>끝</h1>
      <div>감사합니다.</div>
    </section>

  </div>
</template>

<script>
  export default {
    name: "how-to-use-rxjs",
    layout: 'slides',
  }
</script>
