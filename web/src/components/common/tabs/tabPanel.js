export default {
  name: 'TabPanel',
  props: {
    // 标题
    title: String
  },
  data() {
    return {
      // 是否显示
      active: false,
      // next
      isNext: false,
      // 是否有slot内容
      isSlot: false
    }
  },
  computed: {
    className() {
      let cls = []
      if (this.active) cls.push('tab-active')

      if (this.isNext) cls.push('slide-right')
      else cls.push('slide-left')
      return cls.join(' ')
    }
  },
  created() {
  },
  mounted() {
    this.isSlot = !!this.$slots.default
  },
  methods: {

  }
}