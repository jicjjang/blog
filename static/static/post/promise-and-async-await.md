이번 포스트에서는 `자바스크립트의 동기를 위한 promise와 async` 를 알아보겠습니다.

보통 동기화를 위해서 많이 쓰는 방법은 `setTimeout` 입니다.

~~~javascript
var a = somethingFunction();

var b = null;
setTimeout(function () {
  b = somethingAnotherFunction();
}, 0);
~~~

위와같은 방식을 이용하여 sync를 맞출 수 있었습니다. 편법이긴 하지만 promise나 async (제가 웹을 코딩하기도 이전에 나온 기능들이지만 ㅠㅠ)들이 나오기 전에는 으례 이 방식을 사용했다고 많이 들어왔습니다.

이제는 이 방식을 벗어나기 위해 sync를 맞추기 위한 promise, async, setTimeout 세 기능들에 대해 알아보겠습니다.

### 1. setTimeout

~~~javascript
// setTimeout
function testSetTimeout(callback) {
  console.log("1. Before callback");
  setTimeout(function () {
    console.log("2. callback function");
    if (typeof callback === "function") {
      callback();
    } else {
      console.log("   Callback is not func!");
    }
  }, 3000);
  console.log("3. After callback");
}

(function runA() {
  testSetTimeout(function () {
    console.log("   Call about setTimeout callback func!!");
  });
})();
~~~

callback함수를 포함해 testSetTimeout 함수를 호출합니다. 함수 내부의
setTimeout에서 3000ms를 기다리는 동안 계속 다음 명령어가 실행되므로 `3. After callback`이
찍힐 수밖에 없습니다.

<figure style="text-align: center;">
    <img src="https://jicjjang.github.io/blog/static/image/javascript/promise/settimeout.png" alt="image" style="width:50%; margin:0 auto;">
</figure>

(`1. Before callback`, `3. After callback` 이후에 `2. callback function`, `Call about setTimeout callback func!!` 가 찍히는 모습.)


### 2. Promise

~~~javascript
// Promise
function testPromise(callback) {
  return new Promise(function(resolve, reject) {
    if (typeof callback === "function") {
      console.log("1. callback is function.");
      setTimeout(() => {
        resolve(callback);
      }, 2000);
    } else {
      reject("2. callback is not a function.");
    }
  });
}

(function runA() {
  testPromise(function () {
    console.log("2. callback function!");
  }).then(function (callback) {
    callback();
  }).then(function () {
    console.log("3. callback is done.");
  }).catch(function (reason) {
    console.error(reason);
  });
})();
~~~

callback함수를 포함해 testPromise를 호출하고, callback이 함수면 2000ms 뒤에 resolve()로 callback 파라미터를 포함해 다음 함수 (then)을 실행합니다. promise로 물려있는 then 함수들이 순서대로 실행됩니다. (reject 발생 시 catch로 들어갑니다.)

<figure style="text-align: center;">
    <img src="https://jicjjang.github.io/blog/static/image/javascript/promise/promise.png" alt="image" style="width:50%; margin:0 auto;">
</figure>

(바로 `1. callback is function.` 이 실행되고 2초뒤에 `2. callback function!` 과 `3. callback is done` 이 실행되는 모습.)


### 3. async

~~~javascript
function testPromise(callback) {
  return new Promise((resolve, reject) => {
    if (typeof callback === "function") {
      console.log("1. callback is function.");
      setTimeout(() => {
        resolve(callback);
      }, 2000);
    } else if (typeof callback === "number") {
      console.log("1. callback number is " + callback);
      setTimeout(() => {
        resolve(callback);
      }, 2000);
    } else {
      reject("1. callback is not a function, number");
    }
  });
}

async function testAsync(x) {
  var a = testPromise(20)
  var b = testPromise(30)

  return x + await a + await b
}

testAsync(50).then(result => console.log(result))
~~~

우선 이 함수를 실행시켜볼 때 까지 몰랐던 것이... 크롬에서 ES6를 이미 지원해서 바로 실행된다는 것입니다...
위 promise 예제에서 썼던 promise 생성 부분을 확장시켜, number 값이 들어오면 그 값을 보여주고 callback으로 넘겨주도록 만들어놓고 async 함수로 사용을 해봅니다.

<figure style="text-align: center;">
    <img src="https://jicjjang.github.io/blog/static/image/javascript/promise/async.png" alt="image" style="margin:0 auto;">
</figure>

위와 같은 결과가 나옵니다. a, b에는 거의 동시에 promise로 들어가기에 `1. callback number is ~~` 가 두번 찍히게 되고, return 값에 있는 await에 해당하는 a와 b가 모두 할 일(promise의 2000ms)을 기다렸다가 끝나면 return을 하게됩니다.

---

매우 간단한 것들이지만 setTimeout과는 다르게 promise와 async는 명확히 앞서 하던 일들이 끝나면 다음 일을 할 수 있도록 명시해줍니다. 이 차이 때문에라도 setTimeout을 사용하는 일은 그만해야 할 것입니다.

**이번 회사 프로젝트를 하면서 Promise가 IE11에서도 먹히지 않는 모습을 보았습니다. 브라우저 호환성을 위해서 IE에서는 promise polyfill이나 async polyfill을 사용해야 합니다. async 또한 모든 브라우저에서 현재 ES6를 지원하는 것이 아니기 때문에 조심해서 사용해야 합니다.**

오늘 포스팅은 여기서 마무리하겠습니다. 감사합니다.
