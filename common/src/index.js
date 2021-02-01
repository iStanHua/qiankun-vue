// src/index.js

/**
 * 函数去抖
 * @param {Fouction} func
 * @param {Number}  time
 */
export function debounce(func, time) {
  let timer = null
  return () => {
    let args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, time)
  }
}

/**
 * 节流函数
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  执行间隔，单位是毫秒（ms）
 * @return {Function}
 */
export function throttle(fn, threshhold) {
  // 记录上次执行的时间
  let last

  // 定时器
  let timer

  // 默认间隔为 250ms
  threshhold || (threshhold = 250)

  // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
  return function () {
    // 保存函数调用时的上下文和参数，传递给 fn
    let context = this
    let args = arguments

    let now = +new Date()

    // 如果距离上次执行 fn 函数的时间小于 threshhold，那么就放弃
    // 执行 fn，并重新计时
    if (last && now < last + threshhold) {
      clearTimeout(timer)

      // 保证在当前时间区间结束后，再执行一次 fn
      timer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshhold)

      // 在时间区间的最开始和到达指定间隔的时候执行一次 fn
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}

/**
 * 数组转换成树形结构
 * @param {Array}   data       数组
 * @param {Number}  parent_id  父级编号
 */
export function ArrayToTree(data, parent_id = 0, isFilter = true) {
  let result = []
  let temp
  for (let i = 0; i < data.length; i++) {
    const l = data[i]
    if (isFilter)
      if (l.menu == 2) continue

    if (l.parent_id == parent_id) {
      temp = ArrayToTree(data, l.id, isFilter)
      if (temp.length > 0) l.children = temp
      l.value = l.id
      l.label = l.name
      result.push(l)
      l = null
      temp = null
    }
  }
  return result
}