이직을 하고 한달도 되지 않아 회사가 이사를 하고, 집이 이사를 하고... 바쁘다는 핑계로
방탕한(커밋을 하지 않으면 방탕한 인생이지...만 삶의 질이 올라갔다!) 삶을 보내고 있습니다.
이런 삶을 좀 청산하고자... 블로그로 가벼운 스타트를 하려 합니다 ㅋㅋ

---

책좀 읽고 뒹굴뒹굴 거리다 라인에서 [LIFF](https://engineering.linecorp.com/ko/blog/detail/299)
라는 프로젝트를 진행하고 있는 것을 보았습니다. 라인앱의 App Scheme을 만들어서 사용할 수 있게 해주는 프레임워크로,
간단히 만드는 과정 및 후기를 남기려 합니다.

만드는 과정을 설명한다곤 했으나, 이미 라인에서 훌륭한
[가이드라인](https://developers.line.me/en/docs/liff/overview/)을 작성해 놨습니다.
훌륭한 독해 실력과! 리뷰따위는 필요가 없으신 고수님들은! (따흐흑) 가이드 라인을 따라가셔도 ~~안~~됩니다.

![liff1](https://jicjjang.github.io/blog/static/image/etc/liff/liff1.png)

오늘 만져볼 liff의 구현체는 위와 같은 모양으로 나올 겁니다. 여러 사이즈에 대한 App Scheme이
미리 정의되어 있습니다.

![liff2](https://jicjjang.github.io/blog/static/image/etc/liff/liff2.png)

계정을 만들고, 앱을 만들어서 배포하고, LIFF에 App을 등록하는 순서대로 진행하겠습니다.

---

## 1. 계정계

가장 기본적으로 라인 App Scheme에 등록할 앱을 등록할
[계정](https://developers.line.me/en/docs/liff/getting-started/#spy-creating-a-channel)
을 만듭니다. 계정을 만들고 나서는 `Provider`와 `Channel`을 만들어 주셔야 합니다.
`Provider`는 제공할 기능들에 대한 그룹, `Channel`은 그룹에 대한 제공할 기능 단위라고 생각해주시면 됩니다.

### 꿀팁

문서에는 안나와있고, 해보면 알 수 있는 부분이지만 `Channel`을 만들 때, 2가지 경우가 있습니다.
바로 `Login API`, `Message API`가 있는데요, 문서에는 `Message API`만 만들어서 보여주기 때문에
뭘 선택하라는 거지... 했습니다. 두 가지 케이스는 동일하고 이름에서 보이듯 `Login API`에서는
`Message API`전에 앱에 대한 로그인이 추가되는 API 입니다.
(아마 앱에다가 로그인 세션을 넣어주기 위해 재로그인 하는 듯 하다!)

우리가 할 테스트엔 Login이 따로 필요 없으니, `Message API`로 충분합니다.

## 2. 앱 개발 & 배포

### 2-1. 앱 개발

앱을 개발해줍니다. 문서에서는 heroku로 배포하는 것으로 되어있는데요, SSL 인증이 들어간 https 프로토콜로
만들어진 도메인이라면 굳이 heroku로 배포할 필요 없이, 본인이 배포할 서버로 넣어주시면 됩니다.

### 2-2. 배포

[line-liff-starter](https://github.com/line/line-liff-starter)로 만들어진 프로젝트를
heroku에 배포하여 테스트 해볼 수 있는데요! 오늘 배포는 이 프로젝트로 진행할 예정입니다.
(앱 개발에 대해서는 추후에)

![liff3](https://jicjjang.github.io/blog/static/image/etc/liff/liff3.png)

위 링크를 타고 들어가 보라색 버튼의 heroku를 클릭하여 heroku에 배포할 수 있습니다.
(계정은 직접 만들어주세요)

그럼 간단한 [테스트용 웹페이지]((https://liff-starter-test-app.herokuapp.com/)가 나옵니다.
비어있는 정보들에 대해선 liff의 데이터가 들어가니, liff에 추가된 후 확인해 봅시다.

## 3. 스크립팅

몇번의 스크립트를 넣는 작업이 필요합니다. 계정의 access_token을 얻고, 해당하는 access_token에
App을 등록하는 작업입니다. 물론 넣은 이후에 url이나 화면의 타입 (Compact, Tall, Full)을
바꾸는 스크립트, 등록된 App list를 확인하는 스크립트, 등록된 App을 지우는 스크립트 등이 있습니다.

### 3-1. access_token 얻기

~~~bash
curl -v -X POST https://api.line.me/v2/oauth/accessToken \
-H "Content-Type:application/x-www-form-urlencoded" \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_id={ channel ID }' \
--data-urlencode 'client_secret={ channel secret }'

# 보기좋게 정렬한 Response
# {
#   "access_token": "blahblah",
#   "expires_in": 2592000,
#   "token_type": "Bearer"
# }
~~~

### 3-2. liff에 App 등록

~~~bash
curl -X POST https://api.line.me/liff/v1/apps \
-H "Authorization: Bearer { channel access_token }" \
-H "Content-Type: application/json" \
-d '{
  "view": {
    "type": "full",
    "url": "https://liff-starter-test-app.herokuapp.com/"
  }
}'

# 보기좋게 정렬한 Response
# {
#   "liffId": "1142586872-1234567"
# }
~~~

## 3. 테스트하기!

`line://app/{ liffId }` 링크로 이동하면 됩니다. (Line App을 설치한 모바일에서만 가능)

<figure style="text-align: center;">
  <img src="https://jicjjang.github.io/blog/static/image/etc/liff/liff4.jpeg" alt="image" style="width:50%; margin:0 auto;">
</figure>

결과는 위 이미지처럼 나오게 됩니다. (기존 url로 들어갔을 때와는 다르게 정보들이 채워집니다.
liff에서 데이터를 가진 object를 내려줬기 때문이죠)

## 4. 마무리

위 예제들이 기본이고, 이를 활용한 앱을 만들면 됩니다.
(물론 저도 이달안에 만들 앱에 대한 고민을 해놓음!)

### 참고 1. Login API

제일 처음에 `Channel`을 만들 때, `Login API`를 선택한다면

<figure style="text-align: center;">
  <img src="https://jicjjang.github.io/blog/static/image/etc/liff/liff5.jpeg" alt="image" style="width:50%; margin:0 auto;">
</figure>

라는 화면 이 먼저 뜨게 됩니다.

### 참고 2. sendMessage

<figure style="text-align: center;">
  <img src="https://jicjjang.github.io/blog/static/image/etc/liff/liff6.jpeg" alt="image" style="width:50%; margin:0 auto;">
</figure>

[line-liff-starter issue](https://github.com/line/line-liff-starter/issues/1)
에서 보실 수 있듯이 특정 디바이스에서의 `sendMessage 버튼`을 누르면 위와 같은 이슈가 나타납니다.
이점 유의해서 테스트 해주세요.

---

오랜만에 블로그 글을 쓰려니 간단한 리뷰임에도 시간이 조금 걸렸습니다.
이런 식으로 App Scheme을 사용자가 생성하도록 공유하는 방식은 개인적으로 처음 보았는데
활용함에 따라 개발 유저들을 끌어들일 수 있는 요소가 될 수 있다고 느꼈습니다.
위에 작성한대로 이달 안에 뭔가 재밌는걸 해보려고 하는데 저도 기대되네요 ㅎㅎ
