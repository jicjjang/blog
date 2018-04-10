<template>
  <div class="slides">
    <section data-background="/blog/static/image/javascript/vue/vuetifulkorea_background.png">
      <aside class="notes">
        안녕하세요. NHN벅스 최준석입니다. GraphQL, Apollo가 생소할 수 있는 주제기도 하지만
        개발하면서 Slack 채널에 질문을 해도 이미 충분히 많은 분들이 사용해보셨고, 실무에 사용하시는 분도 있으셨습니다.
        GraphQL과 Apollo의 본질에 대한 설명이나 서버 파트에 대해서는 간단한 설명을, 클라이언트 파트에 대해서는
        조금 자세한 설명을 드리겠습니다.
        잘부탁드립니다.
      </aside>
    </section>

    <section>
      <div>
        <h2>순서</h2>
        <ul style="list-style: none; margin: 0;">
          <li class="fragment">1. REST API를 GraphQL로</li>
          <li class="fragment">2. Client</li>
          <li class="fragment">3. 왜 이걸 써야하는거죠</li>
          <li class="fragment">Q &amp; A</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>들어가기전에</h2>
      <br/>
      <div><a href="https://www.slideshare.net/deview/112rest-graph-ql-relay">기본적인 내용은 이 링크를!</a></div>
      <aside class="notes">
        미리 작성을 해놨습니다만, 이 발표는 기본보단 실사용에 대한 내용 위주입니다. ㅠㅠ
      </aside>
    </section>

    <section>
      <section>
        <h2>1. REST API와 GraphQL</h2>
        <div>솔직히 한번쯤은 들어봤을 주제. but, 노관심</div>
        <br/>
        <div style="font-size: 32px;">
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

        </aside>
      </section>
      <section>
        <h3>서버는 살짝만</h3>
        <div class="fragment" data-fragment-index="1" style="font-size: 32px;">하기에는... 생각보단 쉬워요! (클라이언트보단)</div>
        <br/>
        <div class="fragment" data-fragment-index="2"><a href="https://github.com/seouldrinker/seoulDrinkerApi">기존 API 코드</a>와
          <a href="https://github.com/seouldrinker/seoulDrinkerGraphql">GraphQL 코드</a>
        </div>
        <div class="fragment" data-fragment-index="2">어떤 부분이 달라졌는지 확인해봅시다.</div>
        <aside class="notes">

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
            import { getNewsList } from '../modules/news' // API에서 쓰던 모듈과 같음

            module.exports = {
              Query: {
                newsList: () => getNewsList()
              }
            }
          </code></pre>
        </div>
        <aside class="notes">

        </aside>
      </section>
    </section>

    <section>
      <section>
        <h2>2. 설치 및 개발</h2>
        <div>
      <pre><code data-trim data-noescape>
        $ vue init pwa my-project
        $ cd my-project
        $ npm i
      </code></pre>
        </div>
        <div style="font-size: 20px;">
          <a href="https://developers.google.com/web/fundamentals/codelabs/?hl=ko" target="_blank">구글 pwa 기본 튜토리얼</a>
        </div>
        <div style="font-size: 20px;">
          <a href="https://github.com/seouldrinker/seoulDrinkerPwa" target="_blank">https://github.com/seouldrinker/seoulDrinkerPwa</a>
        </div>
        <aside class="notes">
          기본적인 template을 지원해주기 때문에 pwa template으로 간단하게 설치할 수 있습니다.
          아래 url은 구글의 pwa 튜토리얼과 제가 ppt를 준비하면서 개발했던 자료입니다.
        </aside>
      </section>
      <section>
        <h3>그 다음은...</h3>
        <div class="fragment" style="width:80%; margin: 0 auto;">
          <img style="display: block; margin: 0 auto;" src="/blog/static/slides/image/pwa/develop.png">
        </div>
        <aside class="notes">
          네 그 다음 세팅은 열심히 개발하는겁니다.
          기본적으로 template의 vue 코딩하는 부분은 동일하기 때문에 프로젝트를 진행해주시면 됩니다.
        </aside>
      </section>
      <section>
        <h3>코딩 끝! 다음은 세팅...?</h3>
        <div class="fragment">
          <div style="display: inline-block; width: 30%; vertical-align: top;">
            <img style="display: block; margin: 0 auto;" src="/blog/static/slides/image/pwa/folder1.png">
          </div>
          <div style="display: inline-block; width: 30%; vertical-align: top;">
            <img style="display: block; margin: 0 auto;" src="/blog/static/slides/image/pwa/folder2.png">
          </div>
        </div>
        <aside class="notes">
          src 디렉토리에 이전에 vue 프로젝트와 동일하게 프로젝트를 진행하셨다면 위 경로들을 보셔야 합니다.
          빌드 설정과 앱 설치 시의 설정인 manifest 설정입니다.
          앞서 링크를 걸어놨던 구글 pwa 튜토리얼와 vue-pwa-template를 하면서
          해결하기에 시간이 조금 소요되었던 내용입니다.

          오늘 발표의 내용은 이것에 대한 내용이 대부분입니다.
        </aside>
      </section>
    </section>

    <section>
      <section>
        <h2>3. 사용하면서 어려웠던 부분</h2>
        <div>
          앱 개발 후 <a href="https://developers.google.com/web/fundamentals/codelabs/?hl=ko" target="_blank">구글 pwa 튜토리얼</a>
          을 참고하여 세팅을 시작
        </div>
        <aside class="notes">
          앱 개발을 마치고 튜토리얼을 보면서 세팅을 시작했습니다. 참고하여 세팅을 시작했습니다.
          제가 준비한 예제에선 production 모드에만 세팅을 했습니다 ^^; 그 이유는 뒤에서 설명드릴게요.
        </aside>
      </section>
      <section>
        <h3>3-1. Service Worker 등록하기</h3>
        <div>기본 방법</div>
        <div>
          <div style="display: inline-block; width: 48%; vertical-align: top;">
            <pre><code data-trim data-noescape style="font-size: 15px;">
              // 기본적인 Service Worker 등록 방법 (자신의 코드)
              navigator.serviceWorker
                .register('./service-worker.js')
                .then(function() {
                console.log('Service Worker Registered');
              });
            </code></pre>
          </div>
          <div style="display: inline-block; width: 48%;">
            <pre><code data-trim data-noescape style="font-size: 15px;">
              // 기본적인 Service Worker 파일
              // self는 ServiceWorkerGlobal Scope를 지칭
              self.addEventListener('install', () => {
                self.skipWaiting()
              });

              self.addEventListener('activate', () => {
                self.clients.matchAll({ type: 'window' })
                  .then(windowClients => {
                  for (let windowClient of windowClients) {
                    // ...do someting!
                    windowClient.navigate(windowClient.url);
                  }
                });
              });
            </code></pre>
          </div>
        </div>
        <aside class="notes">
          service worker는 처음에 말씀드린대로 브라우저와 별개로 돌기 때문에,
          현재 브라우저에 등록을 시켜줘야 합니다. service worker 에서는 여러가지 이벤트를 걸 수 있고
          코드에서는 install 했을 때와, caching이 끝나고 activate가 될 때의 이벤트 리스너 입니다.
        </aside>
      </section>
      <section>
        <h3>3-1. Service Worker 등록하기</h3>
        <div>webpack.dev.conf.js 방법</div>
        <div style="display: inline-block; width: 48%; vertical-align: top;">
          <pre><code data-trim data-noescape style="font-size: 15px;">
            // in webpack.dev.conf.js
            ...
            plugins: [
              new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'index.html',
                inject: true,
                serviceWorkerLoader: `&lt;script&gt;
                  ${fs.readFileSync(
                    path.join(__dirname,
                    './service-worker-dev.js'),
                    'utf-8'
                  )}
                &lt;/script&gt;`
              }),
              ...
            ]
          </code></pre>
        </div>
        <div style="display: inline-block; width: 48%;">
          <pre><code data-trim data-noescape style="font-size: 15px;">
            // in service-worker-dev.js
            self.addEventListener('install', () => {
              self.skipWaiting()
            });

            self.addEventListener('activate', () => {
              self.clients.matchAll({ type: 'window' })
              .then(windowClients => {
                for (let windowClient of windowClients) {
                  // ...do someting!
                  windowClient.navigate(windowClient.url);
                }
              });
            });
          </code></pre>
        </div>
        <aside class="notes">
          vue-pwa-template dev 모드에서는 webpack에 의해 service-worker-dev.js가
          불러져 옵니다. 그런데, register 부분이 없이 service worker의
          event listener만 있습니다. 사실 그래서 dev 모드에서는 바로 사용을 할 수 없습니다.
          localhost에서 사용은 할 수 있지만, 이 부분에 대한 설정을 따로 해줘야 합니다.
        </aside>
      </section>
      <section>
        <h3>3-1. Service Worker 등록하기</h3>
        <div>webpack.prod.conf.js 방법</div>
        <div style="display: inline-block; width: 48%; vertical-align: top;">
          <pre><code data-trim data-noescape style="font-size: 15px;">
            // service worker caching in webpack.prod.conf.js
            plugins: [
              ...
              new SWPrecacheWebpackPlugin({
                cacheId: 'CACHE_ID',
                filename: 'service-worker.js',
                staticFileGlobs: ['dist/**/*.{js,html,css}'],
                minify: true,
                stripPrefix: 'dist/'
              })
              ...
            ]
          </code></pre>
        </div>
        <div style="display: inline-block; width: 48%;">
          <pre><code data-trim data-noescape style="font-size: 15px;">
            // in service-worker-prod.js
            ...
            window.addEventListener('load', function() {
              if ('serviceWorker' in navigator &&
                  (window.location.protocol === 'https:'
                  || isLocalhost)) {
                navigator.serviceWorker
                .register('service-worker.js')
                .then(function(registration) {
                  // ...someting to do!
                }).catch(function(e) {
                  console.error('err sw registration');
                });
              }
            });
            ...
          </code></pre>
        </div>
        <aside class="notes">
          production 모드에서는 dev와 마찬가지로 webpack.prod.conf.js에
          HtmlWebpackPlugin 라이브러리가 있지만, 추가적으로
          SWPrecacheWebpackPlugin 라이브러리가 있습니다.
          그리고 service worker 파일에 register가 있죠.
        </aside>
      </section>
      <section>
        <h3>3-2. Webpack 설정하기</h3>
        <div>SWPrecacheWebpackPlugin 라이브러리는 뭐하는 앤데...</div>
        <br/>
        <div class="fragment">
          =&gt;기본적인 설정 내용에 따라 추가 Service Worker를 자동으로 생성해주는 놈!
        </div>
        <aside class="notes">
          여기서 혹시 이상한 점을 생각하신 분 있으신가요?
          네, production 모드에서는 service worker event listener가 빠져있네요.
          기본적인 설정 내용으로 Service Worker를 생성해줬으니, 제가 원하는
          event Listener는 아직 안붙어있습니다. 그래서 SWPrecacheWebpackPlugin 라이브러리를
          뒤져보니 runtimeCaching, importScripts 라는 놈들이 있더군요.
        </aside>
      </section>
      <section>
        <h3>3-2. Webpack 설정하기</h3>
        <div>
          <div style="display: inline-block; width: 48%; vertical-align: top;">
            <pre><code data-trim data-noescape style="font-size: 15px;">
              // API_CACHE_PATTERN은 캐시할 url
              new SWPrecacheWebpackPlugin({
                cacheId: 'seouldrinkerpwa',
                filename: 'service-worker.js',
                staticFileGlobs: ['dist/**/*.{js,html,css}'],
                minify: true,
                stripPrefix: 'dist/',
                <span style="color: red;">runtimeCaching: [{
                  urlPattern: API_CACHE_PATTERN,
                  handler: 'networkFirst',
                }],
                importScripts: [
                  'sw.js'
                ]</span>
              }),
            </code></pre>
          </div>
          <div style="display: inline-block; width: 48%;">
            <pre><code data-trim data-noescape style="font-size: 15px;">
              // 이어서
              new CopyWebpackPlugin([
                {
                  from: path.resolve(__dirname, '../static'),
                  to: config.build.assetsSubDirectory,
                  ignore: ['.*']
                },
                {
                  from: path.resolve(__dirname, './sw.js'),
                  to: '',
                  ignore: ['.*']
                }
              ])
            </code></pre>
          </div>
        </div>
        <aside class="notes">
          runtimeCaching은 시작하면서 바로 캐시를 먹일 url에 대해 패턴으로 입력할 수 있는 설정이고
          importScripts는 파일로 service-worker의 추가분을 넣을 수 있게 해주는 설정입니다.
          저는 sw.js파일을 만들었구요, 이렇게 sw.js를 추가해주려면 build 시 sw.js 파일도
          dist 디렉토리로 넘어가야 하기 때문에 static 파일을 넘기는 CopyWebpackPlugin으로
          sw.js 파일을 함께 넘겨줍니다. sw.js 파일은 이전 service worker 파일들과 유사합니다.

          이제 딱 service worker가 설정된 pwa 앱을 돌릴 수 있게 되었네요!
        </aside>
      </section>
      <section>
        <h3>3-3. Service Worker 마무으리!</h3>
        <div class="fragment">
          어후... 너무 복잡하다... 결론이 뭔데??
        </div>
        <br />
        <div>
          <ol style="font-size: 32px;">
            <li class="fragment">기본적으로 자신의 앱 코드 안에 서비스 워커를 등록 시켜주는 register 부분이 있어야 하고,
              등록 될 Service Worker 파일이 있어야 한다.</li>
            <li class="fragment">그러나 vue-pwa-template 의 dev 버전에서는 register 부분이 따로 없다.</li>
            <li class="fragment">Production 모드에서는 register 부분이 있으나,
              서비스 워커를 자동으로 생성해주는 부분만 있다. (커스텀 시, 설정이 필요)</li>
            <li class="fragment">Production 모드에서 사용하려면 webpack설정을 조금 바꿔줘야 하는데
              문서가 쪼오금... 친절하진 않음.</li>
          </ol>
        </div>

        <aside class="notes">
          service worker에서의 결론은 바로 사용할 수 없다는 점입니다. dev모드, production 모드
          상관없이 기본적인 설정이 필요하다는 점이죠.</aside>
      </section>
    </section>

    <section>
      <h2>4. Push Notification</h2>
      <div class="fragment" style="text-align: left;">사실 Vue에서의 세팅을 마치고 튜토리얼대로 하면 끝!</div>
      <div class="fragment" style="text-align: left;">튜토리얼에서 알려주는대로 Service Worker에 Event를 등록해주세요.</div>
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
    name: 'vue-pwa-start',
    layout: 'slides',
  }
</script>
