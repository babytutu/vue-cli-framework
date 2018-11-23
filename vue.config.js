// vue.config.js
const exec = require('child_process').execSync
// 获取最后一次提交的commitID
const version = exec('git rev-parse --short HEAD').toString().replace(/\n/, '')

module.exports = {
  // 选项...
  assetsDir: 'static',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].version = version
        args[0].title = ''
        return args
      })
  }
}
