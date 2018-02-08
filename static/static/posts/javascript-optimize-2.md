1장에 이어서 2장도 바로 진행하겠습니다~

## 2. 데이터 접근

데이터는 총 4개의 형식으로 이루어집니다.

1. 리터럴 값 (Number, boolean, Object, Array, Function, Regex, null, undefined)
2. 변수
3. 배열 항목
4. 객체 맴버

각 데이터 저장 위치와 브라우저마다 I/O 시간이 모두 다릅니다.

### 2-1. 스코프 관리
자바스크립트의 함수는 객체 (Function의 인스턴스) 입니다.

~~~js
function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
~~~

간단한 add 함수가 있을 때, add 함수의 scope chain 입니다.

<figure style="text-align: center;">
  <img src="https://jicjjang.github.io/blog/static/image/javascript/optimize/2/scope1.jpg" alt="image" style="display:inline-block; width:100%; margin:0 auto;">
</figure>

이 add 함수를 실행할 때의 scope chain의 변화 입니다.

~~~js
var total = add(5, 10);
~~~

<figure style="text-align: center;">
  <img src="https://jicjjang.github.io/blog/static/image/javascript/optimize/2/scope2.jpg" alt="image" style="display:inline-block; width:100%; margin:0 auto;">
</figure>

Activeation object는 생성이 될때마다 만들어졌다 파괴되었다를 반복합니다. 변수를 할당하거나 계산할 때, 등등에서 자신의 값에 맞는 변수를 찾기 위해 scope chain을 검색합니다.
Activation object에 값이 있다면 할당을, 없으면 Global object에서 다시 검색을 진행합니다. 이 검색의 과정이 복잡할수록 성능이 떨어집니다.
성능 개선을 위해선 최대한 지역 변수, Global object에 있는 값들을 사용해야 합니다.


반복되는 전역객체는 할당 후 사용을 해야합니다.

~~~js
var a = document.body,
link = document.getElementsByTagName('a');

document.getElementById...
~~~

가 아닌

~~~js
var doc = document,
bd = doc.body,
link = doc.getElementsByTagName('a')

doc.getElementById...
~~~

와 같은 작업이 필요합니다. 이 예제는 매우 간단하지만 수십, 수백번 전역 객체에 접근을 매번 새로한다고 생각하면 끔찍하네요.

~~~js
function assignEvents() {
  var id = 'xdi9592';

  document.getElementById('save-btn').onclick = function (e) {
    saveDocument(id);
  }
}
~~~

클로저를 생각해봅시다. 함수안에 함수가 존재하네요. 이런 경우에는 scope chain을 공유하게 됩니다.

<figure style="text-align: center;">
  <img src="https://jicjjang.github.io/blog/static/image/javascript/optimize/2/closure1.jpg" alt="image" style="display:inline-block; width:100%; margin:0 auto;">
</figure>

실행 당시에 생성되는 Activation object를 closure도 공유를 하는데, 함수인 closure가 생성될 때에는 Activation object가
생성이 안될까요? 물론 생성됩니다. 그렇기 때문에 scope chain이 또 한번 변경이 됩니다.

<figure style="text-align: center;">
  <img src="https://jicjjang.github.io/blog/static/image/javascript/optimize/2/closure2.jpg" alt="image" style="display:inline-block; width:100%; margin:0 auto;">
</figure>

여기서 발생하는 성능문제가 있죠. 우선순위가 0, 1인 scope chain에서 값을 찾지 못했을 경우인데요, 만약 closure가 여러겹으로 있다고 한다면
상당한 성능 저하로 이어지게 됩니다.

### 2-2. 객체 멤버
객체 멤버 접근은 리터럴, 변수, 배열 접근보다 느립니다. 그 이유를 알아봅시다.

자바스크립트의 객체는 프로토타입에 기반합니다. 프로토타입은 다른 객체의 기반이 되는 객체로, 새 객체가 가져야 할 멤버를 정의 및 구현합니다.
프로토타입 객체는 해당 객체의 모든 인스턴스 사이에서 공유됩니다.

객체는 내부 속성을 통해 자신의 프로토타입에 묶이며, 브라우저들은 이 속성을 `__proto__`라는 이름으로 노출합니다.

~~~javascript
var book = {
  title: 'High Performance Javascript',
  publisher: 'Junseok'
};

alert(book.toString()); // [object Object]
~~~

prototype 또한 객체이기 때문에 prototype에 대한 키가 존재합니다.

<figure style="text-align: center;">
  <img src="https://jicjjang.github.io/blog/static/image/javascript/optimize/2/prototype1.jpg" alt="image" style="display:inline-block; width:100%; margin:0 auto;">
</figure>

prototype 구조는 다음과 같으며 title, publisher를 제외하는 prototype에 기능이 포함되어 있기 때문에, 위 코드의 toString과 같은 함수는 prototype에 있는 기능을
사용하게 됩니다. (scope chain을 보면 알 수 있듯이 Activation object에 toString이 있다면 그 기능으로 사용합니다. like overriding)

~~~javascript
function Book(title, publisher) {
  this.title = title;
  this.publisher = publisher;
}

Book.prototype.sayTitle = function () {
  alert(this.title);
}

var book1 = new Book('High performance js 1', 'junseok');
var book2 = new Book('High performance js 2', 'junseok');

alert(boo1 instanceof Book);    // true
alert(boo1 instanceof Object);  // true

book1.sayTitle();             // 'High performance js 1'
alert(book1.toString());      // [object Object]
~~~

<figure style="text-align: center;">
  <img src="https://jicjjang.github.io/blog/static/image/javascript/optimize/2/prototype2.jpg" alt="image" style="display:inline-block; width:100%; margin:0 auto;">
</figure>

코드와 코드에 해당하는 prototype chain 구조입니다. Book 함수의 프로토타입(prototype)은 Book.prototype 이고, Book 인스턴스의 프로토타입(`__proto__`) 또한 Book.prototype 입니다.
그리고 Book.prototype의 프로토타입 (Book.prototype.prototype)은 Object가 됩니다.

`물론 관계가 깊어질수록 성능은 저하됩니다.`

객체 멤버를 해석하는 작업도 있습니다. `.` 마다 객체 멤버를 해석하는 작업을하기 때문에 window.location.href가 window.location.href.toString()보다 빠릅니다.

---

2장도 짧은 정리로 끝났는데, HTML4를 사용하던 때의, 오래된 책이지만 몰랐던 부분이 간간히 나옵니다.
중요한 부분을 잘 집어서 더 정리해보겠습니다 ^^
