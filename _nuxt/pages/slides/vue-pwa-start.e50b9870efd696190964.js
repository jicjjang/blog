webpackJsonp([9],{"7QU9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("keHJ"),s=i("taxR"),a=i("VU/8")(n.a,s.a,!1,null,null,null);a.options.__file="pages/slides/vue-pwa-start.vue",e.default=a.exports},keHJ:function(t,e,i){"use strict";e.a={name:"vue-pwa-start",layout:"slides"}},taxR:function(t,e,i){"use strict";var n=function(){var t=this.$createElement;this._self._c;return this._m(0)};n._withStripped=!0;var s={render:n,staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slides"},[i("section",{attrs:{"data-background":"/blog/static/image/javascript/vue/vuetifulkorea3_background.png"}},[i("aside",{staticClass:"notes"},[t._v("\n      안녕하세요. NHN벅스 최준석입니다. PWA에 대한 정의와 원리, 사용법 등에 대해\n      간단한 경험기를 발표해보려고 합니다. 잘부탁드립니다.\n    ")])]),i("section",[i("div",[i("h2",[t._v("순서")]),i("ul",{staticStyle:{"list-style":"none",margin:"0"}},[i("li",{staticClass:"fragment"},[t._v("1. 지루한 pwa 설명")]),i("li",{staticClass:"fragment"},[t._v("2. 설치 및 개발")]),i("li",{staticClass:"fragment"},[t._v("3. 사용하면서 어려웠던 부분")]),i("li",{staticClass:"fragment"},[t._v("4. Push Notification")]),i("li",{staticClass:"fragment"},[t._v("Q & A")])])])]),i("section",[i("section",[i("h2",[t._v("1. 지루한 pwa 설명")]),i("ul",{staticClass:"fragment",staticStyle:{"font-size":"32px"}},[i("li",[t._v("프로그레시브 - 모든 브라우저")]),i("li",[t._v("반응형 - 모든 디바이스")]),i("li",[t._v("연결 독립적 - Service Worker를 사용. 오프라인, 느린 네트워크에서도 작동")]),i("li",[t._v("앱과 유사 - "),i("a",{attrs:{href:"https://github.com/google/WebFundamentals/blob/master/src/content/ko/fundamentals/architecture/app-shell.md",target:"_blank"}},[t._v("앱 셸")]),t._v("\n          모드에서 작성. 앱 스타일의 동작")]),i("li",[t._v("최신 상태 - "),i("a",{attrs:{href:"https://b.limminho.com/archives/1384",target:"_blank"}},[t._v("Service Worker")]),t._v("에 업데이트 프로세스가 있음")]),i("li",[t._v("안전 - HTTPS를 통해 제공. (개발시 로컬은 http로 가능)")]),i("li",[t._v("검색 가능")]),i("li",[t._v("재참여 가능 - 푸시 알림과 같은 기능")]),i("li",[t._v("설치 가능 - 앱 스토어 사용 없이 설치")]),i("li",[t._v("링크 연결 가능 - URL을 통해 손쉽게 공유 및 설치")])]),i("aside",{staticClass:"notes"},[t._v("\n        pwa의 특징들입니다. 기본적으로 위와 같은 특징들을 가지는 것이 pwa라고 할 수 있으며\n        지향하진 않지만 필요에 따라 몇몇 사항에 대한 지원이 빠질 수 있습니다.\n      ")])]),i("section",[i("h3",[t._v("자세하게 알아보겠습니다")])]),i("section",[i("h3",[t._v("앱 셸이란?")]),i("div",{staticClass:"fragment",staticStyle:{"font-size":"32px","text-align":"left"}},[t._v("애플리케이션 셸은 사용자 인터페이스를 지원하는 최소한의 HTML, CSS, 자바스크립트입니다. 애플리케이션 셸의 특징은 다음과 같습니다.")]),i("br"),i("ul",{staticClass:"fragment",staticStyle:{"font-size":"32px",width:"100%","text-align":"left"}},[i("li",[t._v("로드 속도가 빠릅니다.")]),i("li",[t._v("캐시됩니다.")]),i("li",[t._v("콘텐츠를 동적으로 표시합니다.")])]),i("br"),i("div",{staticClass:"fragment",staticStyle:{"font-size":"20px"}},[t._v("참고 - https://support.google.com/partners/answer/7336597?hl=ko")]),i("aside",{staticClass:"notes"},[t._v("\n        설명중에 바로 알기 힘든 용어들을 간단히 설명해보겠습니다.\n        앱 셸이란 것은 UI의 지원을 위한 최소한의 html, css, js 입니다.\n        조직 단위 중에 셸이란 것이 있는 것과 똑같습니다.\n        캐시가 되서 다른 요소들이 나오지 않을 때, 기본적으로 나와야 하는 요소들이기 때문에\n        앱 셸에서의 구조를 잘 다져놓고 개발을 해야합니다.\n      ")])]),i("section",[i("h3",[t._v("앱 셸 디자인 시 고려해야할 점")]),i("div",{staticClass:"fragment",staticStyle:{"font-size":"32px","text-align":"left"}},[i("ul",[i("li",[t._v("화면에 나와야 할 기본적인 구성")]),i("li",[t._v("필수적으로 들어와야 할 데이터")]),i("li",[t._v("필수적으로 들어와야 할 리소스 ex) 이미지, js, css...")])])]),i("aside",{staticClass:"notes"},[t._v("\n        기본적인 요소들을 앱 셸이라고 하기 때문에, 개발 시작 전에 어느정도의 요소까지\n        보여줄 지 잘 계획하고 들어가야 합니다.\n      ")])]),i("section",[i("h3",[t._v("그렇다면 Service Worker는?")]),i("div",{staticClass:"fragment",staticStyle:{"font-size":"32px","text-align":"left"}},[t._v("\n        Service Worker란 브라우저가 웹페이지와 별도로 백그라운드에서 실행하는 스크립트로서,\n        웹페이지나 사용자 상호작용 없이도 다양한 기능을 사용할 수 있게 합니다.\n      ")]),i("br"),i("div",{staticClass:"fragment"},[i("ul",{staticStyle:{"font-size":"32px",width:"40%","vertical-align":"top"}},[i("li",[t._v("설치")]),i("li",[t._v("푸시 알림")]),i("li",[t._v("백그라운드 동기화")]),i("li",[t._v("주기적 동기화 (업데이트)")]),i("li",[t._v("기타 등등...")])]),i("div",{staticStyle:{display:"inline-block",width:"50%"}},[i("img",{staticStyle:{border:"none",margin:"0 auto"},attrs:{src:"/blog/static/slides/image/pwa/service-worker.gif"}})])]),i("div",{staticClass:"fragment",staticStyle:{"font-size":"20px"}},[t._v("참고 - https://support.google.com/partners/answer/7336697?hl=ko")]),i("aside",{staticClass:"notes"},[t._v("\n        service worker는 설명대로 브라우저와 별도로 실행하기 때문에, 브라우저를 종료한 상태에서 돌아갑니다.\n        이 뿐만 아니라, 개발자의 network가 끊킨 상황에서 app에 대한 통제를 할 수 있는 수단이기 때문에\n        매우 중요한 개념입니다. 이미지에 나와있는대로 servie worker가 설치되면 install 이벤트가\n        네트워크를 통해 들어가고, 위에 말씀드린 웹 셸이나, 부가적으로 설정해놓은 정보들이 caching 된 후\n        실행됩니다.\n      ")])])]),i("section",[i("section",[i("h2",[t._v("2. 설치 및 개발")]),i("div",[i("pre",[i("code",{attrs:{"data-trim":"","data-noescape":""}},[t._v("\n      $ vue init pwa my-project\n      $ cd my-project\n      $ npm i\n    ")])])]),i("div",{staticStyle:{"font-size":"20px"}},[i("a",{attrs:{href:"https://developers.google.com/web/fundamentals/codelabs/?hl=ko",target:"_blank"}},[t._v("구글 pwa 기본 튜토리얼")])]),i("div",{staticStyle:{"font-size":"20px"}},[i("a",{attrs:{href:"https://github.com/seouldrinker/seoulDrinkerPwa",target:"_blank"}},[t._v("https://github.com/seouldrinker/seoulDrinkerPwa")])]),i("aside",{staticClass:"notes"},[t._v("\n        기본적인 template을 지원해주기 때문에 pwa template으로 간단하게 설치할 수 있습니다.\n        아래 url은 구글의 pwa 튜토리얼과 제가 ppt를 준비하면서 개발했던 자료입니다.\n      ")])]),i("section",[i("h3",[t._v("그 다음은...")]),i("div",{staticClass:"fragment",staticStyle:{width:"80%",margin:"0 auto"}},[i("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:"/blog/static/slides/image/pwa/develop.png"}})]),i("aside",{staticClass:"notes"},[t._v("\n        네 그 다음 세팅은 열심히 개발하는겁니다.\n        기본적으로 template의 vue 코딩하는 부분은 동일하기 때문에 프로젝트를 진행해주시면 됩니다.\n      ")])]),i("section",[i("h3",[t._v("코딩 끝! 다음은 세팅...?")]),i("div",{staticClass:"fragment"},[i("div",{staticStyle:{display:"inline-block",width:"30%","vertical-align":"top"}},[i("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:"/blog/static/slides/image/pwa/folder1.png"}})]),i("div",{staticStyle:{display:"inline-block",width:"30%","vertical-align":"top"}},[i("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:"/blog/static/slides/image/pwa/folder2.png"}})])]),i("aside",{staticClass:"notes"},[t._v("\n        src 디렉토리에 이전에 vue 프로젝트와 동일하게 프로젝트를 진행하셨다면 위 경로들을 보셔야 합니다.\n        빌드 설정과 앱 설치 시의 설정인 manifest 설정입니다.\n        앞서 링크를 걸어놨던 구글 pwa 튜토리얼와 vue-pwa-template를 하면서\n        해결하기에 시간이 조금 소요되었던 내용입니다.\n\n        오늘 발표의 내용은 이것에 대한 내용이 대부분입니다.\n      ")])])]),i("section",[i("section",[i("h2",[t._v("3. 사용하면서 어려웠던 부분")]),i("div",[t._v("\n        앱 개발 후 "),i("a",{attrs:{href:"https://developers.google.com/web/fundamentals/codelabs/?hl=ko",target:"_blank"}},[t._v("구글 pwa 튜토리얼")]),t._v("\n        을 참고하여 세팅을 시작\n      ")]),i("aside",{staticClass:"notes"},[t._v("\n        앱 개발을 마치고 튜토리얼을 보면서 세팅을 시작했습니다. 참고하여 세팅을 시작했습니다.\n        제가 준비한 예제에선 production 모드에만 세팅을 했습니다 ^^; 그 이유는 뒤에서 설명드릴게요.\n      ")])]),i("section",[i("h3",[t._v("3-1. Service Worker 등록하기")]),i("div",[t._v("기본 방법")]),i("div",[i("div",{staticStyle:{display:"inline-block",width:"48%","vertical-align":"top"}},[i("pre",[i("code",{staticStyle:{"font-size":"15px"},attrs:{"data-trim":"","data-noescape":""}},[t._v("\n            // 기본적인 Service Worker 등록 방법 (자신의 코드)\n            navigator.serviceWorker\n              .register('./service-worker.js')\n              .then(function() {\n              console.log('Service Worker Registered');\n            });\n          ")])])]),i("div",{staticStyle:{display:"inline-block",width:"48%"}},[i("pre",[i("code",{staticStyle:{"font-size":"15px"},attrs:{"data-trim":"","data-noescape":""}},[t._v("\n            // 기본적인 Service Worker 파일\n            // self는 ServiceWorkerGlobal Scope를 지칭\n            self.addEventListener('install', () => {\n              self.skipWaiting()\n            });\n\n            self.addEventListener('activate', () => {\n              self.clients.matchAll({ type: 'window' })\n                .then(windowClients => {\n                for (let windowClient of windowClients) {\n                  // ...do someting!\n                  windowClient.navigate(windowClient.url);\n                }\n              });\n            });\n          ")])])])]),i("aside",{staticClass:"notes"},[t._v("\n        service worker는 처음에 말씀드린대로 브라우저와 별개로 돌기 때문에,\n        현재 브라우저에 등록을 시켜줘야 합니다. service worker 에서는 여러가지 이벤트를 걸 수 있고\n        코드에서는 install 했을 때와, caching이 끝나고 activate가 될 때의 이벤트 리스너 입니다.\n      ")])]),i("section",[i("h3",[t._v("3-1. Service Worker 등록하기")]),i("div",[t._v("webpack.dev.conf.js 방법")]),i("div",{staticStyle:{display:"inline-block",width:"48%","vertical-align":"top"}},[i("pre",[i("code",{staticStyle:{"font-size":"15px"},attrs:{"data-trim":"","data-noescape":""}},[t._v("\n          // in webpack.dev.conf.js\n          ...\n          plugins: [\n            new HtmlWebpackPlugin({\n              filename: 'index.html',\n              template: 'index.html',\n              inject: true,\n              serviceWorkerLoader: `<script>\n                ${fs.readFileSync(\n                  path.join(__dirname,\n                  './service-worker-dev.js'),\n                  'utf-8'\n                )}\n              <\/script>`\n            }),\n            ...\n          ]\n        ")])])]),i("div",{staticStyle:{display:"inline-block",width:"48%"}},[i("pre",[i("code",{staticStyle:{"font-size":"15px"},attrs:{"data-trim":"","data-noescape":""}},[t._v("\n          // in service-worker-dev.js\n          self.addEventListener('install', () => {\n            self.skipWaiting()\n          });\n\n          self.addEventListener('activate', () => {\n            self.clients.matchAll({ type: 'window' })\n            .then(windowClients => {\n              for (let windowClient of windowClients) {\n                // ...do someting!\n                windowClient.navigate(windowClient.url);\n              }\n            });\n          });\n        ")])])]),i("aside",{staticClass:"notes"},[t._v("\n        vue-pwa-template dev 모드에서는 webpack에 의해 service-worker-dev.js가\n        불러져 옵니다. 그런데, register 부분이 없이 service worker의\n        event listener만 있습니다. 사실 그래서 dev 모드에서는 바로 사용을 할 수 없습니다.\n        localhost에서 사용은 할 수 있지만, 이 부분에 대한 설정을 따로 해줘야 합니다.\n      ")])]),i("section",[i("h3",[t._v("3-1. Service Worker 등록하기")]),i("div",[t._v("webpack.prod.conf.js 방법")]),i("div",{staticStyle:{display:"inline-block",width:"48%","vertical-align":"top"}},[i("pre",[i("code",{staticStyle:{"font-size":"15px"},attrs:{"data-trim":"","data-noescape":""}},[t._v("\n          // service worker caching in webpack.prod.conf.js\n          plugins: [\n            ...\n            new SWPrecacheWebpackPlugin({\n              cacheId: 'CACHE_ID',\n              filename: 'service-worker.js',\n              staticFileGlobs: ['dist/**/*.{js,html,css}'],\n              minify: true,\n              stripPrefix: 'dist/'\n            })\n            ...\n          ]\n        ")])])]),i("div",{staticStyle:{display:"inline-block",width:"48%"}},[i("pre",[i("code",{staticStyle:{"font-size":"15px"},attrs:{"data-trim":"","data-noescape":""}},[t._v("\n          // in service-worker-prod.js\n          ...\n          window.addEventListener('load', function() {\n            if ('serviceWorker' in navigator &&\n                (window.location.protocol === 'https:'\n                || isLocalhost)) {\n              navigator.serviceWorker\n              .register('service-worker.js')\n              .then(function(registration) {\n                // ...someting to do!\n              }).catch(function(e) {\n                console.error('err sw registration');\n              });\n            }\n          });\n          ...\n        ")])])]),i("aside",{staticClass:"notes"},[t._v("\n        production 모드에서는 dev와 마찬가지로 webpack.prod.conf.js에\n        HtmlWebpackPlugin 라이브러리가 있지만, 추가적으로\n        SWPrecacheWebpackPlugin 라이브러리가 있습니다.\n        그리고 service worker 파일에 register가 있죠.\n      ")])]),i("section",[i("h3",[t._v("3-2. Webpack 설정하기")]),i("div",[t._v("SWPrecacheWebpackPlugin 라이브러리는 뭐하는 앤데...")]),i("br"),i("div",{staticClass:"fragment"},[t._v("\n        =>기본적인 설정 내용에 따라 추가 Service Worker를 자동으로 생성해주는 놈!\n      ")]),i("aside",{staticClass:"notes"},[t._v("\n        여기서 혹시 이상한 점을 생각하신 분 있으신가요?\n        네, production 모드에서는 service worker event listener가 빠져있네요.\n        기본적인 설정 내용으로 Service Worker를 생성해줬으니, 제가 원하는\n        event Listener는 아직 안붙어있습니다. 그래서 SWPrecacheWebpackPlugin 라이브러리를\n        뒤져보니 runtimeCaching, importScripts 라는 놈들이 있더군요.\n      ")])]),i("section",[i("h3",[t._v("3-2. Webpack 설정하기")]),i("div",[i("div",{staticStyle:{display:"inline-block",width:"48%","vertical-align":"top"}},[i("pre",[i("code",{staticStyle:{"font-size":"15px"},attrs:{"data-trim":"","data-noescape":""}},[t._v("\n            // API_CACHE_PATTERN은 캐시할 url\n            new SWPrecacheWebpackPlugin({\n              cacheId: 'seouldrinkerpwa',\n              filename: 'service-worker.js',\n              staticFileGlobs: ['dist/**/*.{js,html,css}'],\n              minify: true,\n              stripPrefix: 'dist/',\n              "),i("span",{staticStyle:{color:"red"}},[t._v("runtimeCaching: [{\n                urlPattern: API_CACHE_PATTERN,\n                handler: 'networkFirst',\n              }],\n              importScripts: [\n                'sw.js'\n              ]")]),t._v("\n            }),\n          ")])])]),i("div",{staticStyle:{display:"inline-block",width:"48%"}},[i("pre",[i("code",{staticStyle:{"font-size":"15px"},attrs:{"data-trim":"","data-noescape":""}},[t._v("\n            // 이어서\n            new CopyWebpackPlugin([\n              {\n                from: path.resolve(__dirname, '../static'),\n                to: config.build.assetsSubDirectory,\n                ignore: ['.*']\n              },\n              {\n                from: path.resolve(__dirname, './sw.js'),\n                to: '',\n                ignore: ['.*']\n              }\n            ])\n          ")])])])]),i("aside",{staticClass:"notes"},[t._v("\n        runtimeCaching은 시작하면서 바로 캐시를 먹일 url에 대해 패턴으로 입력할 수 있는 설정이고\n        importScripts는 파일로 service-worker의 추가분을 넣을 수 있게 해주는 설정입니다.\n        저는 sw.js파일을 만들었구요, 이렇게 sw.js를 추가해주려면 build 시 sw.js 파일도\n        dist 디렉토리로 넘어가야 하기 때문에 static 파일을 넘기는 CopyWebpackPlugin으로\n        sw.js 파일을 함께 넘겨줍니다. sw.js 파일은 이전 service worker 파일들과 유사합니다.\n\n        이제 딱 service worker가 설정된 pwa 앱을 돌릴 수 있게 되었네요!\n      ")])]),i("section",[i("h3",[t._v("3-3. Service Worker 마무으리!")]),i("div",{staticClass:"fragment"},[t._v("\n        어후... 너무 복잡하다... 결론이 뭔데??\n      ")]),i("br"),i("div",[i("ol",{staticStyle:{"font-size":"32px"}},[i("li",{staticClass:"fragment"},[t._v("기본적으로 자신의 앱 코드 안에 서비스 워커를 등록 시켜주는 register 부분이 있어야 하고,\n            등록 될 Service Worker 파일이 있어야 한다.")]),i("li",{staticClass:"fragment"},[t._v("그러나 vue-pwa-template 의 dev 버전에서는 register 부분이 따로 없다.")]),i("li",{staticClass:"fragment"},[t._v("Production 모드에서는 register 부분이 있으나,\n            서비스 워커를 자동으로 생성해주는 부분만 있다. (커스텀 시, 설정이 필요)")]),i("li",{staticClass:"fragment"},[t._v("Production 모드에서 사용하려면 webpack설정을 조금 바꿔줘야 하는데\n            문서가 쪼오금... 친절하진 않음.")])])]),i("aside",{staticClass:"notes"},[t._v("\n        service worker에서의 결론은 바로 사용할 수 없다는 점입니다. dev모드, production 모드\n        상관없이 기본적인 설정이 필요하다는 점이죠.")])])]),i("section",[i("h2",[t._v("4. Push Notification")]),i("div",{staticClass:"fragment",staticStyle:{"text-align":"left"}},[t._v("사실 Vue에서의 세팅을 마치고 튜토리얼대로 하면 끝!")]),i("div",{staticClass:"fragment",staticStyle:{"text-align":"left"}},[t._v("튜토리얼에서 알려주는대로 Service Worker에 Event를 등록해주세요.")])]),i("section",[i("h2",[t._v("Q&A")])]),i("section",[i("h1",[t._v("끝")]),i("div",[t._v("감사합니다.")])])])}]};e.a=s}});