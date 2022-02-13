const fs = require('fs')
const path = require('path')
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server')

const { Command } = require('commander');
const program = new Command();

const modeList = fs.readdirSync(__dirname).reduce((modes, filename) => {
  const sliceIndex = filename.lastIndexOf('.config.js') 
  if (sliceIndex !== -1) {
    return [...modes, filename.slice(0, sliceIndex)]
  }
  return modes;
}, [])

program
  .name('dev-server')
  .description('webpack dev server을 실행하기 위한 프로그램입니다.')
  .version('0.0.1');

program.option('--mode <string>', `실행할 환경을 작성합니다. (${modeList.join(', ')})`)
program.parse()
const options = program.opts()

if (!modeList.includes(options.mode)) {
  console.error(`'${modeList.join(', ')}' 중 하나의 모드를 선택해주세요.`)
  throw Error('--mode not found')
}

const webpackConfig = require(`./${options.mode}.config.js`)
const {devServerConfig, ...config} = webpackConfig;
const compiler = Webpack(config)

const devServerOptions = {...devServerConfig, open: true}
const server = new WebpackDevServer(devServerOptions, compiler)

const runServer = async () => {
  console.log('서버 실행중 ....')
  await server.start();
}

server.startCallback(() => {
  console.log('서버 실행!')
})

runServer();
