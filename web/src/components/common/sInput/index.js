export default {
  name: 'SInput',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    // 值
    value: [String, Number],
    // 禁用
    disabled: Boolean,
    // 输入框占位文本
    placeholder: {
      type: String,
      default: '请输入'
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  created() {

  },
  watch: {
    value(v) {
      this.currentValue = v
    }
  },
  methods: {
    onInputChange(e) {
      this.$emit('change', e.target.innerText)
    }
  }
}
