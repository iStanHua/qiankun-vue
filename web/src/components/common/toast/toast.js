export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      time: 3000,
      show: false
    }
  },
  computed: {

  },
  created() {
    this.onClose()
  },
  methods: {
    onClose() {
      setTimeout(() => {
        this.show = false
        this.$el.parentNode.removeChild(this.$el)
      }, this.time)
    }
  }
}