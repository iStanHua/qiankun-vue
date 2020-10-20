import Clipboard from './clipboard'

const install = (Vue) => {
  Vue.directive('Clipboard', Clipboard)
}

if (window.Vue) {
  window.Clipboard = Clipboard
  Vue.use(install)
}

Clipboard.install = install

export default Clipboard
