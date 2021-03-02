const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)
const isProd = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  filenameHashing: true,
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
    }
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
    open: true,
    hot: true,
    disableHostCheck: true,
    port: 9000,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
    }
  }
}
