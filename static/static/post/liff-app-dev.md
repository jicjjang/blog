얼마 전, 작성했던 Liff 관련 포스팅에서 언급한 실생활에서 사용할 수 있는 간단한 앱을 만들었습니다.

솔직히 말해서 배포도 하였고(heroku에 배포. 프로세스가 sleep 모드에 들어가면 wake up이 필요하므로 초기에 느림),
지금도 돌아가고 있지만 배포 후 url을 앱에 등록하면 pathParam이나 quetyString등의 조작이 힘들기 때문에
현재는 웹주소로만 사용하고 있습니다.

그럼 Liff를 이용한 개발 내용을 순서대로 리뷰해보겠습니다.

---

#### *- 기본적으로 Liff 앱은 mobile 환경에서만 사용 가능합니다. 라인 pc앱에서 사용할 수 없습니다.*

## 0. 아이디어

요즘 참여하고있는 [DODO](https://www.alwaysdodo.com/)의 슬랙에서 슬랙봇을 만든다는 얘기를 듣고
간단한 아이디어를 글만으로 표현하기 힘들 때, Liff를 통해 그려주는게 어떨까? 라는 아이디어를
생각했습니다. (라곤 하지만, 이전에 포스팅에서 소개드린 [line liff 소개](https://engineering.linecorp.com/ko/blog/detail/299)
블로그 글의 앱을 슬랙에 연동한 것)

### 1. 슬랙 봇을 통한 커멘트 입력

커멘드를 입력하면 바로 링크로 이동이(ex - liff://apps/LIFF_APPS_ID 라는 url로) 되도록...!
하는건 ~~보안상 이슈로~~ API가 없었기에 할 수 없었습니다.

---

### 2. 버튼 클릭

커멘드 입력 후 버튼이 뜨고, 버튼을 클릭하여 링크로(liff://apps/LIFF_APPS_ID)
이동하는 방법을 이용하였습니다. 링크 이동 시, 위에서 말씀드린 queryString이나 pathParam을
넘길 수 없는 부분이 보안상 이슈가 될 수 있다 생각했으나, 유동적인 앱 활용에는 방해가 되었습니다.

<figure style="text-align: center;">
  <img src="https://jicjjang.github.io/blog/static/image/etc/liff-app-dev/liff-app-dev1.png" alt="image" style="display:inline-block; width:45%; margin:0 2%;">
  <img src="https://jicjjang.github.io/blog/static/image/etc/liff-app-dev/liff-app-dev2.jpeg" alt="image" style="display:inline-block; width:45%; margin:0 2%;">
</figure>

#### *- 이미지에서는 버튼이 아닌 링크로만 구현이 되어있습니다.*

---

### 3. Liff 페이지로 이동

등록한 앱으로 페이지를 이동하여 뭔가를 그린 후, `Save`를 누르게 되면
미리 등록해놓은 슬랙의 client 키값과 channel id를 통해 슬랙으로 이미지를 게시하게 됩니다.

<figure style="text-align: center;">
  <img src="https://jicjjang.github.io/blog/static/image/etc/liff-app-dev/liff-app-dev3.jpeg" alt="image" style="width:50%; margin:0 auto;">
</figure>

---

### 4. 슬랙으로 이미지 게시

물론 이렇게 게시하는 방법은 번거롭습니다. 다른 앱을 한 번 거쳐야 하고, 채널도 자유롭게 고를 수 없습니다.
queryString, pathParam 때문에 채널마다 다른 channel id가 등록된 웹을 Liff 앱에 등록해줘야 합니다.
그래도 확장 기능을 사용할 수 있다는 것 자체가 좋다 생각했고, 간단히 조회만 하는 앱에서의 활용범위와
Liff가 나온지 얼마되지 않았다는 것을 고려하면 발전 가능성은 충분하다 여겨집니다.

<figure style="text-align: center;">
  <img src="https://jicjjang.github.io/blog/static/image/etc/liff-app-dev/liff-app-dev4.png" alt="image" style="width:50%; margin:0 auto;">
</figure>

---

개발은 매우 간단하게, 여기까지 진행했습니다. 하지만 서두에 작성했듯이 유동적인 앱 사용
(A채널을 통해 그린 이미지는 A채널에, B채널을 통해 그린 이미지는 B채널로 그려지도록)을 위해
현재는 기본 브라우저를 통해 사용하고 있습니다. 이런 이슈만 없어진다면 다시 Liff로 돌아가도
좋다고 생각합니다. 하지만 line에서도 보안 이슈가 생길 것이라 생각되네요 ^^;

liff에 대한 포스팅은 여기까지 입니다. 좋은 아이디어가 또 나왔으면 좋겠습니다~
