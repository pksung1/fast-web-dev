# Webpack-react-typescript

## installation

```
yarn install

yarn dev
```

## 명령어

```
yarn dev --mode <mode> // webpack-dev-server를 실행합니다.
yarn build:dev // dev 환경으로 빌드합니다.
yarn build:staging // staging 환경으로 빌드합니다.
yarn build:prod // production 환경으로 빌드합니다.
yarn analyze // production 환경의 analyze 한 결과를 보여줍니다.
```

## 환경추가
/webpack 폴더에 [환경이름].config.js 를 추가합니다.

기본적으로 아래 코드를 따릅니다.
mode를 변경할수 있고, 옵션을 추가할수있습니다.
```js
const common = require('./common.config')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
})
```
파일 추가후 아래 코드로 환경을 수행할수 있습니다.
```
yarn build --env mode=[환경이름]
```

## 배포작업


## 지원
- React
- Typescript
- dev, staging, production 환경 제공
- webpack-dev-server 제공