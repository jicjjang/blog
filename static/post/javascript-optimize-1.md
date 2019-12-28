5월 연휴 잘 보내셨나요? 저는 연휴와 주말동안 Vue 라이브러리와 간단한 프로그램들을 만드는데 보냈습니다.
회사에서 준 yes24 도서이용권으로 (공짜 책!!!)구매한 자바스크립트 성능 최적화에 대한 간단한 정리를 해보려 합니다.
요점만 집어서! 써보겠습니다 :D

## 1. 로딩과 실행

사용자의 한 Process에서 UI업데이트와 Script 실행을 하지만, 동시에 진행하지는 못합니다. 브라우저는
&lt;script&gt; 태그를 만나면 처리를 중단하고 해당 Script를 실행한 뒤 페이지 분석과 랜더링을 다시 진행합니다.
처리하는 중에 페이지 랜더링이나 사용자의 동작은 완전히 차단되게 됩니다.

### 1-1. 스크립트 위치

&lt;head&gt; 태그 내부에 &lt;script&gt; 태그를 사용하면 안된다는 것은 많이 알려져있습니다.
위에 설명드린 것처럼 &lt;script&gt;를 만나면 진행되던 처리를 중단하고 Script 처리를 진행하기 때문입니다.
그렇기 때문에 &lt;haed&gt; 태그에 Script (외부 파일로드, 내부 스크립트 실행 상관 없이)가 들어갈수록, 많아질수록
사용자는 비어있는 화면을 보는 시간이 늘어나게 됩니다. 그렇기 때문에 &lt;script&gt; 태그는 &lt;body&gt; 태그의
최하단에 위치해야 합니다. 그러면 html 랜더가 끝난 후 실행이 되기 때문에 화면이 `일단` 보여지기 때문에 문제가 없어집니다.

### 1-2. 스크립트 묶기

html 페이지를 분석하는 동안 &lt;script&gt; 태그를 만날수록 코드를 실행할 때의 지연시간이 생깁니다. &lt;script&gt; 태그를
만날 때마다 랜더링이 차단되기 때문입니다. 이런 지연시간을 최소화해야 합니다. 단적인 예로 외부 자바스크립트 25kb 파일 4개보다 100kb 파일 1개가
더 빠르게 로드됩니다.

### 1-3. 비차단 스크립트

Script의 HTTP요청이나 UI업데이트 동안의 브라우저 프로세스 차단은 개발자에게 큰 문제입니다. 25kb 파일 4개보다 100kb 파일1개를 로드하는 방식도
용량이 더 커지게 된다면 &lt;body&gt; 태그의 최하단에 위치한다 해도 사용자의 움직임을 오랫동안 차단하게 만듭니다.
이 문제를 해결하기 위한 방법들이 있습니다.

#### 1-3-1. 지연 스크립트

<figure style="text-align: center;">
    <img src="https://jicjjang.github.io/blog/static/image/javascript/optimize/1/script.jpg" alt="image" style="margin:0 auto;">
</figure>

&lt;script&gt; 태그의 async나 defer 속성을 사용한다면 사용됨과는 상관 없이 스크립트를 load하게 됩니다.

#### 1-3-2. 동적 &lt;script&gt; 태그

DOM을 이용해 페이지 로드 이후, 동적으로 &lt;script&gt; 태그를 만드는 방법이 있습니다.

~~~js
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'file1.js';
document.getElementsByTagName('head')[0].appendChild(script);
~~~

위 코드처럼 &lt;script&gt; 태그를 생성하고 페이지에 추가하는 순간, `file1.js` 파일을 내려받기 시작합니다.
위치는 head, body 어디든 상관 없습니다. 또한, onload 이벤트로 파일을 모두 받았는지 알 수 있습니다.

#### 1-3-3. XMLHttpRequest 스크립트 삽입
흔히 말하는 Ajax 방식입니다. 비동기로 코드를 불러오기 때문에 원하는 시기에 호출을 할 수 있으며,
로드가 된 후에도 바로 데이터를 삽입하는 것이 아니라 사용자가 원할 때, 원하는 곳에 넣을 수 있습니다.
단점은 데이터를 요청하는 페이지와 데이터를 제공하는 페이지가 같은 도메인이어야 한다는 점입니다.

---

오늘 2장까지 바로 진행하겠습니다~
