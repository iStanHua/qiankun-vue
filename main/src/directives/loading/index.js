import Loading from './loading'

const install = (Vue) => {
  Vue.directive('Loading', Loading)
}

if (window.Vue) {
  window.Loading = Loading
  Vue.use(install)
}

Loading.install = install

export default Loading
