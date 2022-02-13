# 작업노트

## 요구사항

- React
- Typescript
- dev, staging, production 환경 제공
- webpack-dev-server 제공

## 추가 요구사항
### 스타일 도구
- emotion
- tailwindcss

### 데이터 관리도구 
- recoil
- redux-toolkit

---
# webpack 설정하기

명령어에 따라 모드를 설정할수 있도록 할 생각

https://webpack.kr/guides/environment-variables/

웹팩에 여러 환경변수를 보낼수 있다.
```
webpack --env mode=dev
// { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true, mode: 'dev' }
```

mode에 따라 빌드 환경이 달라지도록 코드를 구성한다.




