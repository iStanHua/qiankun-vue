const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)
const isProd = ['production', 'prod'].includes(process.env.NODE_ENV)
const { name } = require('./package')

module.exports = {
  configureWebpack: config => {
    const plugins = []
    if (isProd) {
      plugins.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']
            }
          },
          extractComments: /@extract/i,
          sourceMap: false,
          parallel: true
        })
      )
    }
    config.plugins = [
      ...config.plugins,
      ...plugins
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    output: {
      library: `${name}-[name]`,
      // 把微应用打包成 umd 库格式
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/variables.scss";'
      }
    }
  },
  devServer: {
    port: 9002,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}
