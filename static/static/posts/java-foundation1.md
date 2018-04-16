자바를 공부하면서 코딩을 하며 input을 받는 상황에서 한줄씩 밀리는 현상을 발견했습니다.

## 에러가 난 상황
~~~java
Scanner s = new Scanner(System.in);

System.out.println("값을 입력하세요.");
for (int i=0; i<3; i++) {
    System.out.println("첫 번째");
    String a = s.nextLine();
    int b = s.nextInt();
    String c = s.nextLine();    // c에 값을 입력 후, 다시 a에 nextLine();을 넣기 전에, a에 \n이 들어가버림.
}
~~~

뭔가 잘못했나... 생각을 하다 구글링으로 next()와 nextLine()의 차이점으로 발생한 문제라는 것을 알았습니다.


### next()
~~~java
Scanner s = new Scanner("\n\ntest\nhoho\n");

while (s.hasNext()) {
    System.out.println("출력: " + s.next());
}
// <결과>
// 출력: test
// 출력: hoho
~~~

※ next()는 개행문자, 공백은 무시하고 문자를 입력받습니다.

### nextLine()
~~~java
// nextLine()
Scanner s = new Scanner("\n\ntest\nhoho\n");

while (s.hasNext()) {
    System.out.println("출력: " + s.nextLine());
}
// <결과>
// 출력:
// 출력:
// 출력: test
// 출력:
// 출력: hoho
// 출력:
~~~

※ nextLine()은 한 줄 단위로 입력받기 때문에 개행문자도 한 줄로 인식합니다.

---

기초가 중요함을 느낄 수 있는 포스팅이었습니다. php와 다른 점들이 헷갈릴 수 있으니 차근차근 공부하며 포스팅하겠습니다.
