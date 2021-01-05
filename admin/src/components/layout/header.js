// import { FILE_BASE_URL } from '@/utils/variable'

export default {
  name: 'HeaderLayout',
  data() {
    return {
      // FILE_BASE_URL
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo || {}
    }
  },
  created() {
    // this.$store.dispatch('fetchUserInfo')
  },
  methods: {
    onLogo() {
      this.$router.push('/')
    },
    onCommand(cmd) {
      if (cmd === 'info') {
        this.$router.push('/account/info')
      }
      else if (cmd === 'logout') {
        this.$store.dispatch('logout')
      }
    }
  }
}
