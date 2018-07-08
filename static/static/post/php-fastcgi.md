## 문제의 발단 : 새로 구입한 서버에 nginx와 php 설치를 마치고 테스트용 html 파일을 실행시켜보고 잘된다고 생각하고 몇일 후...

` ERROR: An another FPM instance seems to already listen on /var/run/php5-fpm.sock `

<figure style="text-align: center;">
    <img src="https://jicjjang.github.io/blog/static/image/php/fastcgi/error-log1.png" alt="image">
</figure>

물론, /var/log/php5-fpm.log 파일도 마찬가지였습니다.

<figure style="text-align: center;">
    <img src="https://jicjjang.github.io/blog/static/image/php/fastcgi/error-log2.png" alt="image">
</figure>

대충 FPM 인스턴스가 이미 있다.. 라는 에러와 함께 nginx에서 php가 돌아가지 않는다는걸 뒤늦게 깨닫고 nginx, fpm 설정들을 다 찾으며 3~4일을 헤매었습니다...

#### 1. 재부팅.

대부분 구글에 있는 포스팅의 내용은

- 'php-fpm 재부팅 하세요!'
- 'ps aux | grep php로 php를 찾아서 pkill 후 다시 service php5-fpm restart 하세요!'
- '/etc/init.d/php5-fpm reload 후, /etc/init.d/ph5-fpm restart 하세요!'

이 세가지 였습니다. 제가 생각해도 인스턴스가 이미 있다는 에러니까 프로세스 종료 후 다시 시작 하는게 맞겠다 싶었습니다. 구글님이 시키는대로 해야지...  

...  

몇번의 시도 후 포기... 하지만 대부분의 포스팅이 위의 3개 중 하나였습니다.


#### 2. 재설치.

그럼 아예 다시 설치 해 보겠습니다..

`sudo apt-get remove php5-fpm & sudo apt-get install php5-fpm`

다시 설치하니, index.php를 실행하면 빈 화면만 나오면 사이트 페이지가 `502 bad gateway error` 페이지로 바뀌었습니다. 하지만 처음 나왔던 에러는 그대로 나왔습니다. ㅠㅠ....


#### 3. 다시 구글링.

한참 구글링을 하다

[http://wildlyinaccurate.com/solving-502-bad-gateway-with-nginx-php-fpm/](http://wildlyinaccurate.com/solving-502-bad-gateway-with-nginx-php-fpm/)

이 블로그를 발견했습니다.

제가 했던 삽질과 다른 점은 `php5`와 `php5-cgi`를 다시 설치했다는 점과, `sudo chmod go+rw /var/run/php5-fpm.sock` fpm 소켓 부분의 권한 변경이었습니다.
권한부분에서의 에러는 없었으므로 php5-cgi의 문제였습니다.

결론 : 정확히 어떤 부분인지는 모르겠으나, php-fpm과 php-cgi와의 관계에서 나온 에러로, php-cgi를 재설치 하니까 에러가 사라졌습니다.  



> cgi란? CGI 는 하나의 요청(Request)에 하나의 프로세스를 생성한다. 이것은 프로세스를 생성하고 삭제하는 과정에서 많은 부하가 발생한다. 당연히 느리다. 이를 개선하기 위해서 등장한 것이 FastCGI이다. FastCGI는 요청이 있을 때마다 프로세스가 만들어지는 것이 아니라 만들어진 프로세스가 계속해서 새로운 요청들을 처리한다. 덕분에 프로세스를 생성하고 제거하는데 들어가는 부하가 줄어든다. - wikipedia

> php-fpm란? FastCGI Process Manager의 약자로, php를 FastCGI 모드로 동작할 수 있게 해줍니다. (5.4 이후 부터는 php 내장이라고 합니다 ^^;)

---

개발은 언제나 사소한 오류로 시간을 잡아먹게 하지만 그 부분을 해결했을 때의 쾌감 덕분에 계속 코딩을 할 수 있는거 같습니다.  
이 포스팅으로 제가 구글링 한 것 처럼 누군가 비슷한 에러를 고칠 수 있게 되었으면 좋겠습니다.
