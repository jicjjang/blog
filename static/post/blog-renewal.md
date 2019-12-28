요 근래 [서울드링커 프로젝트 사건(?)](https://jicjjang.github.io/blog/post/life/) 
이후로 개인프로젝트에 대해서 약간 손을 놓고있었습니다. ㅠㅠ

![빵꾸난 잔디](https://jicjjang.github.io/blog/static/image/frontend/blog-renewal/commit.png)

출퇴근을 제외한 잉여한 날들을 보내다 들어가본 Github에 빵꾸난 잔디로 슬퍼하다
무언가 프로젝트를 진행해야겠다는 생각이 들더군요.

## 1. 아이디어

그 동안 jekyll에 어느정도 만족을 하며 사용하고 있었지만 루비를 모르는 상태에서
Github Pages를 원하는데로 컨트롤하기에는 이슈가 있었기 때문에 Vue를 사용하여
개편을 해버리기로 하였습니다. 기왕 바꾸는거 이쁜 디자인에 UX적으로 더 깔끔하면
좋겠다고 생각했지만, 디자인 개편이 아닌 기능적으로 언어를 바꾸는게 목표였기 때문에
기존 디자인을 유지한 채 진행하는 것으로 결정!
  
시작하기 전에 몇가지 고민이 있었는데요,

1. Vue로 개발해서 Github Pages에 호환되도록
2. 블로그가 대해서 검색 시 잘 나왔으면 좋겠고
  - 따로 SEO 개선 작업 없이도 기존 Github 페이지의 게시글들은 검색 시 잘 나왔음
3. 기존처럼... 포스팅하기 쉽게?? 하자!

이러한 사항들을 종합하여 사용하기로 한건 [Nuxt.js](https://nuxtjs.org/)!!!
(사실 이미 나와있던 답...)

## 2. 일단 시작...

사실 Nuxt.js 한글화 번역에 참여한 contributor이지만 막상 Nuxt로 개발을 해본적 없는...
그래서 이번 기회에 원래 하고싶었던 storybook까지 써서 해보기로 했습니다.
 
### 2-1. [Directory](https://ko.nuxtjs.org/guide/directory-structure)

기본적으로 Nuxt는 디렉토리를 생성해주고, 디렉토리별로 기능을 사용할 수 있게 해줍니다.

- Components - Vue와 마찬가지로 Component들을 모아줌 
- Assets - Webpack의 loader를 거친 static 파일들
- Static - 평범한 static 파일들
- Middleware
- Pages - Route를 따로 지정할 필요 없이, 경로에 맞게 파일들만 생성하면
저절로 Route가 생성됨 
- Layouts - Pages에 있는 페이지들을 불러오기 전에 지정한 Layout을 거치게 됨.
- Plugins
- Store - Vuex의 데이터가 들어갈 Store 

### 2-2. [URL](https://github.com/jicjjang/blog)

기존에 사용하던 블로그(https://jicjjang.github.io)가 아닌
[https://jicjjang/github.io/blog](https://jicjjang/github.io/blog)로
url을 바꾸기로 했습니다. 일단 블로그를 개편해야 하니까 개편 후에 블로그가 아닌 다른 기능을
메인 페이지에 넣고 기능은 넣어야 되겠다고 생각했습니다. 그런데 이게 막상 개발을 하면서 보니
추가적으로 설정하거나 고려해야 할 사항들이 생겨나게 되었죠. (개발이 진행되는 도중에는
기존 URL을 유지했습니다.) 또한 Nuxt.js에서 알려주는
[Github Pages deployment](https://ko.nuxtjs.org/faq/github-pages)도 매우
자세하지는 못했습니다 ㅠㅠ
  
### 2-3. Posting

기존에 포스팅하던 markdown 형식을 그대로 유지하고 싶었습니다. 기존엔 포스팅을 추가하기만 하면
메인 페이지에서 리스팅도 모두 보여주고, 아카이브, 카테고리 등등 페이지들에서 잘 나왔는데...
하지만 루비와 같은 중간서버를 두지 않고 프론트에서 파일경로에 접근하기에는
보안상 무리가 있었습니다. 그래서 루트경로에 `contentMap.js`라는 파일을 하나 만들고
포스팅과 카테고리 정보를 넣어주었습니다. markdown 파일들은 static 경로 안에 추가해주었습니다.

([static 경로를 보시면](https://github.com/jicjjang/blog/tree/master/static/static)
static/static/... 라는 구조로 되어있는데, 이는
https://jicjjang.github.io/blog/static/... 처럼 접근하고 싶었기 때문입니다.
static 이라는 단어가 url에 명시되도록 하고 싶었는데, 기존 Nuxt 생성시 자동으로 만들어졌던
static 경로 하나만 있으면 https://jicjjang.github.io/blog/... 아래 경로로
바로 접근이 가능했기 때문입니다.) 

### 2-4. Slides

[Reveal.js](https://revealjs.com/)를 이용한 포스팅들을 그대로 가져가야 했습니다.
버리고 싶지 않았고, 계속 추가할 아이디어들이 있었기에 함께 이전을 했습니다.
(하는김에 최신버전으로!!!) 문제는 Reveal.js를 초기화 코드였습니다.

~~~javascript
Reveal.initialize({
  dependencies: [
    { src: '/blog/static/slides/plugin/markdown/marked.js' },
    { src: '/blog/static/slides/plugin/markdown/markdown.js' },
    { src: '/blog/static/slides/plugin/notes/notes.js',
      async: true 
    },
    { src: '/blog/static/slides/plugin/highlight/highlight.js',
      async: true,
      callback: function() {
        hljs.initHighlightingOnLoad();
      }
    }
  ]
});
~~~

`mounted` 안에 해당 코드를 넣었지만, Reveal이 생성되는 정확한 시간을 캐치하기에는
무리가 있기에 setTimeout 처리를....(흑흑 무식한 나... 해결 방법을 아시면 저에게 연락을..!)

### 2-5. Resume

[Resume 페이지](https://jicjjang.github.io/blog/resume)도 함께 옮겼습니다.
Layout을 따로 만들었는데, 바뀐건 거의 메타데이터 밖에 없네요.

### 2.6 Deployment

제 Github 계정 아래에있는 jicjjang.github.io Repository에서는 master 브랜치로
코드를 올리면 반영이 바로 되었지만, [blog](https://github.com/jicjjang/blog)라는
Repository에서 작업을 했기 때문에 `gh-pages` 브랜치에 `generate`된 코드를 올렸습니다.

`generate` 명령어는 `build` 명령어와 다르게 정적 호스팅을 위해 사용하는데,
동적 url에 들어갈 경로를 미리 dist 디렉토리에 생성합니다. 그래서 `contentMap.js`에 넣어준
정보들 중 경로 부분을 `nuxt.config.js`의 generate.route 부분에서 한번 읽을 수 있도록
해주어야 합니다.

명령어에 대해서는 Nuxt의 [Github Pages deployment](https://ko.nuxtjs.org/faq/github-pages) 
페이지에도 있지만 [push-dir](https://github.com/L33T-KR3W/push-dir) 패키지를
설치하여 진행했습니다.

---

이렇게 `https://jicjjang.github.io` 도메인의 블로그가
[https://jicjjang.github.io/blog](https://jicjjang.github.io/blog)로 옮겨졌습니다.

뭔가 복잡한 것 같은데 끝내고 나니 간단했던 프로젝트였습니다. 오랜만에 개인프로젝트로 잔디가
몇칸 심어진것을 보니 기분이 좋아졌네요 ㅎㅎ. 항상 프로젝트에 대한 아이디어를 생각하기가 힘든데
더 재밌는 프로젝트가 있었으면... 하게 됩니다.

Github Pages 블로그 리뉴얼 후기 대해 마무리 합니다.
블로그 이전(기존 블로그도 유지는 하고있지만 ㅎㅎ) 후 첫 포스팅! :D 읽어주셔서 감사합니다~ 
