제네릭 제한과 하면 안되는 부분에 대해 간략히 알아보겠습니다.

~~~java

package generic;

abstract class Info
{
    public abstract int getLevel();
}

class levelInfo extends Info
{
    public int rank;
    public levelInfo(int rank)
    {
        this.rank = rank;
    }

    public int getLevel()
    {
        return this.rank;
    }
}

class Paper<T extends Info, S>  // Info가 interface여도 상관 없이 extends로 받아옴.
{                               // super 명령어는 extends 와 반대로, 해당 클래스만 제외한다는 뜻.
    public T info1;
    public S info2;
    public Paper(T info1, S info2)
    {
        this.info1 = info1;
        this.info2 = info2;
    }
    public <U> void printInfo(U info)
    {
        System.out.println(info);
    }
}

public class LimitsGeneric
{
    public static void main(String[] args)
    {
        levelInfo li = new levelInfo2(3);
        Paper<levelInfo, Integer> p2 = new Paper2<levelInfo, Integer> (li, 3);
        Paper<String, Integer> p3 = new Paper<String, Integer> ("String", 3); // error! Info를 상속받은 클래스만 사용 가능.
    }
}
~~~

원래 Wrapper 클래스로 써야 하지만, `Paper<String, Integer> p3 = new Paper<String, Integer> ("String", 3);` 에서 3 같은 경우는
auto-boxing으로 자동으로 Integer 형태로 바뀝니다.

---

위 Paper 클래스에서 extends가 없으면 당연하게 getLevel() 메서드는 사용할 수 없습니다.  
평소에 `class Paper<T>`라고 쓰는 형태는 사실 아래와 같은 형태를 축소해 놓은 것이기 때문입니다.
그래서 info는 Object의 기본 메서드만 사용할 수 있습니다.

~~~java
class Paper<T extends Object>
{
    public Person(T info)
    {
        info.getLevel();    // 사용 불가 Object형식만 가능. getLevel은 Info를 상속받은 애들만 구현했으니까.
     }
 }
~~~

---

제가 보던 책에도 없던 부분이지만 중요하게 쓰일 수 있을 법 한 부분이었습니다.
