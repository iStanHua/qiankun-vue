
import HeaderLayout from '@/components/layout/header.vue'
import FooterLayout from '@/components/layout/footer.vue'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  computed: {
    isIE() {
      new RegExp('MSIE (\\d+\\.\\d+);').test(navigator.userAgent)
      if (parseFloat(RegExp['$1']) < 10)
        return true
      else
        return false
    },
    isAlive() {
      return !!this.$route.meta.alive
    }
  },
  components: {
    HeaderLayout,
    FooterLayout
  },
  created() {

  },
  methods: {
  }
}