4장 시작하겠습니다.

## 4. 알고리즘과 흐름 제어

### 4-1. 루프

언어 대부분에서의 코드 실행 시간을 대부분 루프에서 소비합니다.
그만큼 성능을 많이 좌우한다고 할 수 있습니다.

1. for
2. for-in
3. while
4. do-while

4가지의 반복문의 성능은 거진 비슷하지만, for-in은 특히나 성능이 좋지 않습니다.
반복할 때마다 인스턴스 또는 프로토타입 체인을 검색해야 하므로 느릴 수 밖에 없습니다.
그렇기 때문에 개수를 지정하여 반복문을 돌리는 것이 훨씬 효율적입니다.

루프의 종류를 제외하고 루프의 성능을 올리기 위한 방법은 무엇이 있을까요?

---

루프 안에서의 일 줄이기

~~~javascript
for (var i = 0; i < items.length; i++) {
  process(items[i]);
}
var j = 0;
while(j < items.length) {
  process(itmes[j++]);
}
var k = 0;
do {
  process(itmes[k++]);
} while (k < items.length);
~~~

이 코드에서 일어나는 일은

1. itmes 검색 (items)
2. 조건 비교 (i < itmes.length)
3. 조건이 true인지 false인지 비교 (i < itmes.length == true)
4. 증가 연산 (i++)
5. 배열 검색 (items[i])
6. 함수 호출 (process(itmes[i]))

총 6가지 입니다. 우선 length를 조회하는 부분을 최적화 해보겠습니다.

~~~javascript
for (var i = 0, len = items.length; i < len; i++) {
  process(items[i]);
}
var j = 0,
    count = items.length;
while(j < count) {
  process(itmes[j++]);
}
var k = 0;
    num = items.length;
do {
  process(items[k++]);
} while (k < num);
~~~

이번에는 비교하는 부분을 최적화 해봅시다.

~~~javascript
for (var i = items.length; i--; ) {
  process(items[i]);
}
var j = items.length;
while(j--) {
  process(itmes[j]);
}
var k = items.length-1;
do {
  process(items[k]);
} while (k--);
~~~

조건 부분이 0이 되면 자동으로 false가 되는 자바스크립트의 특징을 이용한 것입니다.

---

반복을 줄이기

process를 호출하는 부분을 반복마다 여러개를 두는 것입니다.

100번의 반복을 돌릴 일을 10번의 반복문을 돌리며, 1번 반복이 실행될 때마다
프로세스를 10번 실행시키는 것이다. 이 일은 반복 횟수를 알 경우 사용하는게 적당합니다.

## 4-2. 조건문

if-else 문과 switch 문이 있습니다. 우선 if-else 문 부터 확인 해보겠습니다.

~~~javascript
if (value < 5) {
  ...
} else if (value > 5 && value < 10) {
  ...
} else {
  ...
}
~~~

이 코드가 효과적인 경우는 value가 5보다 작은 값이 가장 많을 때 입니다.
첫 조건에서 가장 많은 값을 걸러내면 그 다음 조건까지 들어갈 일이 줄어들기 때문입니다.
조건문의 최적화는 조건문을 중첩시키는 것입니다.

그리고 조건이 많아질수록 성능이 저하됨은 당연지사 하겠죠. 조건이 3가지 이상 겹쳐질 경우
switch가 더 효율적입니다.

~~~javascript
if (value == 0) {
  return result 0;
} else if (value == 1) {
  return result 1;
} else if (value == 2) {
  return result 2;
} else if (value == 3) {
  return result 3;
} else if (value == 4) {
  return result 4;
} else if (value == 5) {
  return result 5;
}
~~~

위 코드의 성능을 향상시켜 보겠습니다.

~~~javascript
if (value < 6) {
  if (value < 3) {
    if (value == 0) {
      return result 0;
    } else if (value == 1) {
      return result 1;
    } else if (value == 2) {
      return result 2;
    }
  } else {
    if (value == 3) {
      return result 3;
    } else if (value == 4) {
      return result 4;
    } else if (value == 5) {
      return result 5;
    }
  }
} else if (...) {
  ...
}
~~~

비교하는 횟수를 최소화할 수 있습니다. 이진 트리 검색과 비슷합니다.

### 4-3. 재귀

브라우저에서의 재귀는 콜 스택 제한 때문에 위험할 수 있습니다.
또한 브라우저마다 에러 메세지가 다르기 때문에 조심해야 합니다.
(try-catch로 잡을 수는 있습니다.)

---

재귀로 구현할 수 있는 알고리즘은 모두 반복문으로 만들 수 있습니다.
루프상의 성능 문제가 발생할 수 있으나, 함수상의 성능 문제보다 부하가 낮아서
재귀보다는 반복문이 더 나을 수 있습니다.

---

factorial 함수와 같은 재귀함수는 동일한 일을 지속적으로 반복합니다.
그래서 이미 했던 일을 저장해 성능을 향상시킬 수 있습니다.

~~~javascript
function memfactorial(n) {
  if (!memfactorial.cache) {
    memfactorial.cache = {
      '0': 1,
      '1': 1
    };
  }
  if (!memfactorial.cache.hasOwnProperty(n)) {
    memfactorial.cache[n] = n * memfactorial(n-1);
  }
  return memfactorial.cache[n];
}
~~~

코드를 보면 알 수 있겠지만, 이전에 계산한 값을 memfactorial.cache에 누적시키는 기능을 추가했습니다.
성능이 아주 중요한 함수는 이러한 `메모이제이션` 기능을 `직접` 추가하는 것이 좋습니다.

---

4장도 모두 포스팅했습니다. 정규표현식(5장)은 일단 건너뛰고 진행하려합니다.
남은 장도 열심히 포스팅하겠습니다!
