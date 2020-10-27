/**
 * @author 陌上青夏
 * @创建时间 2020/10/12 5:39 下午
 */
const { name } = require('./package.json')

module.exports ={
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
    devServer: {
      port: 8001,
      headers: {
        'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
      }
    }
  }
}
