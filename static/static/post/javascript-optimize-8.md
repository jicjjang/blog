어느덧 마지막 파트입니다. 더 뒤에 있는 파트는 다루지 않습니다.

## 8. 프로그래밍 사례

### 8-1. 이중 평가를 피하십시오

문자열을 바로 실행하는 함수는

1. eval()
2. Function 생성자
3. setTimeout()
4. setInterval()

네가지 입니다. 이 메서드들은 javascript 코드를 나타내는 문자열을 받아서 실행할 수 있습니다.

~~~javascript
var a = 5, b = 6, sum;
console.log(eval('a + b'));

sum = new Function('a', 'b', 'return a + b');

setTimeout('sum = a + b', 100);
~~~

속도는 string으로 접근하는 방법이 더 빠릅니다 (!!) 보안을 유의하며 사용하도록 합시다.

~~~javascript
// fast
var item = array[0];

// slow
var item = eval('array[0]');
~~~

또한, setTimeout이나 setInterval로는 함수를 넘기길 권장합니다.

### 8-2. 객체/배열 리터럴을 사용하십시오

~~~javascript
// slow
var obj = new Object();
obj.name = 'junseok';
obj.email = 'jicjjang12@gmail.com';
...

// fast
var obj = {
  name: 'junseok',
  email: 'jicjjang12@gmail.com',
  ...
}
~~~

### 8-3. 작업을 반복하지 마십시오

함수의 반복을 피하는 첫 번째 방법은 lazy loading입니다. 어떤 정보가 필요할 때 까지 일을 하지 않는 방식인데요,

~~~javascript
function addHandler(target, eventType, handler) {
  if (target.addEventListener) {
    addHandler = function (target, eventType, handler) {  // etc...
      target.addEventListener(eventTyep, handler, false);
    }
  } else {
    addHandler = function (target, eventType, handler) {  // ie일 경우
      target.attachEvent('on' + eventType, handler);
    }
  }
  addHandler()
}
~~~

이와 같은 방식으로 addHandler를 한번 실행하면 내부에서 재정의를 합니다. 그러면
그 이후부터 target.addEventListener가 있는 지 검사하는 부분이 사라지게 됩니다.
그 만큼 빨라지겠죠

---

조건에 따른 미리 읽기 방식이 있습니다. 그 방식대로 위 코드를 수정해보면

~~~javascript
var addHandler = document.body.addEventListener?
  function (target, eventType, handler) {
    target.addEventListener(eventTyep, handler, false);
  }:
  function (target, eventType, handler) {  // ie일 경우
    target.attachEvent('on' + eventType, handler);
  };
~~~

이렇게 3항 연산자를 이용하면 되고, 가장 빠른 방법이 됩니다.


### 8-4. 빠른 부분을 이용하십시오

이 파트에선 비트 연산자와 내장 메서드 사용에 대해 나오는데, 비트 연산자는 보편적으로 사용되지 않으므로
개인 프로젝트가 아니라면 (물론 이 또한...)권장하지 않습니다.

내장 메서드는 Math와 같은 내장 메서드를 최대한 사용하고, 새로운 메서드를 사용하지 말라는 것입니다.
내장 메서드는 애초에 javascript로 만들어진 것이 아니라 javascript로 컴파일 되기 전인 c, c++과 같은
속도가 더 빠른 언어로 만들어 졌기 때문에 속도 면에서 빠른 코딩을 하기 힘듭니다.

---

마지막 장을 이렇게 마무리하게 되었습니다.
7개의 포스팅을 봐주셔서 감사합니다.

새로운 책이나 프로젝트로 추후에 포스팅을 올리겠습니다.
수고하셨습니다.
