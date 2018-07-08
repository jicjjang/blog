Macbook OS를 Yosemite로 올리고 난 후, 문제가 몇가지 있었습니다. 특히, 오디오 관련 에러가 많이 생겼는데, 이어폰을 끼고 노래를 듣다 이어폰을 빼면
소리가 커지거나 작아지는 동작들이 먹히지 않았습니다. 또, 듀얼모니터를 쓰면 자잘한 에러들이 많이 발생하고, 개발 툴들을 2, 3개 이상 켜면 점점 느려졌습니다.
그렇기에 공모전이 끝난 후, Yosemite보다 안정적이게 되었다는 El Capitan으로 바로 올리자 마음을 먹고 공모전이 끝난 후, 바로 업그레이드를 하게 되었습니다.  

하지만, 아직 정식 릴리즈 되지 않은게 화근이었던 것인지, 버그가 속속들이 등작했습니다.  

새로 node + express + socket.io + angular를 시작하게 되었는데, 설치 전,  
```brew upgrade && brew upgrade``` 를 하였습니다.

<figure>
    <img src="https://jicjjang.github.io/blog/static/image/etc/el-capitan/llvm35.png" alt="image">
</figure>

위 사진처럼 [LLVM35](https://ko.wikipedia.org/wiki/LLVM)가 brew에서 업데이트 되고있었습니다.
문제는 아래 사진처럼 cxxabi.h와 string.h 헤더파일을 찾을 수 없는 에러 때문이었습니다.  

<figure>
    <img src="https://jicjjang.github.io/blog/static/image/etc/el-capitan/error.png" alt="image">
</figure>

?!  

분명 xcode는 최신버전으로 업데이트를 미리 마쳤는데, 잘 모르는 cxxabi.h는 몰라도
string.h 헤더까지 없다니...  

어리둥절하며 구글링을 시작했습니다. 가장 많은 의견은 El Capitan에서 추가된 rootless 기능이었습니다.
rootless란, 아이폰에서 탈옥이 너무 성행한것에서 아이디어를 얻어온 것으로, 사용자가 시스템에 접근하는 것을 막는 기능입니다.  

에이... sudo로 root가 되면 되잖아...?  

물론, root여도 상관 없이 정해진 경로 (/, /usr, /lib 등등...)를 접근할 수 없습니다.
개발자들에게 그리 메리트가 없는 부분이고, 에러가 연관된 것 같았기에 바로 기능을 차단했습니다.
(아래 사진과 같은 검색으로 이미 많은 방법들이 나와있었습니다.)
<figure>
    <img src="https://jicjjang.github.io/blog/static/image/etc/el-capitan/rootless-disable.png" alt="image">
</figure>

하지만, rootless 기능을 차단하고도 계속 같은 오류가 발생했습니다.
그리고 알게된 [stackoverflow](http://stackoverflow.com/questions/32898887/boost-no-longer-works-with-homebrew-on-mac-el-capitan/32928840#32928840)에서  

```xcode-select --install``` 명령어로 xcode cli를 설치한 뒤, 정상적으로 작동되기 시작했습니다.

<figure>
    <img src="https://jicjjang.github.io/blog/static/image/etc/el-capitan/fix.png" alt="image">
</figure>

---

(xcode가 cli버전이 있다는걸 처음 알게된 맥북 1.3년 경력의 개발자...)  

위의 에러는 정말 시급했기에 (과제를 해야 했기에) 바로바로 고쳤지만,  

1. sublime에서도 에러가 나더군요 (?!) 들어보지 못한 에러가 2~3개의 경고문을 뱉어내서 캡쳐를 해놨지만
자주 뜨지 않아서 제대로 해결을 못했습니다.  
2. 블로그를 octopress + jekyll로 사용하고 있는데, bundle과 jekyll이 사라졌습니다... 재설치를 했는데
ruby installer인 gem에서 또 다른, 어떤 프로그램들이 사라졌는지는 정확히 모르겠습니다.  

그래도 Yosemite보다 훨씬 안정적이고 빠르고 특히, 노래를 많이 듣는데 음량에서 에러가 나지 않는게 너무 행복합니다.
(아직 업그레이드 한지 일주일도 안된 상태지만...)  

너무 두서없이 해결된 것 같지만, xcode-select가 원래는 기본 업데이트가 되는 것이어서 제가 몰랐던 것 같습니다.  

아직 모든 버그가 수정되진 않은 것 같지만, 사용감에서는 정말 만족하는 El Capitan! 정식 release가 기대됩니다!
