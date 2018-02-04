<template>
  <main>
    <div class="wrapper">
      <div class="sidebar-wrapper">
        <div class="profile-container">
          <img class="profile" :style="`width: 160px; height: 160px; border-radius: 80px; background: url(${this.baseUrl}/image/resume/profile.jpg) 0px 0px / 160px 212px no-repeat;`" />
          <h1 class="name">최준석</h1>
          <h3 class="tagline">프론트를 좋아하는<br/>서버 개발자</h3>
        </div><!--//profile-container-->

        <div class="contact-container container-block">
          <ul class="list-unstyled contact-list">
            <li class="email"><i class="fa fa-envelope"></i><a href="mailto: jicjjang12@gmail.com">jicjjang12@gmail.com</a></li>
            <li class="website"><i class="fa fa-globe"></i><a href="https://jicjjang.github.io" target="_blank">https://jicjjang.github.io</a></li>
            <li class="github"><i class="fa fa-github"></i><a href="https://github.com/jicjjang" target="_blank">github.com/jicjjang</a></li>
          </ul>
        </div><!--//contact-container-->
        <div class="education-container container-block">
          <h2 class="container-block-title">Education</h2>
          <div class="item">
            <h4 class="degree">인천 대건고등학교</h4>
            <h5 class="meta">졸업</h5>
            <div class="time">2007 - 2010</div>
          </div><!--//item-->
          <div class="item">
            <h4 class="degree">한성대학교</h4>
            <h5 class="meta">졸업</h5>
            <h5 class="meta">컴퓨터 공학과</h5>
            <div class="time">2010 - 2017.2</div>
          </div><!--//item-->
        </div><!--//education-container-->

        <!-- <div class="languages-container container-block">
            <h2 class="container-block-title">Languages</h2>
            <ul class="list-unstyled interests-list">
                <li>English <span class="lang-desc">(Native)</span></li>
                <li>French <span class="lang-desc">(Professional)</span></li>
                <li>Spanish <span class="lang-desc">(Professional)</span></li>
            </ul>
        </div> --><!--//interests-->

        <div class="interests-container container-block">
          <h2 class="container-block-title">Interests</h2>
          <ul class="list-unstyled interests-list">
            <li>Sports</li>
            <li>Pingpong</li>
            <li>Tennis</li>
            <li>Travel</li>
            <li>Take a picture</li>
          </ul>
        </div><!--//interests-->

      </div><!--//sidebar-wrapper-->

      <div class="main-wrapper">

        <section class="section summary-section">
          <h2 class="section-title"><i class="fa fa-user"></i>Introduce</h2>
          <div class="summary">
            <p>
              빠르게 바뀌어 가는 웹 생태계와 다양한 서버 언어 및 프레임워크에 관심이 많은 28살 개발자입니다. python, php, java, javascript에 대한 경험이 있고, 특히 Frontend에 관심이 많습니다. 발전을 위해 다른 언어나 라이브러리, 프레임워크를 학습하는 것에 두려움이 없으며, 모르는 부분이 아직 많다고 생각하지만 그만큼 스스로에 대해 채워나가고 있습니다. 스스로에 대해 발전할 가능성이 무궁무진하다고 평가하고 있습니다.<br/>
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
                <h3 class="job-title">Web Service</h3>
                <div class="time">2016.07 - 현재</div>
              </div><!--//upper-row-->
              <div class="company">NHN, Bugs music</div>
            </div><!--//meta-->
            <div class="details">
              <p>Learn about: Spring, javascript, jQuery</p>
              <p>4학년 1학기 후, 현재 소속중인 NHN Bugs에 입사했습니다. 삼성 스마트 티비 웹앱과 여러 장기 프로모션들 (<a href="https://ssk.bugs.co.kr" target="_blank">SuperSoundKorea</a>, <a href="http://nabi.bugs.co.kr" target="_blank">nabi</a>...)을 담당하고 있습니다.</p>
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
              <p>Learn about: Php, Slim, html/css/js, jquery, requirejs</p>
              <p>대학 3학년 때, 전공을 가지고 처음 겪은 사회 생활이었습니다. 웹을 좋아했기 때문에, 기초적인 웹 지식을 가지고 한, 두번 해봤던 웹을 밑바탕으로 시작하여 프론트, 서버에 대한 개념을 배우고 REST, Async, HTTP 구조 등에 대해 학습하였습니다. 인턴 생활을 하며 5개 정도의 홈페이지를 만들고 2개 정도의 메인 웹앱 프로젝트에 참여했는데, 처음에는 아무것도 생각이 나지 않고 나의 길이 아닌가 고민을 많이 했었습니다. 하지만 스스로를 믿고 계속 열심히 하다보니 길이 보였고, 어떤 식으로 코드를 다루고 효율적으로 써야 하는지에 대해 조금은 깨우친 소중한 회사였습니다. (인턴 3개월 후 정직원 전환)</p>
            </div><!--//details-->
          </div><!--//item-->

        </section><!--//section-->

        <section class="section projects-section">
          <h2 class="section-title"><i class="fa fa-archive"></i>Projects</h2>
          <div class="intro">
            <p>제가 지금까지 경험했던 프로젝트 목록들 입니다. 저 자신을 발전시켰다고 생각하고있는 프로젝트들 입니다.</p>
          </div><!--//intro-->
          <div class="item">
            <span class="project-title"><a href="http://github.com/seouldrinker" target="_blank">seoul drinker</a></span> -
            <span class="project-tagline">2017년 7월 중순부터 10월 31일까지 서울시 앱 공모전에 참여했습니다. 설레발이라는 서울의 산책로를 소개해주는 앱을 디자이너, 안드로이드 개발자와 함께 만들고자 했지만 안드로이드 개발자가 취직을 함과 동시에 서울시에서 제공해주는 API에 이슈가 있다는 것을 알았습니다. 결국 8월말 즈음 아이디어를 변경하게 되었고, 기획자 한분과 함께 세명이서 seoul drinker라는 서울시의 수제 브루어리 펍과 맥주를 소개해주는 앱을 만들었습니다. 기술 스펙으로는 react-native, redux를 이용해 안드로이드 버전을 만들었으며 구글과 페이스북 로그인을 지원하였고, 서버는 node와 express, mongoDB를 이용하였습니다. 이 프로젝트는 혼자 단기간 (총 개발 기간 3~4주)에 서버와 처음 해보는 클라이언트 (이전에 안드로이드 또는 ios를 경험해본 적이 없었습니다)를 경험했다는 점이 가장 크게 배운 부분입니다. react-native는 이전에 했던 Mclang 프로젝트와 데이터의 흐름 자체가 비슷했기 때문에 조금은 쉽게 다가갈 수 있었고, 다시한 번 react를 하면서 Mclang에 대한 반성까지 할 수 있었습니다. 가장 큰 이슈는 시간의 부족과 데이터 구축, 라이브러리 등이 있었습니다. 중간에 아이디어를 바꿈으로써 시간이 부족한 상황에, 정제된 데이터가 Mclang 프로젝트에서 구축되었지만, 서울시에 맞는 데이터로의 정제가 필요하였습니다. 또한, react-native의 라이브러리들이 아직은 미성숙한 모습을 보였기 때문에 중간중간 넣었던 라이브러리를 빼고 필요한 부분들을 직접 만들기도 했습니다. 12월 초 즈음하여 <a href="https://jicjjang.github.io/blog/post/life" target="_blank">최종 결과</a>가 나왔습니다. 좋은 결과를 얻지는 못하였고 억울한 점(?)도 있지만, 최선을 다했으며 직접 앱까지 돌아가는 결과물을 만든 것은 처음이기에 뿌듯함이 많이 남았고 후회는 되지 않는 결과를 얻었습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="http://music.bugs.co.kr/nabi" target="_blank">nabi project</a></span> -
            <span class="project-tagline">2017년 4월동안 진행한 프로젝트입니다. 자주 작업하던 프로모션과는 다르게 느낀 부분이 많은 프로젝트입니다. 가장 중요했던 부분은 SNS 공유 작업이었습니다. 기존에 쓰던 공유 프로세스가 존재했지만, 기획상에서 SNS 공유 후 성공과 실패에 대한 구분이 필요했습니다. 기본적으로 facebook, twitter, naverblog, kakaostory 모두가 기본 공유 라이브러리를 제공하지만 callback이 존재하는 라이브러리는 facebook과 twitter, 두 라이브러리 밖에 되지 않았습니다. 게다가 twitter에서는 콜백 이벤트가 공유 성공이 아닌, 공유 창을 띄우기만 하면 호출되는 문제가 존재해서 사실상 facebook을 제외하고는 모두 다시 만들어야 했습니다. twitter, naverblog는 사용자 인증 프로세스를 넣고 인증 후 생성된 토큰값을 이용해 사용자 대신 게시물을 게시하는 방법을 선택했고, kakaostory는 동일한 과정이지만 kakaotalk 혹은 kakao 간편인증을 이용한 로그인으로 조금은 쉽게 공유를 할 수 있었습니다. 처음 만드는 SNS 라이브러리였는데 local 환경에서 동작하지만 배포환경에서 동작하지 않는 이슈도 존재했습니다. session을 통한 데이터를 서버에서 계속 찾지 못하는 이슈였는데, 실서버에서는 서버 대수가 한대가 아니기 떄문에 사용자가 새로고침을 할 때마다 각기 다른 서버 프로세스로 들어가는 것이 원인이었습니다. 그렇기 때문에 session을 모두 걷어내고 전 서버에 공유가 되는 memcache로 대체를 하였고, 사용자마다 정확한 값을 가질 수 있게 되었습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="http://115.71.238.136/" target="_blank">Mclang</a></span> -
            <span class="project-tagline">2016년 11월부터 12월까지 약 한달 정도 진행한 프로젝트입니다. 디자이너의 졸업프로젝트를 돕는 개인 프로젝트였습니다. (디자이너의 디자인 소유권으로 github 공개를 하지 못하였습니다.) 간단한 사이트로 시간이 한 달 정도가 걸린 이유는 퇴근 이후의 짬을 내서 진행한 것과, 처음으로 React&amp;Redux를 적용하여 진행하였기 때문입니다. 서버를 간단하게 Django로 API 형태의 데이터와 이미지들을 보내주고 React로 데이터를 받아 화면에 뿌려주는 간단한 사이트입니다. </span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="https://github.com/sosanara" target="_blank">sosanara</a></span> -
            <span class="project-tagline">2016년 1월~6월에 진행한 졸업 프로젝트 입니다. 탈모 관리 프로그램으로 python과 django을 사용했습니다. opencv로 이미지 전처리를 통해 촬영한 사진을 이진화 하고, 흰색 검은색으로 머리상태를 보여주며 살색 비율을 통해 탈모 진행율을 알려줍니다. 그리고 이진화한 데이터와 머신러닝된 데이터를 비교함으로써 타입을 알 수 있습니다. 머신러닝으로 학습한 데이터(SVM -> 가장 정확도가 높았던 SVM, KNN, NeuralNetwork 중 제일 정확도가 높았음.)와 사용자가 핸드폰으로 촬영한 사진을 비교해 미리 정한 두발 타입(Normal, Forward, Backward, Karma, Bald)중 가장 유사한 타입 대해 알려줍니다. 히스토리, 통계, 사진첩 등의 기록으로 관리를 할 수 있습니다. REST에 대한 것을 확실히 익힐 수 있는 기회였고, 이미지 더미 데이터를 만드는 자동화 라이브러리를 직접 작성해보는 경험을 하였습니다. 34팀 중 우수상을 차지하였습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="https://github.com/ShanghaiDeluxe/guideMatching" target="_blank">guideMatching</a></span> -
            <span class="project-tagline">2015년 9월 경 진행했던 서울시 공공API 공모전 프로젝트입니다. 가입하는 인원은 모두 가이드, 여행객이 될 수 있으며, 지하철 기준으로 자신이 가이드를 해 줄 역을 고르면, 여행객들이 역 별로 가이드를 골라 여행을 함께할 수 있도록 도와주는 프로그램 입니다. REST라는 것에 대한 개념은 있으나 구현이 미숙해 빈 웹뷰에 프로젝트를 불러오는 방식을 통해 구현했습니다. 비록 수상은 하지 못했지만, 많은것을 배울 수 있는 프로젝트 였습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="http://patio42.co.kr" target="_blank">patio42</a></span> -
            <span class="project-tagline">2015년 6월 경 진행했던 스타트업 내의 웹사이트 입니다. php와 사내 프레임워크인 publ을 이용하여 만든 웹사이트 입니다. 팝업과 sorting, caching에 대해 배울 수 있었습니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="http://soobul.com" target="_blank">soobul</a></span> -
            <span class="project-tagline">2014년 10월 경 진행했던 프로젝트 입니다. 회사에서 메뉴판과 포스기 연동 App을 만들면서 함께 진행한 클라이언트의 홈페이지로 처음으로 혼자 서버 및 클라이언트를 모두 맡아서 진행한 프로젝트입니다. 처음으로 API를 이용한 프로젝트입니다.</span>
          </div><!--//item-->
          <div class="item">
            <span class="project-title"><a href="http://www.theflyingpan.co.kr" target="_blank">theflyingpan</a></span> - <span class="project-tagline">2014년 8월 경 진행했던 프로젝트 입니다. 도중에 한번 stop이 되었던 프로젝트 였지만 첫 프로젝트로 서버에 대한 모든 것을 처음으로 배웠던 프로젝트이며, pagination과 관리자 페이지에 대해 직접 구현했던 프로젝트입니다.</span>
          </div><!--//item-->
        </section><!--//section-->

        <section class="skills-section section">
          <h2 class="section-title"><i class="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
          <div class="skillset">
            <div class="item">
              <h3 class="level-title">Python &amp; Django</h3>
              <div class="level-bar">
                <div class="level-bar-inner" data-level="60%">
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
                <div class="level-bar-inner" data-level="80%">
                </div>
              </div><!--//level-bar-->
            </div><!--//item-->

            <div class="item">
              <h3 class="level-title">Php &amp; slim</h3>
              <div class="level-bar">
                <div class="level-bar-inner" data-level="50%">
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
                <div class="level-bar-inner" data-level="40%">
                </div>
              </div><!--//level-bar-->
            </div><!--//item-->

            <div class="item">
              <h3 class="level-title">Spring</h3>
              <div class="level-bar">
                <div class="level-bar-inner" data-level="70%">
                </div>
              </div><!--//level-bar-->
            </div><!--//item-->

          </div>
        </section><!--//skills-section-->

        <section class="section">
          <h2 class="section-title"><i class="fa fa-star"></i>DEV LIFE</h2>
          <div class="upper-row">
            <h4 class="title">발표자료 설명</h4>
            <div>17년 OSS 개발자 방학 캠프에서 발표한 발표자료 입니다.<br />제가 개발을 하면서 현재까지 오게 된 과정에 대해 설명해보았습니다.</div>
          </div><br/>
          <iframe src="http://jicjjang.github.io/2017/07/15/developer-life" width="100%" height="400px" style="border: none;"></iframe>
          <div>&lt;포커스를 프레젠테이션에 두고 's' 키를 누르면 발표자 화면이 나옵니다.&gt;</div>
          <div>&lt;포커스를 프레젠테이션에 두고 'f' 키를 누르면 전체 화면이 나옵니다.&gt;</div>
        </section>
      </div><!--//main-body-->
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

</style>
