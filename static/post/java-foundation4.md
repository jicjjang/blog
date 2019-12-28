~~~java
...

JFrame frame = new JFrame();
Container contentPane = frame.getContentPane();
JButton btn = new JButton("버튼!");

contentPane.setBackground(Color.YELLOW);

frame.add(btn);

...
~~~

위 코드처럼 버튼 component를 생성한 후 버튼의 배경색을 정한 후,
frame의 contentPane에 버튼을 추가를 하면 container에 노란 배경의 버튼인 생성됩니다.  

하지만, osx 환경에서 component들에서는 배경색이 변경된다고 생각했으나, 색이 적용이 되지 않았습니다.

~~~java
...

JButton btn = new JButton("버튼!");

btn.setBackground(Color.YELLOW);

btn.setOpaque(true);

btn.setBorderPainted(false);

...
~~~

위 코드처럼 setOpaque(true)와 setBorderPainted(false)를 넣어주면 잘 나오게 됩니다.  

setOpaque(bool)는 true일 경우 경계 내의 모든 픽셀을 채우지만, false일 경우 일부 또는 전부를 채우지 않는다고 합니다. (osx에서는 안채워주는것 같네요.)

<figure style="text-align: center;">
    <img src="https://jicjjang.github.io/blog/static/image/java/foundation/setOpaque.png" alt="image" />
</figure>

setBorderPainted(bool)는 true일 경우 테투리가 칠해집니다. (이 값을 true로, setOpaque도 true로 준 경우, border만 칠해집니다. 이 역시 osx문제인 것 같습니다.)

<figure style="text-align: center;">
    <img src="https://jicjjang.github.io/blog/static/image/java/foundation/setBorderPainted.png" alt="image" />
</figure>

---

잘 모르는 오류들이 나올때 마다 포스팅을 하는데 재미지네요 :) 자바로 빨리 프로젝트를 진행해보고픈 욕심히 생깁니다!
