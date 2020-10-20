import autosize from 'autosize'

import { debounce } from '@/utils'

export default {
  name: 'InputBox',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    // 值
    value: [String, Number],
    // 输入框类型(text,textarea)
    type: {
      type: String,
      default: 'text'
    },
    // 禁用
    disabled: Boolean,
    // 只读
    readonly: Boolean,
    // 自动补全
    autocomplete: {
      type: String,
      default: 'off'
    },
    // 输入框占位文本
    placeholder: {
      type: String,
      default: '请输入'
    },
    // 自动获取焦点
    autofocus: Boolean,
    // 自适应内容高度
    autosize: Boolean,
    // 是否可清空
    clearable: Boolean,
    // 延迟时间，单位毫秒
    delay: {
      type: Number,
      default: 350
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  computed: {
    inputClass() {
      let cls = []
      if (this.$slots.prepend) {
        if (this.$slots.append) cls.push('input-prepend')
        else cls.push('input-prepend-append')
      }
      else if (this.$slots.append || this.clearable) cls.push('input-append')
      if (this.type === 'textarea') cls.push('textarea-box')
      console.log(cls)
      return cls.join(' ')
    },
    isClear() {
      if (this.clearable) return !!this.value
      else return false
    }
  },
  created() {
    this.onChange = debounce(this.onChange, this.delay)
  },
  mounted() {
    this.$input = this.$el.querySelector('.input')
    // 自适应内容高度
    if (this.autosize && this.type === 'textarea') {
      autosize(this.$input)
    }
  },
  beforeDestroy() {
    delete this.$input
  },
  watch: {
    value(v) {
      this.currentValue = v
    }
  },
  methods: {
    // 输入
    onChange() {
      this.$emit('change', this.currentValue)
    },
    // 焦点
    onFocus(e) {
      this.$emit('focus', e)
    },
    // 失焦
    onBlur(e) {
      this.$emit('blur', e)
    },
    // 清空
    onClear() {
      this.currentValue = ''
      this.$emit('change', '')
      this.$emit('clear')
    },
    // 获取焦点
    focus() {
      this.$input.focus()
    },
    // 获取失焦
    blur() {
      this.$input.blur()
    },
    // 内容全选
    select() {
      this.$input.select()
    }
  }
}