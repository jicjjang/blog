### !!! 이 글은 사내 메신저인 Dooray에서 활용할 bot scheduler에 대한 소개로, 비정상적인 경로로의 접근은 하지 말아주시기 바랍니다. !!!

---

Front 게시물에 이어서 바로 서버 사용법을 설명드리겠습니다. 일단 서버는 노드로 구현이되어있고,
타이머를 돌면서 1분마다 firebase를 찔러보며 hook time이 현재 시간과 일치하는 스케쥴의
내용을 Dooray로 쏴줍니다.

# 1. [Dooray Hooker](https://github.com/jicjjang/DoorayHooker)

서버에서 사용하는 [menubot](https://github.com/jicjjang/menubot) 에서의 동작은 크게 3가지로 나뉩니다.  
1. 이미지 자르기  
2. 이미지 위치 구하기
3. 글자 인식

이러한 동작을 위해 기본 세팅이 조금 필요합니다.

## 1-1. 기본 세팅
우선 이미지를 자를 때 필요한 [imagemagick](https://www.imagemagick.org/script/index.php) 라이브러리 입니다.
brew로 간단하게 설치할 수 있습니다.

~~~bash
$ brew install imagemagick
~~~

그리고 이미지 인식에 사용할 [google-vision](https://cloud.google.com/sdk/docs/quickstart-mac-os-x)이 필요합니다.
 (구글 비전은 링크를 보시고 순서대로 실행해주세요)

## 1-2. 설정 파일

~~~bash
$ git clone https://github.com/jicjjang/DoorayHooker
$ cd DoorayHooker
$ npm install forever -g
$ npm install
$ npm run start
~~~

우선 npm을 설치하고 서버를 띄웁니다.
이번에도 바로 에러가 뜹니다.

<figure style="text-align: center;">
  <img src="https://jicjjang.github.io/blog/static/image/etc/dooray/scheduleServer/error1.png" alt="image" style="display:inline-block; width:80%; margin:0 auto;">
</figure>

다시 `"ex.config.js"` 파일을 참고하여 `"config.js"` 파일을 만듭니다.

#### 그리고 메뉴 이미지를 넣어줍니다. 메뉴봇을 이용할 때, 기본적으로 "img/all_menu/menu.png" 경로로 저장된 이미지를 사용하도록 해놨습니다. 해당 경로로 식사메뉴 이미지를 다운받아서 해당 경로로 넣어줍니다.


## 1-3. 사용

서버에서는 기본 세팅이 복잡하고, 사용에 대해선 큰 어려움이 없습니다.

~~~bash
$ npm run start
~~~

서버를 시작해주시면 됩니다. [forever](https://www.npmjs.com/package/forever)를 사용하였기 때문에
서버가 시작되면

~~~bash
$ forever list
~~~

명령어로 현재 서버에 대한 로그파일을 확인하실 수 있습니다.

<figure style="text-align: center;">
  <img src="https://jicjjang.github.io/blog/static/image/etc/dooray/scheduleServer/log1.png" alt="image" style="display:inline-block; width:80%; margin:0 auto;">
</figure>

<figure style="text-align: center;">
  <img src="https://jicjjang.github.io/blog/static/image/etc/dooray/scheduleServer/log2.png" alt="image" style="display:inline-block; width:80%; margin:0 auto;">
</figure>

등록되어있는 스케쥴들이 정상적으로 봇으로 동작하는 모습을 보실 수 있습니다!

---

봇을 만든것에 대한 경험 공유는 여기까지 입니다.
사용하시면서 어려우실 만한 부분은 google vision의 설치일 것 같네요... (저도 꽤나 오래 걸렸습니다...)

감사합니다.
