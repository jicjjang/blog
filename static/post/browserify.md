매우 간단해서 길게 설명할 필요도 없는 내용이지만, 이 내용을 찾는데 오래걸린 분노로 블로그에 글을 씁니다...  

javascript에서 버전 관리는 requireJS와 commonJS 방식 있다는 것만 알고 있었는데, react를 공부하면서 버전 관리를

~~~
var _ = require('underscore');
~~~

형식으로 쓰는 것을 보고, '그냥 쓰면 당연히 안될텐데.... 어떻게 하는거지...;;'

[react-php-v8js](https://github.com/reactjs/react-php-v8js) 에서 v8js를 설치하는 부분과 javascript 버전관리 부분에서 상당히 애를 먹고 있었는데,
버전관리를 해결하는데 만 하루가 걸렸네요...

react를 처음 공부할 때 집중을 하지 않았는지, browersify를 찾고, 이해하고 난 후 자료들이 눈에 막 띄었습니다...(털썩)

<figure>
    <img src="https://jicjjang.github.io/blog/static/image/etc/browserify/commonjs.png" alt="image">
    <figcaption><a href="http://reactkr.github.io/react/docs/getting-started-ko-KR.html#commonjs-" title="desciprtion">&lt;출처 - reactJS&gt;</a></figcaption>
</figure>

여러 옵션도 있고, 이벤트가 있어서 build를 여러파일로 하거나, browersify만 build하여 inline 형식으로 script를 작성할 수도 있고,

~~~
var browserify = require('browserify');
~~~

처럼 browserify를 직접 require하여 api를 사용할 수 있습니다.  

(자세한 사항은 [browserify usage](https://github.com/substack/node-browserify#usage) 페이지를 참고해주세요.)

---

(이대로 블로깅을 끝내기는 아쉽...) browserify의 큰 단점은 속도가 느리다는 점! require로 버전관리를 한 파일들을 bundle.js 파일로 만들어 주는데 파일들의 개수가 많아지는 만큼 속도가 현저하게 늘어남을 (당연하게)느꼈습니다. 그래서 대안이 없나 찾아보다 [watchify](https://github.com/substack/watchify) 라는 모듈을 찾았습니다.  

이 모듈은 browerify가 build하는 과정을 파일 업데이트 마다 자동으로 반복해서 해줍니다.

---

매우 간단하게 browserify와 watchify에 대해.... 삽질한 내용에 대해서만 간단하게 블로깅을 해봤습니다. 이제 다시 v8js 삽질과... 앱개발을 시작해야되겠네요!
