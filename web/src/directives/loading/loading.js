export default {
  bind(el) {
    const div = document.createElement('div')
    div.className = 'loading'
    el.appendChild(div)
    el.classList.add('v-loading')
  }
}