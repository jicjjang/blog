iterator를 사용할 수 없는 컬렉션인 Map에서 iterator를 사용하려면 2가지 키워드가 있습니다.  
바로 Map.keyset(), Map.entrySet() 입니다. 둘 다 각자의 특성이 있어서 어떤 것이 더 좋다 비교하기는 어렵습니다.


## Map.entrySet()
~~~java
static void iteratorUsingEntrySet1(HashMap map)
{
    Set<Map.Entry<String, Integer>> entries = map.entrySet();
    Iterator<Map.Entry<String, Integer>> i = entries.iterator();

    while(i.hasNext()) {
        Map.Entry<String, Integer> entry = i.next();
        System.out.println(entry.getKey() + " : " + entry.getValue());
    }
}
~~~

간단하게 사용해보겠습니다.

~~~java
static void iteratorUsingEntrySet2(HashMap map)
{
    Iterator i = map.entrySet().iterator();

    while(i.hasNext()) {
        Map.Entry<String, Integer> entry = (Map.Entry<String, Integer>)i.next();
        System.out.println(entry.getKey() + " : " + entry.getValue());
    }
}
~~~


## Map.keySet()
~~~java
static void iteratorUsingKeySet(HashMap map)
{
    Set<String> entries = map.keySet();
    Iterator<String> i = entries.iterator();

    while(i.hasNext()) {
        String key = i.next();
        Object value = map.get(key);
        System.out.println(key + " : " + value);
    }
}
~~~

간단하게 사용해보겠습니다.

~~~java
static void iteratorUsingKeySet(HashMap map)
{
    Iterator i = map.keySet().iterator();

    while(i.hasNext()) {
        String key = (String)i.next();
        Integer value = (Integer)map.get(key);
        System.out.println(key + " : " + value);
    }
}
~~~

---

비슷한 두가지 방식 때문에 헷갈릴 요소가 다분합니다. iterator가 편리한 요소이니 만큼 위험한 부분이 많으므로 조심해서 사용해야합니다.
