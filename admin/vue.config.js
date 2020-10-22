const TerserPlugin = require('terser-webpack-plugin')

const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const { name } = require('./package.json')

module.exports = {
  publicPath: '/admin',
  transpileDependencies: ['common'],
  productionSourceMap: false,
  lintOnSave: false,
  filenameHashing: true,

  configureWebpack: config => {
    if (IS_PROD) {
      const plugins = [];
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

      config.plugins = [
        ...config.plugins,
        ...plugins
      ]
    }
  },
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true)

    // 修复Lazy loading routes
    config.plugin('html').tap(args => {
      args[0].chunksSortMode = 'none'
      return args
    })
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}`,
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
    hot: true,
    disableHostCheck: true,
    port: process.env.VUE_APP_PORT,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8090'
      }
    }
  }
}
