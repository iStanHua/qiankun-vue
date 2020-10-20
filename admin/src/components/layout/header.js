import { FILE_BASE_URL } from '@/utils/variable'

export default {
  name: 'HeaderLayout',
  data() {
    return {
      FILE_BASE_URL
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo || {}
    },
    // 短信余额
    smsBalance() {
      return this.$store.state.smsBalance || 0
    }
  },
  created() {
    this.$store.dispatch('fetchUserInfo')
    this.$store.dispatch('userBalance')
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
