## 아래 질문은 [https://github.com/h5bp/Front-end-Developer-Interview-Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions)에 공유된 널리 쓰이는 질문들 입니다. (추가된 질문이 있을 수 있습니다.)

## 답이 아닌 저의 견해일 뿐입니다.

---
<br/><br/>

# 공통 질문들
<br/><br/>

### Q. 선호하는 개발 환경은 무엇입니까? (운영체제, 에디터, 브라우저, 도구 등등)
 => A. atom, mac, chromium, brew, node, bower, grunt, npm, 등등
<br/><br/>

### Q. 당신이 웹 페이지를 만들 때의 과정을 설명 해주실 수 있을까요?
 => A. 우선 구조를 생각하고 하나씩 구현을 해나간다. 요즘엔 Vuejs를 주로 사용하기 때문에 겹치는 부분을 위주로 많이 살펴본다. 혼자 Full stack으로 만든다면 서버부터 구현하는 편이다.
<br/><br/>

### Q. 점진적 향상법(progressive enhancement)과 우아한 성능저하법(graceful degradation)의 차이를 설명하실 수 있습니까?
 =? A. 점진적 향상법이란 말 그대로 하나하나 순서대로 발전시켜 나가는 방법이다. 웹 페이지라면 html, css, js 순서대로. 우아한 성능저하법이란 가장 최신의 기술 스펙을 맞춰놓고 아래 버전을 하나하나 대응해 나가는 것이다.
<br/><br/>

### Q. "시멘틱 HTML(Semantic HTML)"이 무엇을 뜻하는지 설명해주세요.
 => A. 간결한 html, 직관적인 javascript, 단순화된 debugging.
<br/><br/>

### Q. "최소화(minification)"가 무엇을 하는 것입니까?
 => A. 간단하게는 공백과 주석을 제거하는 등의 코드를 최적화 시키는 방법 중하나라고 생각하면 된다. 암호화를 시킬수도 있다.
<br/><br/>

### Q. 여러 도메인을 이용하여 서버 사이트 데이터를 제공하는 것이 더 나은 이유는 무엇인가요?
 => A. DNS Lookup을 하는데 오래걸리지, 타 도메인에서 데이터를 받는 시간은 정작 오래걸리지 않는다. 적절한 양의 도메인에서 분산적으로 데이터를 호출하는 것이 더 효과적! 병렬로 나누워서 할것인지 직렬로 할것인지의 차이와 비슷하다.
<br/><br/>

### Q. 브라우저가 한 번에 1개의 도메인에서 다운로드 받는 리소스는 몇 개 인가요?
 => A. 브라우저 별로 다르지만 보통 6~8가지.
<br/><br/>

### Q. 만약에 디자인을 표현하기 위해 8개의 다른 Stylesheet를 가지고 있다면, 사이트에서는 어떻게 통합하실 건가요?
 => A. 첫번째로 중복되는 부분을 찾아 제거한다. 그리고 번들로 css 파일들을 합친다.
<br/><br/>

### Q. 당신이 프로젝트에 합류했습니다. 근데 그들은 Tab을 이용하고, 당신은 Space를 사용했습니다. 어떻게 하실건가요?
 => A. :retab!
<br/><br/>

### Q. 간단한 Slideshow 페이지를 만들어보세요.
 => A. 1. page 전체를 로드, 2. 첫 페이지 제외 나머지는 모두 position: absolute; left: 화면의 width만큼으로 보냄 3. 한페이지씩 넘김
<br/><br/>

### Q. 당신의 코드의 성능을 테스트하기 위해서 사용하는 도구가 무엇입니까?
 => A. eslint로 컨벤션을 맞추고 jasmine이나 mocha를 사용.
<br/><br/>

### Q. 올해 당신이 익히고 싶은 기술이 있다면, 그것은 무엇입니까?
 => A. TDD에 대한 기술 발전 및 MVVM 모델을 가진 라이브러리(react or vue) 중 하나에 대한 완벽한 습득?
<br/><br/>

### Q. 페이지 로딩 시간을 줄이는 3가지 방법은?
 => A. css sprite image, js 파일 하나로 합치기, ssr, 파일 및 데이터 gzip으로 사용하기, expire로 캐쉬 기간 늘리기
<br/><br/>

### Q. 표준의 중요함을 설명하세요.
 => A. 만약 새로운 팀원이 도중에 참여했다고 가정하자. 표준이 아닌 다른 명세를 사용하고 있었다면, 팀원이 우리 팀에 바로 적응하지 못하고 적응기를 거쳐야한다는 단점이 있다. 이러한 낭비가 발생할 수 있다.
<br/><br/>

# HTML에 관련된 질문들:
<br/><br/>

### Q. doctype이 무엇을 하는 것이고, 몇 번 지정할 수 있나요?
 => A. 문서의 타입 정의. 1번.
<br/><br/>

### Q. 표준모드(standards mode)와 쿽스모드(quirks mode)의 다른 점은 무엇인가요?
 => A. 문서가 최신이면 standards, 오래된 예전 버전(ie8 미만) 이라면 quirks 이다. 오래된 버전을 최신 브라우저에서 보여주는 것에 목적이 있다.
<br/><br/>

### Q. 다국어가 포함된 페이지는 어떤 방식으로 제공하나요?
 => A. :lang이나 data-set 을 가지고 표현한다. 언에 따라 다른 lang을 표현할 수 있도록 지원해야 한다.
<br/><br/>

### Q. data-속성은 무엇을 하는 것인가요?
 => A. custom attribute.
<br/><br/>

### Q. HTML4에서 콘텐츠 모델(content models)은 무엇이며, HTML5의 그것과 다른 점은 무엇인가요?
 => A. 컨텐트 모델이라는 것은 전체적인 페이지 구성에 대한 내용이다. html4에서는 block element가 주를 이루었지만, html5오면서 같은 block, inline도 다양해졌다는게 특징이다.
<br/><br/>

### Q. 쿠키(Cookies)와 세션저장소(sessionStorage)와 로컬저장소(localStorage)의 차이점을 설명해주세요.
 => A. 1. 쿠키, 2. web storage, 2-1. session storage, 2-2. local storage
- 쿠키 스토리지 - html header에서 서버와 통신하면서 저장
- 웹 스토리지 - 서버와의 통신 없이 저장
- 세션 스토리지 - 윈도우를 끄면 데이터가 사라진다
- local 스토리지 - 데이터 유효기간이 없다.
<br/><br/>

# Javascript에 관련된 질문들:
<br/><br/>

### Q. 사용해 본 Javascript 라이브러리들을 말씀해주세요.
 => A. React, Vue, Response, jQuery, html5shiv, requirejs, commonjs...
<br/><br/>

### Q. Java와 Javascript의 다른 점은 무엇인가요?
 => A. 클래스가 아닐까… 물론 클래스의 이점을 가지기 위해 prototype을 쓰거나 es6에선 class자체를 사용하긴 했지만...
<br/><br/>

### Q. undefined와 undeclared 변수는 무엇인가요?
 => A. undefined는 정의 자체가 안된 변수이고, undeclared는 전역으로 정의가 된 변수. var, const, let 같은 형식이 없다.
<br/><br/>

### Q. 클로져(Closure)는 무엇이며, 어떻게/왜 사용하는지 설명해주세요.
 => A. 클로져를 만들 때 선호하는 패턴은 무엇인가요? argyle (IIFEs에만 적용할 수 있다)
<br/><br/>

### Q. 익명함수(anonymous functions)는 주로 어떤 상황에서 사용하나요?
 => A. 보통 콜백으로 많이 사용한다. promise, setTimeout같은 경우?
<br/><br/>

### Q. "Javascript 모듈 패턴(Javascript module pattern)"이 무엇인지 설명을 해주시고, 언제 사용하는지도 말씀해주시기 바랍니다.
 => A. 네임 스페이스! 보통 여러번 반복되어 사용되는 코드를 모듈화 할 때 사용한다.
<br/><br/>

### Q. 당신의 코드를 어떻게 구성하는지?(모듈 패턴, Class기반 상속?)
 => A. 둘 다. 개인 프로젝트는 주로 es6를 사용하기 때문에 class 기반으로 많이 사용하고, 회사 프로젝트는 모듈 패턴을 주로 사용한다.
<br/><br/>

### Q. 호스트 객체(Host Objects)와 네이티브 객체(Native Objects)의 차이점은 무엇인가요?
 => A. 네이티브 - 기본적으로 있는 객체 - Math같은…? 호스트 - host마다 다른것. window나 global같은.
<br/><br/>

### Q. attribute와 property의 차이점은?
 => A. attr은 속성으로, html에 표기되는 값 자체를 나타내고 property는 js의 속성이라고 말하면 될 것 같다.
\<a href="#test"\> 라고 했을때 a의 href attr 는 #test이고 property는 http://~~~.com#test 가 될 것 이다.
<br/><br/>

# jQuery에 연관된 질문들:.
<br/><br/>

### Q. "체이닝(Chaining)"에 대해서 설명 하세요.
 => A. return을 this로 받아서 함수가 계속 연결되어 다음 function을 연결지어 사용하는 것.
<br/><br/>

### Q. .end()는 무엇을 하는 것입니까?
 => A. 체이닝을 사용할 때, 이전 태그로 돌아가는 기능
<br/><br/>

### Q. 이벤트 핸들러 선언 시, 언제 그리고 왜 namespace를 부여하는지를 설명해주세요.
 => A. 최초에 객체에 값이 있는지 없는지 모르니 var a = a || {}; 와 같은 방식으로 선언한다.
<br/><br/>

### Q. .get(),[] 그리고 .eq()의 차이점이 무엇인가요?
 => A. jQuery의 get과 Map의 get은 다르다. - es2015 / get은 ajax를 get방식으로 보내는 것, []는 기본 array, eq는 child의 몇번째 요소를 고를지에 대한 숫서 picker라고 생각하면 된다.
<br/><br/>

### Q. .bind(), .live()그리고 .delegate()의 차이점이 무엇인가요?
 => A. .bind () 메소드는 이벤트 유형과 이벤트 핸들러를 해당 DOM 요소에 직접 등록합니다.
.live 메서드는 이벤트 처리기를 연결된 선택기 및 이벤트 정보와 함께 루트 수준 문서에 연결합니다. 이 정보를 문서에 등록함으로써, 하나의 이벤트 핸들러가 버블 링 (a.k.a. 위임, 전파) 된 모든 이벤트에 사용될 수 있습니다.
.delegate () 선택기 / 이벤트 정보와 함께 정렬되지 않은 목록 ( "#members")에 이벤트 처리기를 연결합니다. 이는 정보를 항상 문서에 첨부하는 .live () 메서드보다 훨씬 효율적입니다.
<br/><br/>

### Q. $과 $.fn 차이점이 무엇인지 설명 해주시오. 혹은, $.fn가 무엇인지 설명해주세요.
 => A. $는 jquery 자체를 말하는 것이고, $.fn은 jquery의 prototype을 말하는 것이다. jquery에 기능을 추가하고 다른 jquery 객체에서 custom 기능을 사용하기 위해서는 $.fn에 선언을 해야 한다.
<br/><br/>

### Q. 다음 Selector를 최적화 해주세요. : $(".foo div#bar:eq(0)”)
 => A. $(‘#bar’).eq(0)
<br/><br/>

# CSS 관련 질문들:
<br/><br/>

### Q. "reset" CSS가 무엇인지, 어떻게 유용한지 설명 해주세요.
 => A. 코딩 시작 전, 가장 첫 css로 모든 요소를 초기화하는 것을 나타냄 ex) margin: 0; padding: 0; 등등…
<br/><br/>

### Q. Floats가 어떻게 동작하는지 설명해주세요.
 => A. 정렬을 위해 사용. 없애려면 clear가 필요하다. 난 보통 clear를 a:after {content: ''; display: block; clear: both;} 로 사용한다.
<br/><br/>

### Q. CSS 스프라이트(CSS Sprites)를 설명하고, 페이지나 사이트를 어떻게 향상시키는지 설명하시오.
 => A. css sprite image, js 파일 하나로 합치기, ssr, 파일 및 데이터 gzip으로 사용하기, expire로 캐쉬 기간 늘리기
 css sprite란, 반복적으로 많이 쓰이는 아이콘 같은 파일을 한 파일로 합쳐서 위치에 따라 사용하는 것.
<br/><br/>

### Q. IE box model과 W3C box model의 차이점을 설명하시오.
 => A. width, height를 정하는 기준으로 기본값은 content-box이다. content, padding, border, margin에서 content만.  border-box는 border까지로 범위를 넓히는 것이 W3C 기본 정의. 그러나 IE에서는 border-box가 기본이 된다.
<br/><br/>

### Q. Image Replacement를 사용해야 할 때, 선호하는 기술과 언제 사용하는지를 설명 해주세요.
 => A. 딱히 기술은 없음. alt attr을 주로 사용한다. 시각장애인이나 로딩이 제대로 되지 않았을때 대비! 시각 장애인들을 위한 screen reader나 이미지 로드에 실패했을때를 위해 사용하는 것으로 주로 img 태그의 alt 속성을 사용하거나
background-image의 경우 대체할 수 있는 태그로 이미지에 대한 설명을 쓰고 background image에 대한하는 태그를 숨긴다.
<br/><br/>

### Q. CSS 요소핵(CSS property hacks)을 조건부적으로 .css파일안에 넣으시나요 혹은 다른 방식이 있나요?
 => A. <!—[if IE 7]><![endif]—> 조건을 넣을 수 있음. 그러나 모던한 웹 브라우저를 활용한 사이트를 만들기 때문에 잘 사용하지 않는다.
넣는다면 따로 css로 빼서 사용한다.
<br/><br/>

### Q. 컨텐츠를 안보이게 하는 기술들의 차이점을 설명하시오.(그리고 스크린 리더(Screen readers)에서 접근이 가능한 방법은?)
 => A. display는 아예 위치를 없애버림. visibility는 보이는 것만 숨김. 위치에는 있음. (width, height 0주고 overflow hidden 줘도 됨.)
<br/><br/>

### Q. 그리드 시스템(Grid system)을 사용한 적이 있나요? 있다면 어떠한 것을 선호하나요?
 => A. 960, 1080 width에 맞추고, 12분할함. (12의 배수) 제일 처음은 역시 bootstrap.
<br/><br/>

### Q. 미디어 쿼리(media queries)를 사용한 적이 있나요? 혹은 모바일에 맞는 layout과 CSS를 사용한 적이 있나요?
 => A. 반응형 웹사이트를 만들때 사용해본 적이 있다.
<br/><br/>

### Q. SVG를 스타일링 하기 위한 편한 방법이 있나요?
 => A. 그래픽 결과물과 css를 따로 분리하거나, svg에 style을 추가한다. -> xml parser를 위해  <style type=“text/css"><![CDATA{ a {...} }}></style>를 꼭 넣어주자.
<br/><br/>

### Q. 인쇄를 하기 위해 웹페이지를 어떻게 최적화 하나요?
 => A. media query를 사용한다 -> print
<br/><br/>

### Q. 효율적인 CSS를 작성하기 위한 "비법(gotchas)"은 어떤 게 있나요?
 => A. jquery에만 있는 선택자는 피하기, 최대한 ID Selector, Class Selector 구분해서 사용하기, 상속 사용하기 (전처리 라이브러리 사용 굿!)
<br/><br/>

### Q. CSS 전처리(CSS preprocessors)를 사용해보셨나요? 그렇다면, 사용 경험에 기반해 좋았던 점과 나빴던 점을 설명해주세요.
 => A. less를 많이 사용하였고, 많이 쓴다. (sass, scss는 블로그에서만) 함수형태와 mixin 형태로 사용할 수 있다는게 매우 좋았다. 단점은 구조적으로 만들 수 있는 만큼, 구조에 대한 책임(구조를 만드는 책임)이 나에게 있다는 점이다.
<br/><br/>

### Q. 페이지에서 표준 폰트가 아닌 폰트 디자인을 사용할 때 어떤 방식으로 처리하시나요?(웹폰트를 제외하고)
 => A. eot, woff, woff2 확장자의 이미지 사용
<br/><br/>

### Q. CSS Selector가 어떠한 원리로 동작하는지 설명하시오.
 => A. 트리구조인 CSSOM을 순서대로 도는것으로 알고있다. 순서는 오른쪽에서 왼쪽으로, ul > li > #… 라면 #… 부터해서 왼쪽으로 올라간다. 그래서 오른쪽을 최대한 detail하게 써줘야 한다.
<br/><br/>

---
<br/>

오늘은 Q&A만 무지하게 적어놓는 포스팅이었네요.<br/>
위 질문들에 대한 저의 견해가 더욱 발전하였으면 좋겠습니다.<br/>
프론트 엔지니어 면접 준비하시거나 공부하시는 분들께 도움이 되시길 바래요!!
