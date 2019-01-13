새해가 되었으니 ~~신년목표...~~ 다시 잔디를 깔아야겠습니다.  
  
항상 보안, 로그인, OAuth 와 같은 것들은 파고 파도 어렵다는생각을 하고있었는데,
회사일을 계기로 알게된 `FIDO`와 `HMAC`에 대해 갓구글님께서 알려주신 부분을 정리해보려 합니다.

---

## Part 1. 기존 인증방식

### 1-1. 지식 기반

인증이라는 말이 시작될 때 부터 사용하던 방식인 `비밀번호 입력`이 지식 기반의 인증입니다.
보안상 이슈가 될 수 있는 부분은 사용자들이 `쉬운 문자열을 주로 이용`하는 것과 여러 사
이트에서 `동일한 패스워드를 사용`한다는 부분입니다.

### 1-2. 소유 기반

은행에서 많이 발급받을 수 있던 `OTP (One Time Password)`와 `공인인증서`가 있습니다.
사용자가 토큰을 가지고 있어야만 인증이 가능하기 때문에 지식 기반의 인증보다는 보안성이 높지만
OTP는 카드나 단말기를 발급받기 위해서 최소 한 번은 면대면으로 사람을 통한 인증이 필요하고,
매번 소유하고 있어야 한다는 단점이 있습니다. 공인인증서는 하드웨어의 휴대성과 낮은 편리성의 단점을
보완할 수 있지만 유출의 위험이 높다는 단점이 있습니다.

### 1-3. 생체 기반

다양한 디바이스 (홍채/지문/안면 인식 전문 디바이스 + 근래의 핸드폰) 많이 사용되고 있는
`지문 인식`, `홍채 인식`, `안면 인식` 등등이 있습니다.
고유한 값들이기 때문에 높은 보안성을 가지기 좋지만, 유출이 되면 (고유/무결성 침해)
다시 바꿀 수 없다는 단점이 있습니다. 또한 안면 인식의 경우에는 꾸준히
바뀔 수 있기 때문에 지속적인 학습이 필요합니다.

## Part 2. FIDO

모바일에서 음성인식, 지문인식, USIM 등을 활용한 간편하지만 강력한 보안을 가지는 인증 기술들이 많아지고 있습니다.
FIDO가 제안하는 개념은, 이러한 기술들을 온라인에서도 활용하자는 것입니다.

### 1-1. 개념

[FIDO (Fast IDentity Online)](https://ko.wikipedia.org/wiki/FIDO) 개념을 정의한 [FIDO Alliance](https://ko.wikipedia.org/wiki/FIDO_%EC%96%BC%EB%9D%BC%EC%9D%B4%EC%96%B8%EC%8A%A4)는 
2가지 표준을 제시했습니다. 두 표준 모두 공개키 방식으로 어떤 표준을 사용하더라도 상관없습니다.

`[참고] **FIDO는 주로 지문인식으로 로그인**을 한다고 알고있으나, 지문은 인증의 수단일 뿐이며 **공개키 방식**이 인증 방식입니다.`

#### - UAF(Universal Authentication Framework)표준

지문, 음성, 홍체, 얼굴 등 사용자의 고유한 생체정보를 인증하는 비 패스워드(Passwordless)한 표준입니다.
디바이스에서 생체 인증을 성공하면 디바이스에 저장된 개인키에 접근 권한이 발생하여 전자서명을 하는 방식입니다.

#### - U2F(Universal 2nd Factor)표준

기존 인증 방식을 1차 인증요소로 사용하고 보안 키를 저장한 동글을 이용하여 추가로 2차 인증을 하는 입니다.
USB로 연결된 동글 내 버튼을 누르거나 NFC를 이용하여 탭핑하는 방식 등을 사용할 수 있습니다.

### 1-2. 사용법

#### - 등록

![FIDO Registration](https://jicjjang.github.io/blog/static/image/etc/scale-up-for-security/fido_registration.png)
* [https://fidoalliance.org/](https://fidoalliance.org/) 참고

Application이 있는 `site.com`에서 FIDO인증을 사용하기 위해서는 **"1. 등록하기 버튼을 선택"**합니다.
**"2. 등록을 위해 지문을 입력"**하면, **"3. 새로운 Private Key/Public Key 쌍을 생성"**합니다.
**"4. 생성된 BOB의 키 중, 공개키를 `site.com`의 FIDO 저장소에 저장"**하게 됩니다.

#### - 로그인

![FIDO Login](https://jicjjang.github.io/blog/static/image/etc/scale-up-for-security/fido_login.png)
* [https://fidoalliance.org/](https://fidoalliance.org/) 참고

`site.com`에서 **"1. 로그인 선택"**을 한 뒤, **"2. 지문을 입력"**합니다. 디바이스에서는 Application과 입력된 인증 정보, 계정 정보를 토대로
Private Key/Public Key를 알 수 있으며, `site.com`에서는 지문을 통해 Public Key를 얻을 수 있습니다.
그 뒤에는 [공개키 방식의 Handshake](https://brunch.co.kr/@artiveloper/24)를 통해 인증이 이루어집니다.


### 1-3. 프로토콜

#### - 등록

![FIDO protocol registration](https://jicjjang.github.io/blog/static/image/etc/scale-up-for-security/fido_protocol_registration.png)
* [https://fidoalliance.org/](https://fidoalliance.org/) 참고

1. client가 server에게 로그인/등록 요청을 함 (유저의 로그인 요청)
2. server는 client에게 선택 가능한 FIDO 인증 수단들 제공 (등록을 위해)
3. 인증 수단을 선택하고 등록함
4. client가 server에게 이를 전달하여 새로운 키 (public/private)쌍을 생성하고 Public Key를 저장함

#### - 인증 / 트랜젝션

![FIDO protocol authentication](https://jicjjang.github.io/blog/static/image/etc/scale-up-for-security/fido_protocol_authentication.png)
* [https://fidoalliance.org/](https://fidoalliance.org/) 참고

인증은 등록과 거의 유사합니다. 그래서 특정 Application에서는 등록과 인증이 비슷하게 보여지기도 합니다. (UX의 훌륭함...?)

1. client가 server에게 로그인 요청을 함 (유저의 로그인 요청)
2. server는 client에게 선택 가능한 FIDO 인증 수단들 제공 (인증을 위해)
3. 인증 수단을 선택하고 인증함 (이 때, 이미 등록한 인증 수단이 있으면 우선적으로 제공할 수 있겠군요)
4. client가 server에게 Public Key를 제공하고, 이후 공개키 방식의 Handshake를 통해 통신을 하게 됩니다.

이후 Transaction을 위한 Protocol이 따로 정의되어 있으나, 인증과 동일한 과정을 거치며 데이터만 전달해주기 때문에 스킵하겠습니다.

#### - 해지

![FIDO protocol deregistration](https://jicjjang.github.io/blog/static/image/etc/scale-up-for-security/fido_protocol_deregistration.png)
* [https://fidoalliance.org/](https://fidoalliance.org/) 참고

1. user의 해지 요청
2. server에서 공개키 제거

---

인증 방식이 늘어날수록, 인증을 위한 업체가 늘어납니다. 1인 1Public Key 이지만, 이 키가 방식에 따라 여러개가 될 수 있게 되는 것이죠.
그렇기 때문에 Application에서의 개인키 관리가 특히나 관건이 될 수 있습니다.  
  
이어서 HMAC을 통한 보안 강화에 대해 알아보겠습니다.

## Part 3. HMAC

![HMAC](https://jicjjang.github.io/blog/static/image/etc/scale-up-for-security/hmac.jpg)

[HMAC (Keyed-hash Message Authentication Code)](https://en.wikipedia.org/wiki/HMAC)은
발신자와 수신자가 공유하는 Secret Key를 이용해 무결성이 보장되지 않는 채널을 통해 보내는 메세지가 훼손되었는지 여부를 확인할 수 있게 도와주는 알고리즘입니다.

발신자가 메세지에 Secret Key를 이용해 HMAC 알고리즘을 통한 hash값을 만듭니다. 이 해쉬값과 메세지를 함께 수신자에게 보내고,
수신자는 수신된 메시지의 해시 값을 HMAC 알고리즘을 통해 메세지가 바뀌었는지 확인하게 됩니다.

메세지의 무결성 및 신뢰성을 보장하기 위해 사용되는 HMAC은 공개키가 아닌, 대칭키 방식을 사용하기 때문에 보안상 허점이 존재하지만,
DateTime을 함께 파라미터로 넘겨 지연시간 (URL expired time) 을 이용하여 만료된 URL인지 확인할 수 있어, 보안을 강화할 수 있습니다.

---

매우 간단하게 (FIDO 위주...! ㅋㅋ) 몇가지 보안 강화 요소들에 대해 알아봤습니다.
분명 FIDO, HMAC, 여러 기반들의 인증방식 등이 필수 사항은 아닙니다. 하지만 자신의 데이터, 고객의 데이터에는 책임이 따르기 때문에
미리미리 대비가 필요합니다. (특히 개발자라면!) 이 뿐 아닌 다른 보안 강화 기술들 및 알고리즘도 꾸준히 학습해야 할 것입니다.

새해 첫 포스팅은 이렇게 마치겠습니다.  
새해 복 많이받으세요.
