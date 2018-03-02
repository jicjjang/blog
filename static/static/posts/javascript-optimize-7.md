가장 많이 쓰이며, 프론트 엔지니어에게 필수인 비동기 통신 요청인 Ajax에 대해 알아보겠습니다

## 7. Ajax

비동기적으로 데이터를 주고 받아서 페이지 부하를 최대한 줄일 수 있는
고성능 javascript의 초석인 Ajax에 대해 알아보겠습니다.

### 7-1. 데이터 전송

1. XMLHttpRequest
2. 동적 &lt;script&gt; 태그 삽입
3. iframe
4. Comet
5. Multipart XHR

5종류의 기능을 주로 사용하지만, iframe이나 Comet은 데이터 전송 용도로 사용한다기엔 무리가 있으므로 제외합니다.

보통 jQuery의 ajax 기능을 이용해서 많이 사용하는 XMLHttpRequest에는 readyState라는 중요한 요소가 있습니다.
전송중일 경우, 즉 스트리밍을 하는 동안에 readyState 값의 변화가 있다는 점입니다. 그 말은 스트리밍이 진행중일 때를
캐치할 수 있다는 것이지요.

~~~javascript
var req = new XMLHttpRequest();

req.onreadystatechange = function (event) {
  if (req.readyState === 3) {             // 일부 데이터를 받았음. 전송 진행중.
    // ...
  } else if (req.readyState === 4) {      // 데이터 전송이 끝남.
    // ...
  }
}
...
~~~

또한 GET방식으로 데이터 요청 시 데이터는 캐시가 되기 때문에 같은 데이터를 여러번 가져 올 경우 성능이 향상됩니다.
(물론 가져온 데이터를 저장해서 사용하는 것이 가장 효율적입니다.)

GET방식은 URL과 매개변수의 길이가 2,048자로 제한이 되기 때문에 사용 시 유의해야 합니다.
 (길이를 넘는다면 POST를 사용해야 합니다.)

---

동적 &lt;script&gt; 태그 삽입은 다른 도메인에 있는 서버에 데이터를 요청할 수 없다는 XHR의 단점을 극복할 수 있는
방법입니다. 그래서 해킹이라고 볼 수 있습니다.

~~~javascript
var scriptA = document.createElement('script');
scriptA.src = 'address';
document.getElementsByTagName('head')[0].appendChild(scriptA);
~~~

데이터를 받는 부분은 어떻게 해야할까요?

~~~javascript
var scriptA = document.createElement('script');
scriptA.src = 'http://test.com/lib.js';
document.getElementsByTagName('head')[0].appendChild(scriptA);

function jsonCallback() {
  ...
}

// lib.js file
jsonCallback({status: 'success', value: {a: 1, b: 2}})
~~~

이렇게 호출할 때 callback 함수를 미리 생성해 놓고, 불러온 파일 내부에서 callback 함수를 실행시키는 것입니다.
하지만 이 방법은 누군가 인지하고 callback 함수를 구현한 javascript 파일을 불러온다면 문제가 발생할 여지가 있기에
데이터가 변할 수 있는 기능에 추천하지 않습니다.

---

Multipart XHR은 기본 XHR 통신과 거의 같습니다. 다만, n개의 파일을 가져올 때 n번의 XHR요청을 보내는 것이 아니라
1번의 요청을 보내면서 n개의 파일을 하나로 합쳐서 받는 것입니다.

서버에서 base64 인코딩을 한 결과 값들을 특정 구분자로 이어붙여서 리턴하면 그 값을 javascript에서 다시 잘라서 사용합니다.

~~~shell
$images = array('a.jpg', 'b.jpg', 'c.jpg');
foreach ($images as $image) {
  $image_fh = fopen($image, 'r');
  $image_data = fread($image_fh, filesize($image));
  fclose($image_fh);
  $payloads[] = base64_encode($image_data);
}

$newline = chr(1);  // 구분자. unicode 1

echo implode($newline, $payloads);  // $newline을 구분자로 $payloads를 연결시킴.
~~~

~~~javascript
function splitImages(imageString) {
  var imageData = imageString.split('\u001');     // unicode 1. 구분자를 기준으로 나눔.
  var imageElement;
  var doc = document;

  for (var i = 0, len = imageData.length; i < len; i++) {
    imageElement = doc.createElement('img');
    imageElement.src = 'data:image/jpeg;base64,' + imageData[i];
    doc.getElementById('container').appendChild(imageElement);
  }
}
~~~

이미지 뿐만 아니라 같은 확장자의 파일 (css, js, png, jpg, html...)모두 가능합니다.

큰 단점은 캐시가 되지 않는다는 점입니다. 파일 형식으로 불러오는 것이 아니라 string형식으로 가져오기 때문입니다.

---

XHR을 사용할 때 속도는 GET이 POST보다 빠릅니다. GET은 기본적으로 1개의 패킷을, POST는 2개의 패킷을 사용하는데
데이터 양이 많으면 패킷을 하나 더 쓴다는 단점이 희석되기 때문에 데이터 양이 많을 때에는 POST가 적합합니다.

### 7-2. 데이터 포맷

데이터 포맷의 종류로는

1. XML
2. XPath
3. JSON
4. JSON-P
5. HTML
6. Custom Format

6가지가 있습니다.

이제는 거의 사용을 하지 않는 XML, XPath는 제외하겠습니다. 이들은 사용에 있어서 모호함이 있기 때문에
지양됩니다. (코드를 관리하는 방법이 3가지이기 때문에 애매합니다.)

최근 가장 널리 사용되는 포맷인 JSON은 객체와 배열의 문법을 가볍게 파싱할 수 있습니다.
eval로도 쉽게 파싱할 수 있으나, 보안의 위협이 될 수 있으므로 JSON.parse 메서드를 사용해야 합니다.

JSON-P는 XHR로 데이터를 받았을 때, JSON이 string으로 오는 이슈를 해결하기 위해 사용됩니다.
JSON 데이터를 전달받은 즉시 JSON 형식으로 사용하기 위해선 데이터를 callback함수로 감싸야 합니다.

~~~javascript
parseJSON([
  {id: 1, username: '...'},
  {id: 2, username: '...'},
  {id: 3, username: '...'},
  ...
])
~~~

JSON과 마찬가지로 네이티브 코드인 JSON-P는 파일 크기가 조금 더 늘어나는 단점이 있으나, 파싱 시간이 줄어들기 때문에
속도가 JSON보다 빠릅니다.

JSON-P의 단점은 파싱할 수 없는 데이터를 받았을 때 발생합니다. 파싱 불가능한 형식의 response가 온다면
에러가 발생할 수 있습니다.

HTML은 XML과 비슷할 정도로 복잡한 포맷입니다. 그렇기 때문에 직접적으로 서버에서 응답을 주는 것은 최소한으로 줄여야 합니다.

Custom Format은 a:junseok;jicjjang12@gmail.com; b:aa:aa@gmail.com; .... 처럼
사용자가 직접 만든 문법을 사용하는 방식인데, split으로 간단하게 자르는 형식이기 때문에 속도는 매우 빠릅니다.
(이 또한 보안상 이슈가 될 수 있으므로 간단하고 문제될 일 없는 데이터에만 사용하길 권장합니다.)

### 7-3. Ajax 성능 가이드

#### Ajax의 성능을 끌어올리기 위해선 응답을 캐시하도록 HTTP Header를 설정해야 합니다.

얼마의 기간동안 지니고 있어도 되는지를 파악하고 해당 Expires를 설정하여 브라우저에 저장합니다.
해당 날짜가 지나면 Cache의 값 대신 서버로 요처을 보냅니다.

#### 클라이언트 측에서 가져온 데이터를 로컬에 저장해 재요청을 줄입니다.

로컬 스토리지에 URL을 키값으로 하는 데이터를 저장합니다. 그러면 키값에 대한 고민이 해결되고
데이터를 쉽게 로컬 스토리지에 저장할 수 있습니다. 로컬 스토리지에 값이 없을 때에만 서버로 요청을 보냅니다.

---

이번 장은 여기까지 입니다.
XML은 널리, 많이 사용되지만 파싱에 많은 시간이 소모되는 단점이 있습니다. 이미 널리 사용되었기 때문에
이전 데이터를 모두 수정하기에 힘든 부분이 많습니다. 이제부터라도 저장되는 데이터는 JSON 형식으로 사용하는 것이
필수적입니다.
