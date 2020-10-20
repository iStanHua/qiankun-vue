export default {
  name: 'Tabs',
  model: {
    prop: 'index',
    event: 'change'
  },
  props: {
    // 当前索引
    index: Number,
    // 标题列表
    title: Array,
  },
  data() {
    return {
      // 当前位置
      currentIndex: 0,
      // 上一个索引
      prevIndex: 0,
      // 标题列表
      titleList: [],
      childList: []
    }
  },
  computed: {
    showContent() {
      if (!this.title)
        return this.childList.every(t => t.isSlot)
      else return false
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.title) this.init()
      else this.titleList = this.title
    })
  },
  watch: {
    index(v) {
      this.currentIndex = v
      if (this.title && this.title.length) return
      this.handleChildData()
    },
    title(v) {
      this.titleList = v || []
    }
  },
  methods: {
    // 初始化
    init() {
      this.titleList = []
      this.childList = []

      this.$children.forEach(c => {
        if (c.$options.name === 'TabPanel') {
          this.childList.push(c)
          this.titleList.push(c.title)
        }
      })
      this.handleChildData()
    },
    // 点击事件
    onTabItem(i) {
      if (this.currentIndex === i) return

      this.prevIndex = this.currentIndex
      this.currentIndex = i

      this.handleChildData()
    },
    handleChildData() {
      if (this.childList && this.childList.length) {
        this.childList.forEach((t, i) => {
          if (i === this.currentIndex) t.active = true
          else t.active = false

          if (this.currentIndex >= this.prevIndex) t.isNext = true
          else t.isNext = false
        })
      }
      this.$emit('change', this.currentIndex)
    }
  }
}