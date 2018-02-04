읽을수록 모르던 부분이 계속 등장하는데요, 3장도 바로 진행해보겠습니다.

## 3. DOM 스크립팅

DOM 병목이 쉽게 일어나고, 스크립팅 시간이 오래걸리는데

1. DOM에 대한 접근과 수정
2. DOM 요소의 스타일 변경, 화면 재구성을 초래하는 것
3. DOM 이벤트를 통한 사용자 상호작용 처리

3가지를 주제로 진행하겠습니다.

### 3-1. 브라우저 세계의 DOM

브라우저마다 DOM과 DOM 스크립팅에 각각 다른 엔진을 사용합니다.
서로 다른 엔진간의 통신을 하기 때문에 느릴수 밖에 없는데요,
그렇다면 어떻게 성능을 끌어올릴지 알아봅시다.

### 3-2. DOM 접근과 수정

DOM에 접근하기만 해도 리소스를 소모합니다. 그런 상황에서 DOM을 수정한다면?
더욱 많은 리소스를 잡아먹게 되겠죠? 최대한 DOM에 대한 접근을 최소화해야 하기 때문에
수정 및 접근 작업에서 반복문은 최악입니다.

~~~js
function innerHTMLLoop() {
  for (var count = 0; count < 15000; count++) {
    document.getElementById('here').innerHTML += 'a';
  }
}
~~~

앞에서 봤던 이슈와 동일합니다. DOM에 대한 접근이 많아진다면 DOM을 변수에 할당하고 사용해야 합니다.
위 코드는 DOM에 접근할 때 한번, DOM의 값을 바꿀 때 한번, 반복문을 돌 때마다 2번씩 요소에 접근하게 됩니다.

~~~js
function innerHTMLLoop() {
  var content = '';
  for (var count = 0; count < 15000; count++) {
    content += 'a';
  }
  document.getElementById('here').innerHTML += content;
}
~~~

모든 브라우저에서 이처럼 변수에 DOM을 저장하고 사용하는 것이 효과적으로 나타납니다.

---

HTML 컬렉션을 반환하는 메서드에 대해서 알아보겠습니다.

1. document.getElementsByName()
2. document.getElementsByClassName()
3. document.getElementsByTagName()
4. document.images
5. document.links
6. document.forms
7. document.forms[0].elements

이러한 HTML Collection은 동적이기 때문에

~~~javascript
var alldivs = document.getElementsByTagName('div');
for (var i = 0; i < alldivs.length; i++) {
  document.body.appendChild(document.createElement('div'));
}
~~~

위 코드가 무한루프로 동작하게 됩니다. body에 div 태그가 추가될 때마다
alldivs는 동적으로 증가하기 때문에 i가 1씩 증가할 때 alldivs도 1씩 증가하기 때문입니다.
(그렇기 때문에 `느.립.니.다.`)

또한 HTML Collection은 일반 array가 아니기 때문에 반복문보다 느립니다. 그래서 사용할 때에는
반복문에 복사한 뒤 사용해야 합니다.

~~~javascript
function toArray(coll) {
  for (var i = 0, a = [], len = coll.length; i < len; i++) {
    a[i] = coll[i];
  }
  return a;
}
~~~

반복하거나 length에 접근하는 것만으로도 Collection을 갱신해야 하기 때문입니다.

---

DOM의 특정 부분에 접근하는 방법에 대해 알아보겠습니다. childNodes나 nextSibling으로 형제 요소를
선택하여 작업할 수 있는데

~~~javascript
function testNextSibling() {
  val el = document.getElementById('ddd'),
      ch = el.firstChild,
      name = '';

  do {
    name = ch.nodeName;
  } while(ch = ch.nextSibling);
  return name;
}

function testChildNodes() {
  var el = document.getElementById('ddd'),
      ch = el.childNodes,
      len = ch.length,
      name = '';

  for (var count = 0; count < len; count++) {
    name = ch[count].nodeName;
  }
  return name;
}
~~~

둘 중 어떠한 방법을 사용해도 상관이 없습니다. 다만, childNodes 같은 경우엔
length를 캐시한 뒤 사용해야 합니다.

자식요소를 조금 더 세밀하게 정해야 할 때가 있습니다.

1. document.getElementById
2. document.getElementsByName
3. document.getElementsByClassName
4. document.getElementsByTagName

위 4가지 방식 뿐만 아니라

1. document.querySelectorAll('#menu a')
2. document.querySelector('#menu a')

이런 방식 또한 가능합니다. 여러번 질의하는 것 보다는 querySelector가 훨씬 효율적입니다.

### 3-3. 리페인트와 리플로우

브라우저가 데이터를 내려받으면 페이지 구조를 나타내는 DOM 트리와
DOM 트리를 어떻게 표시할 지에 대한 정보를 가진 랜더 트리, 두가지를 만듭니다.

두 트리를 다 만들면 브라우저는 페이지 요소를 표시합니다. (페인트)

resize 이벤트가 발생하거나 비슷한 이벤트가 발생한다면 요소들의 정보를 다시 계산 (리플로우)해야하고
계산 한 뒤 다시 그려줘야 합니다.(리페인트) 리소스를 많이 잡아먹는것이 리플로우인데 배경색만 바꾼다고
가정한다면 리플로우 없이 리페인트만 일어납니다.

이러한 경우 리소스가 많이 소모되지 않기 때문에 성능 저하가 일어나지 않습니다.
그렇기 때문에 리플로우를 최소화 하는 작업이 필수입니다.

리플로우가 일어나는 조건은

- 1. 보이는 (display, visibility)DOM 요소를 추가 혹은 제거
- 2. 요소의 위치가 바뀜
- 3. 요소의 크기가 바뀜
- 4. 텍스트의 내용 변경, 이미지가 다른 크기 이미지로 대체되는 등의 내용 변경
- 5. 페이지를 처음 표시
- 6. 브라우저 창의 크기 변경

어떤 것을 바꾸느냐에 따라 전체를, 일부를 다시 계산합니다.
리플로우를 계속 발생하는 것도 낭비기 때문에 랜더 트리를 큐에 모았다 실행할 수 있습니다.

1. offsetTop, offsetLeft, offsetWidht, offsetHeight
2. scrollTop, scrollLeft, scrollWidht, scrollHeight
3. clientTop, clientLeft, clientWidht, clientHeight

이런 속성은 레이아웃을 바로바로 반영해야 하므로 브라우저가 랜더링 큐에 대기중인 랜더 트리와 함께
강제로 리플로우를 진행합니다. 그렇기 때문에 스타일을 바꿀 때 `위 속성을 쓰지 않는게 중요합니다.`

~~~javascript
var computed = document.body.style;
var tmp = '';

bodyStyle.color = 'red';
tmp = bodyStyle.backgroundColor;
bodyStyle.color = 'white';
tmp = bodyStyle.backgroundImage;
bodyStyle.color = 'green';
tmp = bodyStyle.backgroundAttachment;
~~~

위 코드처럼 레이아웃을 속성을 변경하고, 값을 가져오는 일을 번갈아가며 하는 것을 매우 비효율적 이므로

~~~javascript
var computed = document.body.style;
var tmp = '';

bodyStyle.color = 'red';
bodyStyle.color = 'white';
bodyStyle.color = 'green';
tmp = bodyStyle.backgroundColor;
tmp = bodyStyle.backgroundImage;
tmp = bodyStyle.backgroundAttachment;
~~~

이렇게 같은 일을 한꺼번에 몰아주는 것이 효율적이고 더 빠릅니다.

그리고

~~~javascript
var el = document.getElementById('divv');
el.style.borderLeft = '1px';
el.style.borderRight = '2px';
el.style.padding = '5px';
~~~

최악의 경우 리플로우가 3번 일어나는 코드입니다. 이런 코드는

~~~javascript
var el = document.getElementById('divv');
el.style.cssText = 'border-left: 1px; border-right: 2px; padding: 5px;'
~~~

이렇게 바꿔줄 수 있습니다. 다른 방법으론 class를 토글하는 방법도 있습니다.

---

하지만 어쩔 수 없이 여러번 계산을 해야 할 때에는 DOM의 변경을 문서의 흐름에서 분리하고
다 변경된 후 적용시키는 방법이 있습니다.

데이터를 넣은 &lt;li&gt; 태그를 삽입한다고 가정할 때,
createElement를 통해 li 여러개를 생성한 후, &lt;ul&gt; 태그 안에 넣고
가장 마지막에 DOM에 추가하는 것입니다. 이렇게 하면 리플로우를 최소화할 수 있습니다.

---

애니메이션을 할 때에는 절대 위치를 지정한 후 동작해야합니다.
절대 위치에서는 리플로우가 동작하지 않기 때문에 포지션 변경, 애니메이션, 포지션 복귀
순서로 진행을 해야합니다.

### 3-4. 이벤트 위임

자바스크립트에서 이벤트는 발생 후 부모 요소로 버블링되어 올라가므로 부모 요소에서 자식 요소의
이벤트를 처리할 수 있습니다.

~~~html
<div id="one">
  <div id="two">
    <a onclick="..."></a>
  </div>
</div>
~~~

위와 같은 코드에서 &lt;a&gt; 태그를 클릭하면 #two 요소, 그 다음으로 #one 요소, 마지막으로 window까지
이벤트가 전파됩니다. 이렇게 이벤트가 퍼져 이벤트 대상이 아닌 다른 요소에서 이벤트를 동작시키는 것을
위임이라고 합니다.

물론 stopPropagation 메서드와 preventDefault 메서드로 위임을 제어할 수 있습니다.

---

3장의 내용은 여기까지 입니다. 프론트엔드에서 가장 중요하다고 생각한 Reflow와 Repaint에 대한 내용이
실려있는 장이었습니다. 앞으로도 많은 내용이 기대되네요!
