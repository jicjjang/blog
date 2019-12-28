블로그를 만들면서 예전부터 써보고 싶었던 라이브러리들을 사용해보기로 했습니다. 검색해보니 reveal.js, impress.js 두개가 1, 2위를 다투고 있었습니다.
회사 동료분이 reveal.js를 사용하는  것을 본 기억이 있으니 impress.js를 해보기로 결정!!

<figure style="text-align: center;">
  <figcaption><a href="https://github.com/bartaz/impress.js/find/master" title="desciprtion">&lt;impress.js github&gt;</a></figcaption>
</figure>

github을 찾아봤으나 따로 syntax같은 부분은 설명이 없이, 예제로 있는 index 파일이 전부였습니다. 이 파일이 syntax 설명 그 자체인데, 이 파일을 위주로 알아보겠습니다.

~~~html
<div id="impress">
  <div id="bored" class="step slide" data-x="-1000" data-y="-1500">test</div>
  <div class="step slide" data-x="0" data-y="-1500">test</div>
  <div id="title" class="step" data-x="0" data-y="0" data-scale="4">test</div>
  <div id="its" class="step" data-x="850" data-y="3000" data-rotate="90" data-scale="5">test</div>
  <div id="big" class="step" data-x="3500" data-y="2100" data-rotate="180" data-scale="6">test</div>
  <div id="tiny" class="step" data-x="2825" data-y="2325" data-z="-3000" data-rotate="300" data-scale="1">test</div>
  <div id="ing" class="step" data-x="3500" data-y="-850" data-rotate="270" data-scale="6">test</div>
  <div id="imagination" class="step" data-x="6700" data-y="-300" data-scale="6">test</div>
  <div id="source" class="step" data-x="6300" data-y="2000" data-rotate="20" data-scale="4">test</div>
  <div id="one-more-thing" class="step" data-x="6000" data-y="4000" data-scale="2">test</div>
  <div id="its-in-3d" class="step" data-x="6200" data-y="4300" data-z="-100" data-rotate-x="-40" data-rotate-y="10" data-scale="2">test</div>
  <div id="overview" class="step" data-x="3000" data-y="1500" data-scale="10">test</div>
</div>
~~~

`<div id="impress">` 이 태그 내부에 있는 div 태그들이 프레젠테이션 효과를 받는 전부입니다. (나머지는 프레젠테이션과 관련이 없습니다.)
  딱 봐도 이해하기 쉽게 되어있습니다. 여기서 정리할 부분을 살펴보자면

  1. id가 있고, 없고의 차이
  2. class="step"의 유무
  3. data-x, y, z / data-scale, rotate / data-rotate-x, y

  이렇게 5개로 나눠 알아보겠습니다.

  ## 1. id가 있고, 없고의 차이

  우선, impress를 git clone해서 실행을 해보면 바로 알 수 있습니다.

  <figure style="text-align: center;">
  	<img src="https://jicjjang.github.io/blog/static/image/etc/web-presentation/address.png" alt="image">
  </figure>

  id가 있는 div는 주소에 id가 나오게 되고, 없는 div는 step이 나오게 되는데, step- 뒤에 몇번째 슬라이드인지 숫자가 나오게 됩니다.

  ## 2. class="step"의 유무

  바로 clone 한 코드에서 step을 제외하고 프레젠테이션을 진행해 보았는데, 슬라이드를 그냥 건너뛰게 되고, 기본 .step에 걸려있던 css들이 무시되었습니다.
  (너무 당연한 얘기를 ㅠㅠ...)

  ## 3. data-x, y, z / data-scale, rotate / data-rotate-x, y

  #### data-x, y, z

  화면 전환시 x, y, z축으로 이동하는 (prezi와 같이) 효과를 보여줍니다.

  #### data-scale, rotate

  화면 전환시 scale(안에 들어가는 값은 배율)로 확대 / 축소를 할 수 있고, rotate(안에 들어가는 값은 각도)로 회전을 할 수 있습니다.

  #### data-rotate-x, y

  화면 전환시 x축을 중심으로 회전, y축을 중심으로 회전합니다. 3D효과를 줄 때 사용합니다.

  첫 포스팅을 간단하게 마무리 하겠습니다. 마지막으로 impress.js의 예제 동영상으로 효과가 어떻게 나오는지 보여드리면서 간단하게 포스팅을 이렇게 마치겠습니다.

  <iframe style="width:100%;height:420px;"  src="https://www.youtube.com/embed/S_0E1iOwoe8?autoplay=1&autohide=1&loop=1&playlist=S_0E1iOwoe8" frameborder="0" allowfullscreen></iframe>
