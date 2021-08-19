1. nest JS 기본 구조 설명 

    .eslintrc.js  ---> 타입 스크립트로 이루어진 restJS를 사용하는 가이드 라인 제시, 문법 오류 체크 등, 설정하는 js 파일
    
    prettierrc ---> 코드 포멧터 역활    
    
    nest-cli.json ---> rest 프로젝트를 위해 특정한 설정을 할 수 있는 json파일
    package.json ---> 라이브러리(dependency), 빌드 등을 관리

    src ---> nest JS의 대부분의 로직이 담긴 폴더

2. Watch : 코드 변경 시 자동으로 리컴파일

    개발 서버를 시작할 때 다음 CLI 명령으로 시작한다.

    $ nest start --watch
    위 명령어는 CLI로 프로젝트를 생성했다면
    package.json에도 정의가 되어 있을 것이다.

    "start:dev" : "nest start --watch"
    그럼 다음과 같이 실행 할 수 있다.

    $ npm run start:dev
    
    * 중요 *
    실개발에서는 Watch를 이용하면, 프로젝트 전체가 재 시작되기 때문에
    데미지가 크고, 번들 파일들이 많아지면, 병목 현상이 생길수 있다.
    그럴때는 Hot reload 사용해야 된다.

    Hot reload 사용 링크 : https://velog.io/@kys6879/Nest.JS-Hot-reload-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0

