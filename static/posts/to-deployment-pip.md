오랜만에 블로그를 쓰게 되었습니다. 16년 초에 미국에 다녀오고, 학교를 다니면서 계속 졸업 프로젝트에 매달리다보니 블로그를 쓰기 어렵게 되더군요.  

오늘은 pip로 라이브러리 배포 및 사용하기에 대한 내용입니다.

배포한 라이브러리는 <[https://github.com/sosanara/sosaML](https://github.com/sosanara/sosaML)> sosaML이라는 이미지 전처리와 머신러닝 데이터와 값을 비교하는 부분입니다. 팀원이 따로 라이브러리를 배포하여 사용해보려고 했습니다.



#### 1. setup.py

setup.py파일을 먼저 만듭니다. <[https://github.com/sosanara/sosaML/blob/master/setup.py](https://github.com/sosanara/sosaML/blob/master/setup.py)>

~~~ python
from setuptools import setup, find_packages

setup_requires = [
    ]

install_requires = [
    'pillow==3.2.0',
    'numpy==1.11.0',
    'scipy==0.17.0',
    'sklearn==0.0',
    ]

dependency_links = [
    ]

setup(
    name='sosaML',
    version='0.1',
    description='sosanara machine learning',
    author='WonJongLee',
    author_email='b1o3.sosanara@gmail.com',
    packages=["ML"],
    include_package_data=True,
    install_requires=install_requires,
    setup_requires=setup_requires,
    dependency_links=dependency_links,
    # scripts=['manage.py'],
    entry_points={
        'console_scripts': [
            ],
        "egg_info.writers": [
                "foo_bar.txt = setuptools.command.egg_info:write_arg",
            ],
        },
    )
~~~

위 처럼 의존받는 패키지들과 각 설정 부분을 채워주시면 됩니다.



#### 2. MANIFAST.in

MANIFAST.in 파일 안에는 static, template 파일들을 설정해줍니다.
`recursive-include app/static *` 와 같이 간단하게 작성해 주시면 됩니다.



#### 3. additional files

각 설정에 따라 `README.txt`파일과 `LICENSE.txt`파일을 추가해주세요.



#### 4. 배포 준비

위 파일들의 작성으로 업로드 준비가 완료되었습니다.

`$ python setup.py sdist`

해당 명령어로 배포를 시작합니다. 배포를 하면 새로운 폴더에 tar (압축파일)이 생깁니다.



#### 5. 설치

`$ python setup.py install`

위 명령어로 tar 파일을 간단하게 설치할 수 있습니다.

`$ python setup.py develop`

개발 버전이라면 위 명령어로도 설치할 수 있습니다.



#### 6. 공유

라이브러리를 사용자들에게 공유하기 위해 배포하는 것이니, 이 부분이 가장 중요하다고 할 수 있습니다.

`$ python setup.py register`

위 명령어로 packaging을 수행하고 등록 절차를 수행합니다. 순서대로 설정을 마쳤다면

`$ python setup.py sdist upload`

업로드를 시작합니다.


이처럼 매우 간단하게 설정 및 배포를 할 수 있습니다. 버전 변경은 `setup.py` 파일에서 수행하면 됩니다. 바뀐 로그는 `CHANGE.txt`에 반영됩니다.



#### 7. 사용

하지만, 이런 배포가 아닌 pip에서 바로 github같은 vcs에 있는 라이브러리를 사용해야 할 경우가 있습니다. (배포가 아닌 나만 사용할 라이브러리.) 이런 경우에는 애초에 배포를 할 경우, 설정 파일이 필요없습니다.

`$ pip install -e git+https://github.com/sosanara/sosaML.git#egg=ML`

위와 같은 명령어로 설치할 수 있습니다. `-e` 옵션은 egg로 파일을 설치하겠다는 뜻이며, `egg=ML` 부분은 egg의 이름으로 ML로 설치하겠다는 뜻입니다.  

---

배포를 자세하게 알아보고 찾아봤지만, sosaML이라는 라이브러리는 저희가 사용하기 위해 최적화 해놓은 라이브러리 였기 때문에 git에서 바로 끌어다 사용하였습니다. 하지만, 이 방법은 PyCharm에서도 자동 경로탐색을 하지 못하는 문제를 보였습니다.  

오랜만에 블로그 글을 작성했는데, 이제는 더 많은 부분을 정리해야 할 것 같네요. 앞으로 자주 뵙겠습니다.


참고 - [https://pip.pypa.io/en/stable/user_guide/#installing-packages](https://pip.pypa.io/en/stable/user_guide/#installing-packages)  
참고 - [https://www.digitalocean.com/community/tutorials/how-to-package-and-distribute-python-applications](https://www.digitalocean.com/community/tutorials/how-to-package-and-distribute-python-applications)
