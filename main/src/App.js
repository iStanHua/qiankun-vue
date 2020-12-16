export default {
  name: 'App',
  data() {
    return {}
  },
  computed: {
    isIE() {
      new RegExp('MSIE (\\d+\\.\\d+);').test(navigator.userAgent)
      if (parseFloat(RegExp['$1']) < 10)
        return true
      else
        return false
    }
  },
  created() {
  },
  methods: {
  }
}