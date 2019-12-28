webpackJsonp([13],{"//5A":function(t,a,s){"use strict";var i=function(){var t=this.$createElement;this._self._c;return this._m(0)};i._withStripped=!0;var e={render:i,staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"slides"},[s("section",{attrs:{ondblclick:"RevealNotes.open();"}},[s("h2",[t._v("How to use RxJs")]),s("h3",[t._v("NHN Bugs")]),s("p",[s("small",[t._v("Created by "),s("a",{attrs:{href:"https://jicjjang.github.io/blog",target:"_blank"}},[t._v("Junseok, Choi")])])]),s("aside",{staticClass:"notes"},[t._v("\n      안녕하세요. 최준석입니다."),s("br"),t._v("\n      RxJs에 대한 정의와 원리, 사용법 등에 대해 간단히 조사한 내용으로\n      발표를 진행해보겠습니다.\n    ")])]),s("section",[s("div",[s("h2",[t._v("순서")]),s("ul",{staticStyle:{"list-style":"none",margin:"0"}},[s("li",{staticClass:"fragment"},[t._v("1. Rx란 뭔가요?")]),s("li",{staticClass:"fragment"},[t._v("2. 간단한 예제")]),s("li",{staticClass:"fragment"},[t._v("3. 우리의 현재와 미래")]),s("li",{staticClass:"fragment"},[t._v("Q & A")])])])]),s("section",[s("section",[s("h2",[t._v("1. Rx란 뭔가요?")]),s("h3",{staticClass:"fragment"},[t._v("Rx에 대한 정의")]),s("div",{staticClass:"fragment",staticStyle:{width:"70%",margin:"0 auto"}},[s("img",{staticStyle:{display:"block",margin:"5px auto"},attrs:{src:"/blog/static/slides/image/rxjs/intro1.jpg"}}),s("img",{staticStyle:{display:"block",margin:"5px auto"},attrs:{src:"/blog/static/slides/image/rxjs/intro1_trans.jpg"}})]),s("aside",{staticClass:"notes"},[t._v("\n        Rx라는건 ReactiveX의 약자입니다. 요즘 많이들 사용한다는\n        반응형 프로그래밍, 함수형 프로그래밍을 일컫는 말인데요.\n        자바스크립트에만 있는게 아니고 대부분의 언어가 있다고 보시면 됩니다.\n      ")])]),s("section",[s("h3",[t._v("반응형이란건")]),s("div",{staticClass:"fragment",staticStyle:{width:"100%",margin:"0 auto"}},[s("img",{staticStyle:{display:"block",width:"60%",margin:"0 auto"},attrs:{src:"/blog/static/slides/image/rxjs/example.jpg"}})]),s("aside",{staticClass:"notes"},[t._v("\n        반응형이란건 이 코드와 같습니다. 뒤에 수정된 결과 값에\n        앞에서 정의되었던 수식이 수정되기도 하죠.\n      ")])]),s("section",[s("h3",[t._v("가장 대표적인 예제")]),s("div",{staticClass:"fragment",staticStyle:{"max-width":"100%",margin:"auto"}},[s("img",{staticStyle:{display:"block",width:"60%",margin:"0 auto"},attrs:{src:"/blog/static/slides/image/rxjs/excel.jpg"}})]),s("aside",{staticClass:"notes"},[t._v("\n        가장 대표적인 예제는 엑셀입니다. 앞에서 정의된 수식도\n        뒤에 수정된 엑셀 한 칸의 값에 결과들이 바뀌기도 하니까요.\n      ")])]),s("section",[s("h3",[t._v("자세하게 알아보겠습니다")])]),s("section",[s("h3",[t._v("Reactive Programming")]),s("div",{staticClass:"fragment",staticStyle:{display:"inline-block",margin:"0 20px"}},[s("img",{staticStyle:{background:"none",border:"none","box-shadow":"none"},attrs:{src:"/blog/static/slides/image/rxjs/arrow_left_down.png"}}),s("div",{staticStyle:{"text-align":"left"}},[t._v("Observable")])]),s("div",{staticClass:"fragment",staticStyle:{display:"inline-block",margin:"0 20px"}},[s("img",{staticStyle:{background:"none",border:"none","box-shadow":"none"},attrs:{src:"/blog/static/slides/image/rxjs/arrow_right_down.png"}}),s("div",{staticStyle:{"text-align":"right"}},[t._v("Data Flow")])]),s("aside",{staticClass:"notes"},[t._v("\n        reactive programming은 기본적으로 Observable과 Data Flow로 나뉩니다.\n        이 둘을 하나씩 살펴보겠습니다.\n      ")])]),s("section",[s("h3",[t._v("Observer Pattern")]),s("div",{staticClass:"fragment"},[s("div",{staticClass:"fragment fade-out",staticStyle:{position:"absolute"}},[s("div",{staticStyle:{display:"inline-block",width:"40%",margin:"0 1%"}},[s("img",{staticStyle:{display:"block",width:"100%",margin:"0 auto"},attrs:{src:"/blog/static/slides/image/rxjs/observer.jpg"}}),s("div",{staticStyle:{"font-size":"15px"}},[s("a",{staticStyle:{"word-break":"break-all"},attrs:{href:"https://ko.wikipedia.org/wiki/%EC%98%B5%EC%84%9C%EB%B2%84_%ED%8C%A8%ED%84%B4",target:"_blank"}},[t._v("출처 - https://ko.wikipedia.org/wiki/%EC%98%B5%EC%84%9C%EB%B2%84_%ED%8C%A8%ED%84%B4")])])]),s("div",{staticStyle:{display:"inline-block",width:"40%",margin:"0 1%","vertical-align":"top"}},[s("img",{staticStyle:{display:"block",width:"100%",margin:"0 auto"},attrs:{src:"/blog/static/slides/image/rxjs/rx_observer.jpg"}})])]),s("div",{staticClass:"fragment fade-in"},[s("div",{staticStyle:{display:"inline-block",margin:"0 20px"}},[s("img",{staticStyle:{background:"none",border:"none","box-shadow":"none"},attrs:{src:"/blog/static/slides/image/rxjs/arrow_left_down.png"}}),s("div",{staticStyle:{"text-align":"left"}},[t._v("Observable")])]),s("div",{staticClass:"fragment",staticStyle:{display:"inline-block",margin:"0 20px"}},[s("img",{staticStyle:{background:"none",border:"none","box-shadow":"none"},attrs:{src:"/blog/static/slides/image/rxjs/arrow_down.png"}}),s("div",{staticStyle:{"text-align":"center"}},[t._v("Observer")])]),s("div",{staticClass:"fragment",staticStyle:{display:"inline-block",margin:"0 20px"}},[s("img",{staticStyle:{background:"none",border:"none","box-shadow":"none"},attrs:{src:"/blog/static/slides/image/rxjs/arrow_right_down.png"}}),s("div",{staticStyle:{"text-align":"right"}},[t._v("Subscribe")])])])]),s("aside",{staticClass:"notes"},[t._v("\n        옵저버 패턴은 위키피디아에도 정의가 되어있지만, 이벤트 기반 프로그래밍에서\n        대표적으로 쓰이느 패턴입니다. Observer가 Rx에서 말하는 Observable을 바라보는데,\n        구독(Subscribe)을 하면 등록되어있는 해당 Observable을 받아 볼 수 있는 구조입니다.\n        Rx에서는 Observable에 등록한 이벤트들에 대해 구독과 구독 취소들로 이루어졌다고\n        할 수 있습니다.\n      ")])]),s("section",[s("h3",[t._v("Observable")]),s("div",{staticStyle:{display:"inline-block","max-width":"400px","vertical-align":"top",margin:"0 20px"}},[s("div",{staticClass:"fragment",staticStyle:{"text-align":"center"},attrs:{"data-fragment-index":"0"}},[t._v("Hot Observable")]),s("img",{staticClass:"fragment",staticStyle:{display:"block",margin:"0 auto"},attrs:{"data-fragment-index":"3",src:"/blog/static/slides/image/rxjs/youtube_live.jpg"}})]),s("span",{staticClass:"fragment",staticStyle:{color:"red","vertical-align":"top"},attrs:{"data-fragment-index":"1"}},[t._v("vs")]),s("div",{staticStyle:{display:"inline-block","max-width":"400px","vertical-align":"top",margin:"0 20px"}},[s("div",{staticClass:"fragment",staticStyle:{"text-align":"center"},attrs:{"data-fragment-index":"2"}},[t._v("Cold Observable")]),s("img",{staticClass:"fragment",staticStyle:{display:"block",margin:"0 auto"},attrs:{"data-fragment-index":"4",src:"/blog/static/slides/image/rxjs/youtube.jpg"}})]),s("aside",{staticClass:"notes"},[t._v("\n        Observable은 Hot과 Cold로 나뉩니다.\n        Observable은 기본적으로 구독자, 즉 Subscriber가 있을 경우에는\n        Observable의 이벤트가 발생할 경우 구독자들에게 이벤트를 전달합니다.\n        그런데 구독자가 없는경우, Hot Observable은 구독자 여부와 상관없이\n        이벤트를 구독자들에게 전달하고, Cold Observable은 구독자들에게 이벤트를 전달하지 않습니다.\n        Hot Observable은 Youtube Live, Cold Observablesms Youtube VOD 서비스를\n        예로 들 수 있습니다.\n      ")])]),s("section",[s("h3",[t._v("Data Flow")]),s("div",{staticStyle:{display:"inline-block","vertical-align":"top",width:"30%",margin:"0 20px"}},[s("img",{staticClass:"fragment",staticStyle:{display:"block",width:"30%",margin:"0 auto",background:"none",border:"none","box-shadow":"none"},attrs:{"data-fragment-index":"0",src:"/blog/static/slides/image/rxjs/arrow_left_down.png"}}),s("div",{staticClass:"fragment",staticStyle:{"text-align":"left"},attrs:{"data-fragment-index":"0"}},[t._v("Control Flow")]),s("img",{staticClass:"fragment",staticStyle:{display:"block",width:"30%",margin:"0 auto",background:"none",border:"none","box-shadow":"none"},attrs:{"data-fragment-index":"2",src:"/blog/static/slides/image/rxjs/arrow_down.png"}}),s("ul",{staticClass:"fragment",staticStyle:{display:"block"},attrs:{"data-fragment-index":"2"}},[s("li",[t._v("if / else if / else")]),s("li",[t._v("for / for-each / for-in")]),s("li",[t._v("while / switch")]),s("li",[t._v("...")])])]),s("div",{staticStyle:{display:"inline-block","vertical-align":"top",width:"30%",margin:"0 20px"}},[s("img",{staticClass:"fragment",staticStyle:{display:"block",width:"30%",margin:"0 auto",background:"none",border:"none","box-shadow":"none"},attrs:{"data-fragment-index":"1",src:"/blog/static/slides/image/rxjs/arrow_right_down.png"}}),s("div",{staticClass:"fragment",staticStyle:{"text-align":"right"},attrs:{"data-fragment-index":"1"}},[t._v("Data Flow")]),s("img",{staticClass:"fragment",staticStyle:{display:"block",width:"30%",margin:"0 auto",background:"none",border:"none","box-shadow":"none"},attrs:{"data-fragment-index":"3",src:"/blog/static/slides/image/rxjs/arrow_down.png"}}),s("ul",{staticClass:"fragment",staticStyle:{display:"block"},attrs:{"data-fragment-index":"3"}},[s("li",[t._v("recursion")]),s("li",[t._v("pipe(. 연산자)")]),s("li",[t._v("...")])])]),s("aside",{staticClass:"notes"},[t._v("\n        이제 앞으로 돌아가서 Data Flow에 대해 알아보겠습니다.\n        프로그래밍에서의 로직은 Control Flow와 Data Flow로 나뉩니다.\n        기존에 주로 사용하는 연산자들이 Control Flow에 속하고,\n        물론 많이 사용하지만, Control Flow 보다는 적게 사용하는 Data Flow는\n        보통 리턴 값들의 체이닝에 의해 진행됩니다.\n        "),s("br"),s("br"),t._v("\n        Iterable 에서 Observable로 변하게 된 것입니다.\n      ")])]),s("section",[s("h3",[t._v("요약하자면")]),s("ul",[s("li",{staticClass:"fragment"},[t._v("Rx는 Event stream과 Data를 쉽게 컨트롤하도록 도와줌")]),s("li",{staticClass:"fragment"},[t._v("가독성 좋은 비동기 코드를 체이닝으로 쉽게 작성 가능")]),s("li",{staticClass:"fragment"},[t._v("초기 진입장벽이 어느 정도 존재한다는 단점이 있음")])]),s("aside",{staticClass:"notes"},[t._v("\n        기존에 사용하던 명령형 구조에서 데이터의 흐름을 이해해야하는\n        반응형 프로그래밍으로의 개념 전환이 초기의 진입 장벽이 될 수 있습니다.\n        실시간은 아니지만, IE같은 장벽을 차치하고\n        벅스같은 스트리밍 서비스에 충분히 도움이 될거라 생각합니다.\n      ")])])]),s("section",[s("section",[s("h2",[t._v("2. 간단한 예제")]),s("h3",{staticClass:"fragment"},[t._v("Rx의 종류")]),s("div",[s("span",{staticClass:"fragment"},[t._v("RxJava, ")]),s("span",{staticClass:"fragment"},[t._v("RxJs, ")]),s("span",{staticClass:"fragment"},[t._v("Rx.Net, ")]),s("span",{staticClass:"fragment"},[t._v("RxScala, ")]),s("span",{staticClass:"fragment"},[t._v("Etc...")])]),s("aside",{staticClass:"notes"},[t._v("\n        처음 자료를 찾아보게 된 것도 안드로이드팀에선 RxJava 스터디를\n        하고있더라고요. 기존에도 RxJs라는걸 알고는 있었지만\n        한번 더 찾아보게 된 계기가 되었습니다.\n      ")])]),s("section",[s("h2",[t._v("RxJs 예제")]),s("div",[s("a",{attrs:{href:"https://jsfiddle.net/junseokchoi/Lsm48mpd/10/",target:"_blank"}},[t._v("https://jsfiddle.net/junseokchoi/Lsm48mpd/")])])])]),s("section",[s("section",[s("h2",[t._v("3. 우리의 현재와 미래")]),s("h3",{staticClass:"fragment"},[t._v("왜 RxJs로 눈을 돌리게 되었나?")]),s("ul",[s("li",{staticClass:"fragment"},[t._v("Callback hell이 일어나는 부분이 많음")]),s("li",{staticClass:"fragment"},[t._v("Promise와 Async/Await에 대한 부재 (ECMA 버전 이슈)")]),s("li",{staticClass:"fragment"},[t._v("jQuery에 있는 Deffered라도... "),s("br"),t._v("(보안상 이슈가 생길 수 있어서 X)")])]),s("aside",{staticClass:"notes"},[t._v("\n        RxJs를 찾아보게 된건 CallBack Hell에 대한 이슈가 가장 컸습니다.\n        setTimeout으로 처리하는 부분이 많은데, 이 부분들에 대해 해결해야 하나 생각해봤습니다.\n        그러던 찰나에 RxJs를 찾게 되었고, Promise나 Async/Await가 아닌 새로운 해결책이었습니다.\n      ")])]),s("section",[s("h3",[t._v("그럼 이제 우리도 RxJs를 쓰자!!!")]),s("div",{staticClass:"fragment",staticStyle:{width:"100%",margin:"0 auto"}},[s("img",{staticStyle:{display:"block",widht:"50%",margin:"0 auto",background:"none",border:"none","box-shadow":"none"},attrs:{src:"/blog/static/slides/image/rxjs/support.jpg"}})]),s("aside",{staticClass:"notes"},[t._v("\n        하지만 쉬울리 없죠 ㅠㅠ... 지원하는 버전이 Promise나 Async/Await를 사용할 수 있는 환경과\n        거의 유사하기 때문에 지금 당장 벅스 서비스에 도입할 순 없을 것 같습니다.\n        "),s("br"),s("br"),t._v("\n        저의 발표는 여기까지고요. 간단한 rxjs에 대한 소개 마치겠습니다.\n      ")])])]),s("section",[s("section",[s("h2",[t._v("Q&A")])]),s("section",[s("h3",[t._v("참고하면 좋은 사이트 모음")]),s("div",[s("div",[s("a",{staticStyle:{"font-size":"30px"},attrs:{href:"https://www.slideshare.net/sunhyouplee/vuejs-reactive-programming-vuetiful-korea-2nd",target:"_blank"}},[t._v("https://www.slideshare.net/sunhyouplee/vuejs-reactive-programming-vuetiful-korea-2nd")])]),s("div",[s("a",{staticStyle:{"font-size":"30px"},attrs:{href:"http://sculove.github.io/blog/2016/06/22/Reactive-Programming/",target:"_blank"}},[t._v("http://sculove.github.io/blog/2016/06/22/Reactive-Programming/")])]),s("div",[s("a",{staticStyle:{"font-size":"30px"},attrs:{href:"https://github.com/CoderK/What-I-Learned-About-RP/blob/master/README.md#rx와-리액티브-프로그래밍2016",target:"_blank"}},[t._v("https://github.com/CoderK/What-I-Learned-About-RP/blob/master/README.md#rx와-리액티브-프로그래밍2016")])]),s("div",[s("a",{staticStyle:{"font-size":"30px"},attrs:{href:"https://github.com/studye/rxjs/wiki/Chapter-1.-The-Reactive-Way",target:"_blank"}},[t._v("https://github.com/studye/rxjs/wiki/Chapter-1.-The-Reactive-Way")])])])])]),s("section",[s("h1",[t._v("끝")]),s("div",[t._v("감사합니다.")])])])}]};a.a=e},GUtS:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("HXNP"),e=s("//5A"),n=s("VU/8")(i.a,e.a,!1,null,null,null);n.options.__file="pages/slides/how-to-use-rxjs.vue",a.default=n.exports},HXNP:function(t,a,s){"use strict";a.a={name:"how-to-use-rxjs",layout:"slides"}}});