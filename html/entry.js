const render = $ => {
  $('#app').html('Hello, render with jQuery')
  return Promise.resolve()
}

(global => {
  global['html'] = {
    bootstrap: () => {
      console.log('html bootstrap')
      return Promise.resolve()
    },
    mount: () => {
      console.log('html mount')
      return render($)
    },
    unmount: () => {
      console.log('html unmount')
      return Promise.resolve()
    },
  }
})(window)