<template>
  <main>
    <div class="wrapper">
      <!--//sidebar-wrapper-->
      <div class="sidebar-wrapper">
        <!--//profile-container-->
        <div class="profile-container">
          <img class="profile"
            :style="`width: 160px; height: 160px; border-radius: 80px;
            background: url(${this.baseUrl}/static/resume/image/profile.jpg) 0px 0px / 160px 212px no-repeat;`" />
          <h1 class="name">최준석</h1>
          <h3 class="tagline">프론트를 좋아하는<br/>백엔드 개발자</h3>
        </div>

        <!--//contact-container-->
        <div class="contact-container container-block">
          <ul class="list-unstyled contact-list">
            <li class="email">
              <i class="fa fa-envelope"></i>
              <a href="mailto: jicjjang12@gmail.com">jicjjang12@gmail.com</a>
            </li>
            <li class="website">
              <i class="fa fa-globe"></i>
              <a href="https://jicjjang.github.io/blog" target="_blank">jicjjang.github.io/blog</a>
            </li>
            <li class="github">
              <i class="fa fa-github"></i>
              <a href="https://github.com/jicjjang" target="_blank">github.com/jicjjang</a>
            </li>
          </ul>
        </div>

        <!--//education-container-->
        <div class="education-container container-block">
          <h2 class="container-block-title">Education</h2>
          <div class="item">
            <h4 class="degree">인천 대건고등학교</h4>
            <h5 class="meta">졸업</h5>
            <div class="time">2007 - 2010</div>
          </div>
          <div class="item">
            <h4 class="degree">한성대학교</h4>
            <h5 class="meta">졸업</h5>
            <h5 class="meta">컴퓨터 공학과</h5>
            <div class="time">2010 - 2017.2</div>
          </div>
        </div>

        <!--//languages-->
        <!-- <div class="languages-container container-block">
            <h2 class="container-block-title">Languages</h2>
            <ul class="list-unstyled interests-list">
                <li>English <span class="lang-desc">(Native)</span></li>
                <li>French <span class="lang-desc">(Professional)</span></li>
                <li>Spanish <span class="lang-desc">(Professional)</span></li>
            </ul>
        </div> -->

        <!--//interests-->
        <div class="interests-container container-block">
          <h2 class="container-block-title">Interests</h2>
          <ul class="list-unstyled interests-list">
            <li>Toy projects</li>
            <li>Sports</li>
            <li>Travel</li>
          </ul>
        </div>
      </div>

      <!--//main-wrapper-->
      <div class="main-wrapper">
        <section class="section summary-section">
          <h2 class="section-title"><i class="fa fa-user"></i>Introduce</h2>
          <div class="summary">
            <p>
              빠르게 바뀌어 가는 웹 생태계와 다양한 백엔드 언어 및 프레임워크에 관심이 많은 28살 개발자입니다.
              python, php, java, javascript에 대한 경험이 있고, 특히 Frontend에 관심이 많습니다. 발전을 위해
              다른 언어나 라이브러리, 프레임워크를 학습하는 것에 두려움이 없으며, 모르는 부분이 아직 많다고 생각하지만
              그만큼 스스로에 대해 채워나가고 있습니다. 스스로에 대해 발전할 가능성이 무궁무진하다고 평가하고 있습니다.<br/>
              혼자가 아닌 협업을 통해 더욱 높은 곳으로 올라갈 수 있다고 믿습니다.<br/><br/>
              영화를 보면서 많은 아이디어를 떠올리고, 떠오른 아이디어를 구현해보거나 아이디어에 대해 토론하는 것을 좋아합니다.<br/>
            </p>
          </div><!--//summary-->
        </section><!--//section-->

        <section class="section experiences-section">
          <h2 class="section-title"><i class="fa fa-briefcase"></i>Experiences</h2>

          <div class="item">
            <div class="meta">
              <div class="upper-row">
                <h3 class="job-title">Web Develop</h3>
                <div class="time">2018.05 예정</div>
              </div><!--//upper-row-->
              <div class="company">Kakao Pay, Pangyo</div>
            </div><!--//meta-->
            <div class="details">
              <p>Learn about: -</p>
            </div><!--//details-->
          </div><!--//item-->

          <div class="item">
            <div class="meta">
              <div class="upper-row">
                <h3 class="job-title">Web Service</h3>
                <div class="time">2016.07 - 2018.05</div>
              </div><!--//upper-row-->
              <div class="company">NHN Bugs, Pangyo</div>
            </div><!--//meta-->
            <div class="details">
              <p>Learn about: Spring, Javascript, jQuery, React</p>
              <p>4학년 1학기 재학 중, 신입 공채 1기로 NHN Bugs에 입사했습니다. 벅스 모바일 웹 개편을 시작으로, 삼성 스마트 티비 웹앱과 여러 장기 프로모션들
                (<a href="https://ssk.bugs.co.kr" target="_blank">SuperSoundKorea</a>,
                <a href="http://nabi.bugs.co.kr" target="_blank">nabi</a>...)을 담당하고 있습니다.</p>
            </div><!--//details-->
          </div><!--//item-->

          <div class="item">
            <div class="meta">
              <div class="upper-row">
                <h3 class="job-title">Web Developer</h3>
                <div class="time">2014.06 - 2015.06</div>
              </div><!--//upper-row-->
              <div class="company">Tastelab, Seoul</div>
            </div><!--//meta-->
            <div class="details">
              <p>Learn about: Php, Slim, html/css/js, jQuery, Requirejs</p>
              <p>대학 3학년 때, 전공을 가지고 처음 겪은 사회 생활이었습니다. 웹을 좋아했기 때문에,
                기초적인 웹 지식을 가지고 한, 두번 해봤던 웹을 밑바탕으로 시작하여 프론트, 백엔드, 서버에 대한 개념을 배우고
                REST, Async, HTTP 구조 등에 대해 학습하였습니다. 인턴 생활을 하며 5개 정도의 홈페이지를 만들고 2개 정도의
                메인 웹앱 프로젝트에 참여했는데, 처음에는 아무것도 생각이 나지 않고 나의 길이 아닌가 고민을 많이 했었습니다.
                하지만 스스로를 믿고 계속 열심히 하다보니 길이 보였고, 어떤 식으로 코드를 다루고 효율적으로 써야 하는지에 대해
                조금은 깨우친 소중한 회사였습니다. (인턴 3개월 후 정직원 전환)</p>
            </div><!--//details-->
          </div><!--//item-->

        </section><!--//section-->

        <section class="section projects-section">
          <h2 class="section-title"><i class="fa fa-archive"></i>Projects</h2>
          <div class="intro">
            <p>제가 지금까지 경험했던 프로젝트 목록입니다.</p>
          </div><!--//intro-->

          <div style="color: #649673; font-size: 20px; margin-top: 14px; margin-bottom: 14px; font-weight: bold;">KakaoPay</div>

          -

          <div style="color: #649673; font-size: 20px; margin-top: 14px; margin-bottom: 14px; font-weight: bold;">NHN Bugs</div>
          <div class="item">
            <span class="project-title"><a href="https://m.bugs.co.kr" target="_blank">모바일 웹 개편</a></span> -
            <span class="project-tagline">Bugs에서 교육 기간을 거치고 처음으로 진행한 작업입니다.
              곡, 앨범, 뮤직PD 등등의 상세 페이지들을 미리 만들어진 Track, Album의 공통 리스트를 이용해 만드는 작업과
              이벤트 및 프로모션 페이지들을 이관 작업 위주로 진행하였습니다.(복면가왕, 슈퍼사운드...)
              기존에 Spring과 SVN을 이용해 프로젝트를 해본 경험이 없었기 때문에 적응할 수 있게 도와준 프로젝트 였습니다.
              공통 리스트를 미리 담당자 분께서 작성해 주시고, 사용하는게 데이터를 이용하는 주된 일이었기 때문에
              기본적인 mvc 구조에 대해 익힐 수 있었습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="https://music.bugs.co.kr/samsung/smarttv" target="_blank">Bugs in Samsung SmartTV</a></span> -
            <span class="project-tagline">Bugs에서의 애증의 대상인 듯 합니다. 모바일 웹 개편 이후부터
              시작했던 프로젝트인데, 퇴사할 때 까지 저를 괴롭혔습니다. 개발에 대한 내용은 사실 복잡한게 없(?)었으나
              Tizen을 이용해 웹앱을 배포하는 부분에서 문제들이 많았습니다. (GPU를 이용해야 하기 때문에
              시스템 단에 라이브러리를 설치 / Android SDK 설치 / Tizen Studio 업데이트 후,
              인증서로 Tizen TV 에뮬레이터 사용 불가 등등...) 담당했던 부분은 리모콘의 마우스 부분을 사용하지
              않았기 때문에 리모콘의 키맵과 이벤트를 매핑하는 부분과 앱을 켜기 전에 TV에서 앱의 Preview를 보고,
              빅스비의 음성인식과 연동하는 DeepLink 였습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="https://music.bugs.co.kr/nabi" target="_blank">Nabi project</a></span> -
            <span class="project-tagline">2017년 4월동안 진행한 프로젝트입니다. 자주 작업하던 프로모션과는 다르게
              느낀 부분이 많은 프로젝트입니다. 가장 중요했던 부분은 SNS 공유 작업이었습니다. 기존에 쓰던 공유 프로세스가 존재했지만,
              기획상에서 SNS 공유 후 성공과 실패에 대한 구분이 필요했습니다. 기본적으로 facebook, twitter, naverblog, kakaostory
              모두가 기본 공유 라이브러리를 제공하지만 callback이 존재하는 라이브러리는 facebook과 twitter, 두 라이브러리 밖에 되지 않았습니다.
              게다가 twitter에서는 콜백 이벤트가 공유 성공이 아닌, 공유 창을 띄우기만 하면 호출되는 문제가 존재해서 사실상 facebook을 제외하고는
              모두 다시 만들어야 했습니다. twitter, naverblog는 사용자 인증 프로세스를 넣고 인증 후 생성된 토큰값을 이용해 사용자 대신
              게시물을 게시하는 방법을 선택했고, kakaostory는 동일한 과정이지만 kakaotalk 혹은 kakao 간편인증을 이용한 로그인으로 조금은 쉽게
              공유를 할 수 있었습니다. 처음 만드는 SNS 라이브러리였는데 local 환경에서 동작하지만 배포환경에서 동작하지 않는 이슈도 존재했습니다.
              session을 통한 데이터를 서버에서 계속 찾지 못하는 이슈였는데, 실서버에서는 서버 대수가 한대가 아니기 때문에
              사용자가 새로고침을 할 때마다 각기 다른 서버 프로세스로 들어가는 것이 원인이었습니다. 그렇기 때문에 session을 모두 걷어내고
              전 서버에 공유가 되는 memcache로 대체를 하였고, 사용자마다 정확한 값을 가질 수 있게 되었습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="https://mlounge.bugs.co.kr" target="_blank">Music Lounge</a></span> -
            <span class="project-tagline">서브 담당을 맡고 있었던 프로젝트로, 보통 수정사항들이 들어오면
              주로 담당을 맡아 개발하는 일을 하였습니다. 이벤트 템플릿을 추가하는 일이 제일 큰 프로젝트였는데,
              정책 사항이 몇번 씩 바뀌었고, 촉박한 기한 때문에 기획자와의 커뮤니케이션 중요성을 많이 깨닫게 된
              프로젝트 였습니다. 복잡한 기획 사항 덕분에 인수인계 당시에도 메인 담당자 분께서
              많이 복잡하다는 말씀을 하셨었습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="https://music.bugs.co.kr/panel" target="_blank">Panel</a></span> -
            <span class="project-tagline">Bugscorp와 함께 가장 최근까지 진행하던 프로젝트입니다.
              일반인 패널들이 Bugs의 가사를 관리하는 시스템 (벅스 담당자들이 관리하는 부분은 따로 존재)
              입니다. 오래된 프로젝트이므로 오류를 수정하는 일이 주가 되었습니다. dblink 이슈로
              프로시져를 사용하는 부분이 많았고, 여러 DB를 동시에 작업할 때의 인코딩 문제들이
              기억에 남았던 이슈입니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="http://bugscorp.co.kr" target="_blank">Bugscorp</a></span> -
            <span class="project-tagline">담당자가 바뀌게 되면서 제가 맡게 된 프로젝트입니다.
              회사 홈페이지 (PR, IR, Recruit) 관리였으며, 크게 작업을 하였던 부분은 IDC 센터 이전으로 변경된
              서버를 교체한 것과 Git을 통한 버저닝 적용, Bugs 서비스를 MVVM 모델로 변경하기 위한 테스트베드로 Bugscorp를
              SSR이 적용된 Node + React로 변경한 것입니다. 제가 담당한 백엔드인 Node의 개발과 서버(Apach Nginx) 세팅 및 개발된
              내용까지의 배포 테스트는 모두 완료하였습니다. (퇴사 전 서버와 백엔드작업은 완료하였으나, 프론트 코드에 대한 부분은
              완료되지 않아서 배포되지 않음)</span>
          </div><!--//item-->

          <div style="color: #649673; font-size: 20px; margin-top: 14px; margin-bottom: 14px; font-weight: bold;">Seminar</div>

          <div class="item">
            <span class="project-title"><a href="https://jicjjang.github.io/blog/slides/react-basic" target="_blank">React</a></span> -
            <span class="project-tagline">입사 후 진행했던 첫 사내 세미나 입니다. 회사에서는 리액트를 사용하지 않기 때문에
              개인적으로 진행한 프로젝트(Mclang)를 설명하는 형식으로 진행하였습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="https://jicjjang.github.io/blog/slides/vue-basic-presentation" target="_blank">Vue</a></span> -
            <span class="project-tagline">두 번째 사내 세미나로, 목록에는 작성하지 않은 NHN 사내 메신저 bot을 관리하는 툴을 만들고,
              그 내용을 설명하는 세미나였습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="https://jicjjang.github.io/blog/slides/developer-life" target="_blank">OSS 개발자 포럼</a></span> -
            <span class="project-tagline">첫 외부 세미나였습니다. 정말 개발을 하고 싶다는 생각이 들었을 때 도움을 받게 된 커뮤니티로,
              커뮤니티 장 님의 요청으로 고등학생 ~ 대학생 개발자 분들께 어떠한 방식으로 내가 개발을 해왔으며 나와 같은, 비슷한 길을 가고자 한다면
              생각해 보아야 할 부분들을 알려주고, 나 자신 또한 다른 선택을 했다면 더 좋았을 지에 대해 돌이켜 볼 수 있게 된 발표였습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="https://jicjjang.github.io/blog/slides/how-to-use-rxjs" target="_blank">RxJS</a></span> -
            <span class="project-tagline">회사에서 진행한 세 번째 세미나 입니다. 조금 부끄럽지만, RxJS에 대해선 사용 할 기회가 없었기
              때문에 간단히 작성된 RxJS 사이트의 예제를 쉽게 설명하는 방식으로 발표를 진행했습니다. 스트리밍 서비스를 제공하는 회사로써
              RxJS를 사용한다면 많은 도움이 될 것이라 생각하고 진행한 세미나지만, IE9부터 지원하는 RxJS를 당장 사용할 수 없었습니다.
            </span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="https://jicjjang.github.io/blog/slides/vue-pwa-start" target="_blank">Vuetiful Korea 3rd</a></span> -
            <span class="project-tagline">Vue 한국 커뮤니티인 Vuetiful Korea에서 두 번째 외부 세미나를 진행했습니다.
              공모전에 나갔던 Seoul Drinker 프로젝트는 시간과 클라이언트 개발자 이슈로 급하게 React Native를 (처음으로)이용해
              개발을 진행하였고, 이후 Vue로 웹앱으로 전환을 했습니다. 그 과정에서 Cordova/Phongap를 이용한
              코드 포팅 후 클라이언트 코드를 건드리는 것에 자신이 없었기 때문에(IOS/Android 경험이 없었기에)
              PWA를 사용하였고, 이를 바탕으로 Vue에 PWA를 적용하는 세미나를 진행했습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="https://jicjjang.github.io/blog/slides/graphql-start-server" target="_blank">GraphQL</a></span> -
            <span class="project-tagline">RxJS와 같이 서비스에 이용하면 괜찮다는 생각이 뿜어져 나온 GraphQL을 이용해
              네 번째 팀 세미나를 진행했습니다. Browser와 같은 제약이 없었기 때문에 내용에 대한 설명을 잘 하면
              적용이 가능할 것 같다는 생각을 하였으나, 기존 서비스를 바꾸는 것에는 반대가 많았으므로 다시한 번 좌절된 발표였습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="https://jicjjang.github.io/blog/slides/vue-apollo-graphql" target="_blank">Vuetiful Korea 4th</a></span> -
            <span class="project-tagline">GraphQL 팀 세미나를 진행하면서 Seoul Drinker에서 사용했던 API를
              GraphQL로 포팅 후, 발표를 했었습니다. 그 때에는 백엔드 코드만 완성이 되어있었고, 추가적으로 Vue에 GraphQL
              데이터를 불러오는 부분까지 만들어 발표를 진행했습니다.</span>
          </div><!--//item-->

          <div style="color: #649673; font-size: 20px; margin-top: 14px; margin-bottom: 14px; font-weight: bold;">Toy Projects</div>

          <div class="item">
            <span class="project-title"><a href="http://github.com/seouldrinker" target="_blank">Seoul drinker</a></span> -
            <span class="project-tagline">2017년 7월 중순부터 10월 31일까지 서울시 앱 공모전에 참여했습니다.
              설레발이라는 서울의 산책로를 소개해주는 앱을 디자이너, 안드로이드 개발자와 함께 만들고자 했지만 안드로이드 개발자가
              취직을 함과 동시에 서울시에서 제공해주는 API에 이슈가 있다는 것을 알았습니다. 결국 8월말 즈음 아이디어를 변경하게 되었고,
              기획자 한분과 함께 세명이서 seoul drinker라는 서울시의 수제 브루어리 펍과 맥주를 소개해주는 앱을 만들었습니다.
              기술 스펙으로는 react-native, redux를 이용해 안드로이드 버전을 만들었으며 구글과 페이스북 로그인을 지원하였고,
              백엔드는 node와 express, mongoDB를 이용하였습니다. 이 프로젝트는 혼자 단기간 (총 개발 기간 3~4주)에 백엔드와
              처음 해보는 클라이언트 (이전에 안드로이드 또는 ios를 경험해본 적이 없었습니다)를 경험했다는 점이 가장 크게 배운 부분입니다.
              react-native는 이전에 했던 Mclang 프로젝트와 데이터의 흐름 자체가 비슷했기 때문에 조금은 쉽게 다가갈 수 있었고,
              다시한 번 react를 하면서 Mclang에 대한 반성까지 할 수 있었습니다. 가장 큰 이슈는 시간의 부족과 데이터 구축, 라이브러리 등이 있었습니다.
              중간에 아이디어를 바꿈으로써 시간이 부족한 상황에, 정제된 데이터가 Mclang 프로젝트에서 구축되었지만,
              서울시에 맞는 데이터로의 정제가 필요하였습니다. 또한, react-native의 라이브러리들이 아직은 미성숙한 모습을 보였기 때문에
              중간중간 넣었던 라이브러리를 빼고 필요한 부분들을 직접 만들기도 했습니다.
              12월 초 즈음하여 <a href="https://jicjjang.github.io/blog/post/life" target="_blank">최종 결과</a>가 나왔습니다.
              좋은 결과를 얻지는 못하였고 억울한 점(?)도 있지만, 최선을 다했으며 직접 앱까지 돌아가는 결과물을 만든 것은 처음이기에
              뿌듯함이 많이 남았고 후회는 되지 않는 결과를 얻었습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="http://115.71.238.136/" target="_blank">Mclang</a></span> -
            <span class="project-tagline">2016년 11월부터 12월까지 약 한달 정도 진행한 프로젝트입니다.
              디자이너의 졸업프로젝트를 돕는 개인 프로젝트였습니다. (디자이너의 디자인 소유권으로 github 공개를 하지 못하였습니다.)
              간단한 사이트로 시간이 한 달 정도가 걸린 이유는 퇴근 이후의 짬을 내서 진행한 것과, 처음으로 React&amp;Redux를 적용하여
              진행하였기 때문입니다. 백엔드는 간단하게 Django로 API 형태의 데이터와 이미지들을 보내주고
              React로 데이터를 받아 화면에 뿌려주는 간단한 사이트입니다. </span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="https://github.com/ShanghaiDeluxe/guideMatching" target="_blank">GuideMatching</a></span> -
            <span class="project-tagline">2015년 9월 경 진행했던 서울시 공공API 공모전 프로젝트입니다. 가입하는 인원은
              모두 가이드, 여행객이 될 수 있으며, 지하철 기준으로 자신이 가이드를 해 줄 역을 고르면, 여행객들이 역 별로 가이드를 골라
              여행을 함께할 수 있도록 도와주는 프로그램 입니다. REST라는 것에 대한 개념은 있으나 구현이 미숙해 빈 웹뷰에
              프로젝트를 불러오는 방식을 통해 구현했습니다. 비록 수상은 하지 못했지만, 많은것을 배울 수 있는 프로젝트 였습니다.</span>
          </div><!--//item-->

          <div style="color: #649673; font-size: 20px; margin-top: 14px; margin-bottom: 14px; font-weight: bold;">Tastelab &amp; Graduation Work</div>

          <div class="item">
            <span class="project-title"><a href="https://github.com/sosanara" target="_blank">Sosanara</a></span> -
            <span class="project-tagline">2016년 1월~6월에 진행한 졸업 프로젝트 입니다. 탈모 관리 프로그램으로
              python과 django을 사용했습니다. opencv로 이미지 전처리를 통해 촬영한 사진을 이진화 하고, 흰색 검은색으로 머리상태를 보여주며
              살색 비율을 통해 탈모 진행율을 알려줍니다. 그리고 이진화한 데이터와 머신러닝된 데이터를 비교함으로써 타입을 알 수 있습니다.
              머신러닝으로 학습한 데이터(SVM -> 가장 정확도가 높았던 SVM, KNN, NeuralNetwork 중 제일 정확도가 높았음.)와
              사용자가 핸드폰으로 촬영한 사진을 비교해 미리 정한 두발 타입(Normal, Forward, Backward, Karma, Bald)중
              가장 유사한 타입 대해 알려줍니다. 히스토리, 통계, 사진첩 등의 기록으로 관리를 할 수 있습니다. REST에 대한 것을
              확실히 익힐 수 있는 기회였고, 이미지 더미 데이터를 만드는 자동화 라이브러리를 직접 작성해보는 경험을 하였습니다.
              34팀 중 우수상을 차지하였습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="http://patio42.co.kr" target="_blank">Patio42</a></span> -
            <span class="project-tagline">2015년 6월 경 진행했던 스타트업 내의 웹사이트 입니다.
              php와 사내 프레임워크인 publ을 이용하여 만든 웹사이트 입니다. 팝업과 sorting, caching에 대해 배울 수 있었습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="http://soobul.com" target="_blank">Soobul</a></span> -
            <span class="project-tagline">2014년 10월 경 진행했던 프로젝트 입니다. 회사에서 메뉴판과 포스기 연동 App을 만들면서
              함께 진행한 클라이언트의 홈페이지로 처음으로 혼자 백엔드 및 클라이언트를 모두 맡아서 진행한 프로젝트입니다.
              처음으로 API를 이용한 프로젝트입니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="http://theflyingpan.co.kr" target="_blank">Theflyingpan</a></span> -
            <span class="project-tagline">2014년 8월 경 진행했던 프로젝트 입니다. 도중에 한번 stop이 되었던 프로젝트 였지만
              첫 프로젝트로 백엔드에 대한 모든 것을 처음으로 배웠던 프로젝트이며, pagination과 관리자 페이지에 대해
              직접 구현했던 프로젝트입니다.</span>
          </div><!--//item-->
        </section><!--//section-->

        <section class="skills-section section">
          <h2 class="section-title"><i class="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
          <div class="skillset">
            <div class="item">
              <h3 class="level-title">Python &amp; Django</h3>
              <div class="level-bar">
                <div class="level-bar-inner" data-level="40%">
                </div>
              </div><!--//level-bar-->
            </div><!--//item-->

            <div class="item">
              <h3 class="level-title">React &amp; Redux</h3>
              <div class="level-bar">
                <div class="level-bar-inner" data-level="80%">
                </div>
              </div><!--//level-bar-->
            </div><!--//item-->

            <div class="item">
              <h3 class="level-title">Vue &amp; Vuex</h3>
              <div class="level-bar">
                <div class="level-bar-inner" data-level="90%">
                </div>
              </div><!--//level-bar-->
            </div><!--//item-->

            <div class="item">
              <h3 class="level-title">Php &amp; slim</h3>
              <div class="level-bar">
                <div class="level-bar-inner" data-level="30%">
                </div>
              </div><!--//level-bar-->
            </div><!--//item-->

            <div class="item">
              <h3 class="level-title">Javascript &amp; jQuery</h3>
              <div class="level-bar">
                <div class="level-bar-inner" data-level="85%">
                </div>
              </div><!--//level-bar-->
            </div><!--//item-->

            <div class="item">
              <h3 class="level-title">HTML5 &amp; CSS</h3>
              <div class="level-bar">
                <div class="level-bar-inner" data-level="75%">
                </div>
              </div><!--//level-bar-->
            </div><!--//item-->

            <div class="item">
              <h3 class="level-title">Photoshop</h3>
              <div class="level-bar">
                <div class="level-bar-inner" data-level="20%">
                </div>
              </div><!--//level-bar-->
            </div><!--//item-->

            <div class="item">
              <h3 class="level-title">Spring</h3>
              <div class="level-bar">
                <div class="level-bar-inner" data-level="60%">
                </div>
              </div><!--//level-bar-->
            </div><!--//item-->

          </div>
        </section><!--//skills-section-->

        <section class="section">
          <h2 class="section-title"><i class="fa fa-star"></i>DEV LIFE</h2>
          <div class="upper-row">
            <h4>
              <a class="title" href="https://jicjjang.github.io/blog/slides/developer-life" target="_blank">발표자료</a>
            </h4>
            <div>17년 OSS 개발자 방학 캠프에서 발표한 발표자료 입니다.<br />제가 개발을 하면서 현재까지 오게 된 과정에 대해 설명해보았습니다.</div>
          </div><br/>
          <div>&lt;포커스를 프레젠테이션에 두고 's' 키를 누르면 발표자 화면이 나옵니다.&gt;</div>
          <div>&lt;포커스를 프레젠테이션에 두고 'f' 키를 누르면 전체 화면이 나옵니다.&gt;</div>
        </section>
      </div>
    </div>

    <footer class="footer">
      <div class="text-center">
        <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can check out other license options via our website: themes.3rdwavemedia.com */-->
        <small class="copyright">Designed with <i class="fa fa-heart"></i> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
      </div><!--//container-->
    </footer><!--//footer-->
  </main>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "resume",
    layout: 'resume',
    computed: {
      ...mapGetters([
        'baseUrl',
      ])
    }
  }
</script>

<style scoped>
  .website {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
