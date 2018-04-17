<template>
  <div class="slides">
    <section data-background="/blog/static/image/javascript/vue/vuetifulkorea4_background.png">
      <aside class="notes">
        안녕하세요. NHN벅스 최준석입니다. GraphQL, Apollo가 생소한 주제일 수 하지만
        개발하면서 Slack 채널에 질문을 해도 이미 충분히 많은 분들이 사용해보셨고, 실무에 사용하시는 분도 있으셨습니다.
        GraphQL과 Apollo의 본질에 대한 설명이나 서버 파트에 대해서 설명을 드리겠습니다.
        잘부탁드립니다.
      </aside>
    </section>

    <section>
      <div>
        <h2>순서</h2>
        <ul style="list-style: none; margin: 0;">
          <li class="fragment">1. 왜 쓰는지 납득을 해야 쓰지</li>
          <li class="fragment">2. REST API를 GraphQL로</li>
          <li class="fragment">3. Client</li>
          <li class="fragment">4. 왜 이걸 써야하는거죠</li>
          <li class="fragment">Q &amp; A</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>들어가기전에</h2>
      <div class="fragment" style="margin-top: 20px;"><a href="https://jicjjang.github.io/blog/slides/graphql-start-server" target="_blank">기본적인 백엔드 내용은 이 링크를!</a></div>
      <div class="fragment" style="margin-top: 20px;"><a href="https://jicjjang.github.io/blog/slides/graphql-start-client" target="_blank">기본적인 프론트 내용은 이 링크를!</a></div>
      <div class="fragment" style="margin-top: 20px;"><a href="https://github.com/seouldrinker/seoulDrinkerGraphql" target="_blank">오늘의 코드는 이곳에<br/>(https://github.com/seouldrinker/seoulDrinkerGraphql)!</a></div>
      <div class="fragment" style="margin-top: 20px;">더 자세한 내용은 구글링...! (내용은 백엔드 쪽에 거의 다 있어요 헤헤)</div>
      <aside class="notes">
        이미 한차례 사내 세미나를 했었고, 그때 자료도 있으니 발표 후에 한번 둘러봐주세요 :)
        이 자료들과 겹치는 내용도 있겠지만, 이해를 돕기위해 추가하기도 했습니다.
      </aside>
    </section>

    <section>
      <section>
        <h2>1. 왜 쓰는지 납득을 해야 쓰지</h2>
        <div class="fragment">그동안 잘쓰고 있던 API. 한계는??</div>
        <ul class="fragment" style="margin-top: 20px;">
          <li>플랫폼마다 조금씩 다른 쿼리,<br/>그때 그때 원하는 데이터만 보고싶은데...</li>
          <li>생각보다 편하다고 쓰고있었는데, 정형화된 규칙이 있을까?<br/>(JSON이 규칙을 가지고 있진 않음)</li>
          <li>필터는? 정렬은?</li>
          <li>페이지네이ㅅ....</li>
          <li>읍읍</li>
        </ul>
        <aside class="notes">
          나름 편하다고 쓰고 있는 API는 깊게들어갈수록 생각보다 어렵습니다. 뭔가 규칙도 없고, 정렬, 필터, pagination 등등...
          최종 선택은 본인과 팀의 결정이지만, 규칙이 없다는 건 리미터가 없다는 것이니 생각보다 위험합니다.
          이런 문제들에 대해 일부라도 해결할 수 있다면 한번쯤 사용해 볼만 하겠죠.
        </aside>
      </section>
      <section>
        <h3>그렇다면 DB... DB를 보자!!</h3>
        <div style="font-size: 30px;">
          <div class="fragment" style="display: inline-block; width: 20%; padding-left: 1%; padding-right: 1%; margin-left: 1%; vertical-align: top; border-left: 1px solid #fff; border-right: 1px solid #fff;">GraphQL에서 `RDB`가 나을까 `NoSQL`이 나을까?</div>
          <div class="fragment" style="display: inline-block; width: 20%; padding-left: 1%; padding-right: 1%; margin-left: 1%; vertical-align: top; border-left: 1px solid #fff; border-right: 1px solid #fff;">보통 DB에서 성능에 영향을 많이 주더라도 사용하게 되는 JOIN... 하지만 JOIN이 힘든 NoSql에서 쿼리가 급격히 늘어날수도...</div>
          <div class="fragment" style="display: inline-block; width: 20%; padding-left: 1%; padding-right: 1%; margin-left: 1%; vertical-align: top; border-left: 1px solid #fff; border-right: 1px solid #fff;">RDB가 나쁠 이유는 없는데?</div>
          <div class="fragment" style="display: inline-block; width: 20%; padding-left: 1%; padding-right: 1%; margin-left: 1%; vertical-align: top; border-left: 1px solid #fff; border-right: 1px solid #fff;">심지어 각각의 클라이언트에서 Depth에 대한 난이도 조절 가능...!</div>
        </div>
        <aside class="notes">
          그렇다면 디비는 어떨까요? 회사 세미나의 예제 코드는 MongoDB로, NoSQL 환경이었습니다.<br/>
          과도한 DB를 버텨야 하는 회사 업무에서는 어울리지 않아 보인다는 의견이 있었으나<br/>
          RDB로 적용한 사용자들의 리뷰에서는 충분히 잘 사용하고 있다는 의견 또한 많았습니다.
        </aside>
      </section>
      <section>
        <h3>Depth 조절이 가능하다니 무슨 소리죠?</h3>
        <div class="fragment" style="display: inline-block; width: 30%;">
          <pre><code data-trim data-noescape style="font-size: 15px;">
            module.exports = `
              type A {
                _id: String!
                Aprop1: String
                Aprop2: String
                Aprop3: [B]
              }
              type b {
                _id: String!
                Bprop1: String
                Bprop2: [C]
              }
              ...
            `
          </code></pre>
        </div>
        <div class="fragment" style="display: inline-block; width: 30%; vertical-align: top;">
          <pre><code data-trim data-noescape style="font-size: 15px;">
            module.exports = `
              type C {
                _id: String!
                Cprop1: String
                Cprop2: [D]
              }
              type D {
                _id: String!
                Dprop1: String
                Dprop2: [A]       // 두둥...!
              }
              ...
            `
          </code></pre>
        </div>
        <div class="fragment" style="display: inline-block; width: 40%; margin-top: 60px; vertical-align: top;">
          이런 Recursive한 관계...<br/>서비스를 하다보면 없을 순 없다 ㅠㅠ...
        </div>
        <aside class="notes">
          코드에 대해선 뒤에서 설명드리겠으니 여기선 Depth 조절만 알아봅시다.<br/>
          이런 방식으로 GraphQL의 type들을 선언하는데, PK, FK 등<br/>
          다른 타입에 대한 의존성이 있을 수 있는데 이런 관계에 대해<br/>
          어느 정도까지 연결 되게 할 것인지 정할 수 있다는 것입니다.
        </aside>
      </section>
      <section>
        <h2>GraphQL의 목표</h2>
        <div style="width: 90%; margin: 0 auto;">
          <span style="display: inline-block; width: 58%; margin: 5px; vertical-align: top;">
            <img class="fragment" data-fragment-index="1" src="/blog/static/slides/image/graphql-start/about1.jpg" style="margin: 0 auto;"/>
            <div class="fragment" style="margin-top: 20px; font-size: 20px;" data-fragment-index="3">필요한 것만 정확히 물어볼 수있는 기능을 제공하며 시간이 지남에 따라 API를 쉽게 개발할 수 있도록...</div>
          </span>
          <span style="display: inline-block; width: 38%; margin: 5px;">
            <img class="fragment" data-fragment-index="2" src="/blog/static/slides/image/graphql-start/about2.jpg" style="margin: 0 auto;"/>
            <div class="fragment" style="margin-top: 20px; font-size: 20px;" data-fragment-index="4">GraphQL은 단독 버전 관리를 통해 기존 코드 수정없이 보다 깨끗하고 유지보수가 쉽게 사용이 가능...</div>
          </span>
        </div>
        <aside class="notes">
          단편적인 내용들이지만, 규칙을 정하고 유지보수를 용의하게 하기 위해,
          즉, GraphQL은<br/>
          필요한 것만 물어보는 것으로<br/>
          여러 플랫폼에 대해 단독 버전 관리를<br/>
          하는 것이 목표입니다.
        </aside>
      </section>
    </section>

    <section>
      <section>
        <h2>2. REST API를 GraphQL로</h2>
        <div>솔직히 한번쯤은 들어봤을 GraphQL. but, 노관심</div>
        <br/>
        <div style="font-size: 32px;" class="fragment">
          <div style="display: inline-block; width: 50%; text-align: center;">
            <div>REST API</div>
            <p><span style="color: red;">URI</span> 중심으로 데이터의 CRUD 진행</p>
            <div style="width: 60%; max-width: 580px; margin: 0 auto; vertical-align: top;">
              <img style="display: block; margin: 0 auto;" src="/blog/static/slides/image/vue-apollo-graphql/query_api.png">
            </div>
          </div>
          <div style="display: inline-block; width: 50%; text-align: center; vertical-align: top;">
            <div>GraphQL</div>
            <p><span style="color: red;">Query</span>와 <span style="color: red;">Mutation</span>으로 데이터의 CRUD를 진행</p>
            <div style="width: 60%; max-width: 580px; margin: 0 auto; vertical-align: top;">
              <img style="display: block; margin: 0 auto;" src="/blog/static/slides/image/vue-apollo-graphql/query_graphql.png">
            </div>
          </div>
        </div>
        <aside class="notes">
          이제 실제로 구현해봐야겠죠? backend의 endpoint에 대한 개발을 하지 않으시는 분들도 있으시겠지만,
          서버 얘기를 하지 않을 수 없습니다 ㅠㅠ. 함께 적용을 하고 함께 변경해야 하니까요. REST와
          GraphQL을 동시에 사용할 수도 있습니다.
          <br/>---<br/>
          기존에 사용하던 API는 URI중심으로 데이터를 쿼리합니다. 그에 반해 GraphQL은 Query와 Mutation을 중심으로 데이터를 쿼리합니다.
          uri에 보이시는 대로 GraphQL은 `/graphql` 하나로 사용하는데, 이는 GraphQL의 권장사항 입니다.
        </aside>
      </section>
      <section>
        <h3>서버는 살짝만</h3>
        <div class="fragment" data-fragment-index="1" style="font-size: 32px;">하기에는... 생각보단 쉬워요! (클라이언트보단)</div>
        <div class="fragment" data-fragment-index="2" style="margin-top: 20px;">
          <a href="https://github.com/seouldrinker/seoulDrinkerApi" target="_blank">기존 API 코드</a>와
          <a href="https://github.com/seouldrinker/seoulDrinkerGraphql" target="_blank">GraphQL 코드</a>
        </div>
        <div class="fragment" data-fragment-index="2">어떤 부분이 달라졌는지 확인해봅시다.</div>
        <aside class="notes">
          서버 코드는 Node고 매우 짧습니다. ppt 2장으로 끝나니 GraphQL에 대해 간단히 훑어보겠습니다.
        </aside>
      </section>
      <section>
        <h3>우선 라우팅부터</h3>
        <div class="fragment" style="font-size: 32px;">
          API에서 GraphQL로 경로가 바뀌었습니다.
        </div>
        <br/>
        <div class="fragment" style="display: inline-block; width: 60%;">
          <pre><code data-trim data-noescape style="font-size: 15px;">
            ...
            // server.js
            import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
            import schema from './graphql'
            app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }))
            app.use('/graphiql', cors(), graphiqlExpress({ endpointURL: '/graphql' }))
            ...
          </code></pre>
          <pre style="margin-top: 20px;"><code data-trim data-noescape style="font-size: 15px;">
            // graphql/index.js
            import { makeExecutableSchema } from 'graphql-tools'
            import typeDefs from './typeDefs'     // 타입 정의
            import resolvers from './resolvers'   // 정의된 타입 구현

            export default makeExecutableSchema({ typeDefs, resolvers })
          </code></pre>
        </div>
        <div style="display: inline-block; width: 40%; vertical-align: top;">
          <div class="fragment" >graphql과 graphiql의 차이</div>
          <div class="fragment"  style="margin: 20px auto 0 auto;">
            <img style="display: block; margin: 0 auto;" src="/blog/static/slides/image/vue-apollo-graphql/graphiql.png">
          </div>
        </div>
        <aside class="notes">
          라우팅 경로를 추가해줍니다. 위에서 `/graphql` 하나만 넣는게 권장사항이라 했으나, 2개가 들어가있는 이유는
          디버깅 용도로 사용하는 graphiql 입니다. 이 또한 endpoint는 `/graphql`을 가리키고 있습니다.
          <br/>---<br/>
          graphql 라우터는 schema를 받는데, schema는 typeDefs와 resolvers를 실행 가능하게 만든 모듈입니다.
        </aside>
      </section>
      <section>
        <h3>typedef와 resolver</h3>
        <div class="fragment" style="font-size: 32px;">
          정말 단순하게도, 이 파일 2개를 만들면 서버는 끝.
        </div>
        <br/>
        <div class="fragment" style="display: inline-block; width: 50%;">
          <pre><code data-trim data-noescape style="font-size: 15px;">
            // graphql/typedef.js
            module.exports = `
              scalar Date       // 다른 타입에 대해서는 Date와 같이 scalar로 정의

              type News {       // DB에서 가져올 타입은 scalar없이 정의.
                _id: String!    // graphql의 기본 데이터 형은 String과 Int 두개
                context: String // !는 requied
                image: String
                is_ok: Int!
                crt_dt: Date!
                udt_dt: Date!
              }
              type Query {
                newsList: [News]
              }
            `
          </code></pre>
        </div>
        <div class="fragment" style="display: inline-block; width: 50%; vertical-align: top;">
          <pre><code data-trim data-noescape style="font-size: 15px;">
            // graphql/resolver.js
            import { getNewsList } from '../modules/news'

            module.exports = {
              Query: {
                newsList: () => getNewsList()
              }
            }
          </code></pre>
          <pre style="margin-top: 20px;"><code data-trim data-noescape style="font-size: 15px;">
            // modules/news.js
            // API에서 쓰던 모듈과 같음
            // MongoDB 조회. 끝.
            export function getNewsList () {
              return News.find({is_ok: 1}).sort({crt_dt: -1})
            }
          </code></pre>
        </div>
        <aside class="notes">
          이 두 파일만 더 살펴보면 끝입니다. 매우 간단하죠?
          <br/>---<br/>
          우선 스트링 형태로 타입을 정의합니다. News라는 데이터를 위주로 보기 위해 정의해 놨습니다.
          바로 아래 Query는 해당 타입의 리스트를 가져오겠다는 뜻입니다.
          기술 해놓지는 않았지만 type Mutation 을 지정해서 데이터의 저장, 수정, 삭제를 할 수 있습니다.
          graphql에서는 조회만 Query, 나머진 Mutation 이거든요 ㅎㅎ
          <br/>---<br/>
          resolvers에서는 정의된 내용을 구현합니다. News 타입에 대해 데이터 리스트를 가져올 내용은
          getNewsList라는 함수인데요, 이 함수는 MongoDB 에서 데이터를 조회합니다. API에서 사용하던
          모듈과 동일하고, 이 예제가 포함된 Repository에서 대부분이 API에서 사용하던 함수들을 재사용하며
          포팅했습니다.
          <br/>---<br/>
          자 이렇게 서버에 대한 코드 설명이 끝났습니다. 처음 보시는데도 그다지 어렵지 않으셨을겁니다.
        </aside>
      </section>
    </section>

    <section>
      <section>
        <h2>3. Client</h2>
        <div class="fragment" data-fragment-index="1" style="font-size: 32px;">클라이언트도 서버처럼</div>
        <div class="fragment" data-fragment-index="2" style="margin-top: 20px;">
          지난 3월 발표에서 보여드린 <a href="https://github.com/seouldrinker/seoulDrinkerPwa" target="_blank">PWA 코드</a>의 api 호출을
          <a href="https://github.com/seouldrinker/seoulDrinkerGraphql" target="_blank">GraphQL</a>로
        </div>
        <div class="fragment" data-fragment-index="2">어떻게 바꾸는지 알아봅시다.</div>
        <aside class="notes">
          이번엔 클라이언트 코드를 바꿔보겠습니다.
        </aside>
      </section>
      <section>
        <h3>Vue 객체에 apollo provider 주입</h3>
        <div class="fragment" style="display: inline-block; width: 50%;">
          <pre><code data-trim data-noescape style="font-size: 15px;">
            // apollo-provider.js
            import Vue from 'vue'
            import VueApollo from 'vue-apollo'
            import {HttpLink} from "apollo-link-http/lib/index"
            import {ROOT_URL} from "./config"
            import {InMemoryCache} from "apollo-cache-inmemory/lib/index"

            Vue.use(VueApollo)

            // This can hold multiple apollo clients
            const apolloProvider = new VueApollo({
              defaultClient: new ApolloClient({
                link: new HttpLink({uri: `${ROOT_URL}/graphql`}),
                cache: new InMemoryCache(),
                connectToDevTools: true
              }),
              defaultOptions: {
                $loadingKey: 'loading'
              }
            })

            export default apolloProvider
          </code></pre>
        </div>
        <div style="display: inline-block; width: 50%; margin: 0 auto; vertical-align: top;">
          <div class="fragment">
            <pre style="margin: 0 auto;"><code data-trim data-noescape style="font-size: 15px;">
              // main.js
              ...
              import apolloProvider from './apollo-provider'

              /* eslint-disable no-new */
              new Vue({
                el: '#app',
                router,
                provide: apolloProvider.provide(),  // Provider 주입
                store,
                template: '<App/>',
                components: { App }
              })
            </code></pre>
          </div>
          <div class="fragment" style="margin-top: 20px;">
            provider는 공급자.<br/>
            공급자가 하나일 필요는 없음<br/>
            여러개로 늘려도? 상관 없음
          </div>
        </div>
        <aside class="notes">
          vuex로 치면 store에 대한 설정이 끝난거죠.<br/>
          리액트를 사용하셨던 분들은 provider가 조금 더 친절할 것 같네요.
        </aside>
      </section>
      <section>
        <h3>호출부에 대한 설정 완료! 이제는 SPC!</h3>
        <div class="fragment" style="display: inline-block; width: 50%;">
          <pre><code data-trim data-noescape style="font-size: 15px;">
            // container/News.vue
            ...
            &lt;template&gt;
            ...
              &lt;li v-for="(news, index) in newsList" :key="index"&gt;
                ...
              &lt;/li&gt;
            ...
            &lt;/template&gt;
            &lt;script&gt;
            import apollo from '../graphql/news'
            ...
            export default {
              apollo,   // apollo news 모듈
              data () {
                return {
                  newsList: [],
                  ...
                }
              },
              ...
            }
            &lt;/script&gt;
            ...
          </code></pre>
        </div>
        <div class="fragment" style="display: inline-block; width: 50%; vertical-align: top;">
          <pre><code data-trim data-noescape style="font-size: 15px;">
            // graphql/news.js
            import gql from 'graphql-tag'

            export default {
              newsList: {
                // 가져올 column만 명시.
                query: gql`query NewsList {
                  newsList {
                    _id
                    context
                    image
                  }
                }`,
                result ({ data, loader, networkStatus }) {
                  console.log('We got some result!')
                },
                // Error handling
                error (error) {
                  console.error('We\'ve got an error!', error)
                },
                loadingKey: 'loading'
              }
            }
          </code></pre>
        </div>
        <aside class="notes">
          this.$apollo.~~~ 하는 방식으로도 사용할 수 있지만, 위 코드와 같은 방식으로 해야
          smart query가 동작하여 data에 있는 newsList로 조회된 데이터가 자동 매핑됩니다.
        </aside>
      </section>
      <section>
        <h3>간단하게 설명했지만</h3>
        <div class="fragment" style="display: inline-block; width: 50%;">
          <pre><code data-trim data-noescape style="font-size: 20px;">
            export default {
              module: {
                rules: [
                  // ...
                  {
                    test: /\.(graphql|gql)$/,
                    exclude: /node_modules/,
                    loader: 'graphql-tag/loader'
                  }
                ]
              }
            }
          </code></pre>
        </div>
        <div style="display: inline-block; width: 50%; vertical-align: top;">
          <div class="fragment">
            1. 코드를 분리하려면 꼭 필요한 webpack loader 설정
          </div>
          <div class="fragment" style="margin-top: 30px;">
            2. pub/sub 모델을 넣고 소켓으로 DB 변화를 `구독` 하려면 추가해야하는 <a href="https://github.com/apollographql/graphql-subscriptions" target="_blank">graphql-subscriptions</a>
          </div>
          <div class="fragment" style="margin-top: 30px;">
            3. vuex에서 데이터 변화를 조금 더 쉽게 관찰할 수 있게 해줄 <a href="https://github.com/Akryum/vue-supply" target="_blank">vue-supply</a>
          </div>
          <div class="fragment" style="margin-top: 30px;">
            4. 기타 등등 ....
          </div>
        </div>
        <aside class="notes">
          설명은 간단했지만, 서비스에 넣을 정도의 스펙이 된다면 추가 및 수정해야할 것들이 약간 늘어납니다.
          DB 변화를 감지할 pub/sub 모델, vuex에 데이터 변화를 쉽게 연동할 수 있게 해줄 vue-supply 등등
          신경쓸게 늘어납니다.
        </aside>
      </section>
    </section>

    <section>
      <section>
        <h2>3. 단점에 대해</h2>
        <div class="fragment" data-fragment-index="1">
          사실 여기서부터가 나눠보고 싶은 얘기.
        </div>
        <div class="fragment" data-fragment-index="2">
          페이스북에서 <a href="https://code.facebook.com/posts/1691455094417024/graphql-a-data-query-language/" target="_blank">"write once, run anywhere"</a>
        </div>
        <div class="fragment" data-fragment-index="2">
          이라는 이상에 맞추기 위해 만든게 GraphQL.
        </div>
        <div class="fragment" data-fragment-index="3">
          안 쓸 이유가 있을까?
        </div>
        <aside class="notes">
          물론 안 쓸 이유가 없진 않습니다만, 생각보다 언어가 아닌 명세! graphql에 대한 관리가 열정적으로 이루어지진 않는 것이 대표적입니다.
        </aside>
      </section>
      <section>
        <h2>주관적인(겪어봤던) 리뷰</h2>
          <div style="margin-top: 40px;">
            <div class="fragment" style="display: inline-block; width: 18%; margin: 1%; font-size: 30px; vertical-align: top;">실제로 구현하는건 훨씬 복잡한 케이스가 다수</div>
            <div class="fragment" style="display: inline-block; width: 18%; margin: 1%; font-size: 30px; vertical-align: top;">에러 관리 (에러가 200으로 떨어지는 케이스)</div>
            <div class="fragment" style="display: inline-block; width: 18%; margin: 1%; font-size: 30px; vertical-align: top;">실패한 요청에 대한 재시도 (pub/sub으로 해결 가능함)</div>
            <div class="fragment" style="display: inline-block; width: 18%; margin: 1%; font-size: 30px; vertical-align: top;">하지만! 어느정도 잡혀있는 규칙에 대해선 매우 긍정적</div>
            <div class="fragment" style="display: inline-block; width: 18%; margin: 1%; font-size: 30px; vertical-align: top;">러닝커브는 모르겠지만, 한번 익숙해지면 rest보다 낫다고 생각할 수 밖에 없음</div>
          </div>
        <aside class="notes">
          실제 구현시 난이도 상승, 에러가 가끔 200으로 나오는 케이스, 실패에 대한 재시도를 따로 제어하기 힘들다는 점 들이 있습니다.
        </aside>
      </section>
      <section>
        <h2>느낀 점 & 드리고자 하는 말</h2>
        <div class="fragment">
          대형 서비스를 기존 REST에서 GraphQL로 모두 바꾸기엔<br/>조금은 이른게 아닐까 + 시작해볼만 하다<br/>
          <b style="font-size: 50px; color: #efdcbc;" class="fragment">신규서비스라면 무조건...!!</b>
        </div>
        <aside class="notes">
          facebook에서 graphql + react에 사용하는 relay를 거의 케어하지 않아서
          apollo로 유저들이 많이 넘어오고 있었는데, relay의 업그레이드 버전이 나온다는 소식도 있습니다.
          좋은 소식에도 불구하고 당장 큰 규모의 서비스를 쪼개긴 힘들겠지만,
          모놀리스 서비스를 msa로 바꾸면서 도입해보기 좋다고 생각합니다.
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
    name: 'vue-apollo-graphql',
    layout: 'slides',
  }
</script>
