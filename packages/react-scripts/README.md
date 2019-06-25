# nara-react-scripts

나라 드라마 제작을 위한 초기 템플릿입니다.<br>
create react app 과 함께 사용가능하며, react-scripts를 fork하여 만든 패키지입니다.

드라마는 다양한 개발자들이 개발하기 때문에 다음과 같은 이슈들이 있습니다.

- 구조와 네이밍이 개발자마다 다르다.
- 배포를 위한 build, snap build 가 쉽지 않다.
- 소스코드의 품질을 통제하기 어렵다.
- 프론트 개발을 처음 접하는 개발자에게 가이드가 필요하다.

nara-react-scripts 는 위의 이슈를 해결하기 위해

- Webpack 설정은 nara-react-scripts 한곳에 모여있습니다.
- eslint-config-nara 를 eslint 설정으로 구성하여 소스코드의 품질을 관리할 수 있습니다.
- 구조와 네이밍을 나라플랫폼과 동일하게 하여 템플릿을 제공합니다.

### 명령어

```cfml
  npx create-react-app my-app --scripts-version nara-react-scripts
```

#### Todo

타입스크립트 버전은 tslint 설정 구성 후 추가 제공할 예정입니다.<br><br>

#### create react app 참고

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.
