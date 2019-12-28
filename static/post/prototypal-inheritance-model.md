몇일 전, 페이스북에 아래와 같은 질문이 올라왔었습니다.

~~~text
javascript에서 상속구조를 만들 때

function Person(name) {
    this.name = name;
}
function Student(name, school) {
    Person.call(this, name);
    this.school = school;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var student1 = new Student("lee", "a");
console.log(student1.name) //lee

이런 식으로 만들고 있는데, 
Student.prototype = Object.create(Person.prototype);
이 부분에서 이 것과
Student.prototype = new Person();
을 하는 것의 큰 차이점을 잘 모르겠습니다 ㅠ_ㅠ
...
~~~

위 질문에 맞는 대답은 해드렸지만 최근에 프로토타입에 대해 소홀한 부분이 있어서
자바스크립트에서의 상속에 대해 한번 정리를 해보려합니다.

---

자바스크립트가 사용하는 프로토타입 모델에서의 상속은 아래와 같습니다.

~~~javascript
function Foo() {
    this.value = 1;
}

Foo.prototype.method: function() {}

function Bar() {}

// Foo의 인스턴스를 만들어 Bar의 prototype에 할당
Bar.prototype = new Foo();
// Bar의 prototype의 생성자는 자기 자신.
Bar.prototype.constructor = Bar;

var barz = new Bar() // bar 인스턴스를 만든다.
~~~

## 결과

barz의 생성자 Bar의 prototype은 Foo입니다. Foo의 constructor는 Bar를 가리키며,
Foo의 prototype은 Object를 가리킵니다. 하지만 Object의 프로토타입은 다시 Foo를 가리키죠.

- 1. barz의 constructor -> Bar
- 2. Bar의 prototype -> Foo, Foo의 constructor -> Bar 
  - 1. 클래스의 상속 개념을 가지는 Bar, Foo와 같은 함수들은 prototype, constructor로
        순환구조를 가지게 됩니다.
- 3. Foo의 prototype -> Object
  - 1. 순환구조 최상위인 Object에 도달하면 끝이나게 됩니다.
             
![result](https://jicjjang.github.io/blog/static/image/javascript/prototypal-inheritance-model/result.png)

## 예외 케이스

만약 Bar의 프로토타입 생성자 (Bar.prototype.constructor)를 정해주지 않으면,
상속받은 함수(new Foo())를 가리키게 됩니다.

![exception](https://jicjjang.github.io/blog/static/image/javascript/prototypal-inheritance-model/exception.png)

## 하지만

비슷하지만 최근엔 다른 방식을 지향하게 되었습니다. 거의 똑같지만!
`Bar.prototype = new Foo();` 대신 `Bar.prototype = Object.create(Foo.prototype);`
를 하는것이죠. 물론 prototype.constructor도 이전과 마찬가지로 동일하게 정의해줘야 합니다.
new Foo()를 해도 상관은 없지만, new 연산을 사용하면 아래와 같은 이슈(??)가 생깁니다.

![issue](https://jicjjang.github.io/blog/static/image/javascript/prototypal-inheritance-model/issue.png)

`Bar.prototype = new Foo();`를 하면 필요없는 객체의 데이터까지 들어오게 됩니다.
사실 무시할 수도 있지만, 본래의 역활과 다른 무언가까지 생기는게 찝찝하긴 합니다.

또한, Object.create에도 약간의 이슈가 있는데요, IE9과 같은 마이너 브라우저에서 사용할 수
없다는 점입니다. 이 부분은 아래 코드처럼 사전 정의를 통해 해결할 수 있습니다.

~~~javascript
Object.create = function (o) {
    function F() {};
    F.prototype = o;
    return new F();
}
~~~

참고 : [[속깊은 자바스크립트 강좌] 상속, new와 object.create의 차이](http://unikys.tistory.com/320)

---

읽어주셔서 감사합니다.
