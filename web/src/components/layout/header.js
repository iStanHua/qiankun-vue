export default {
  name: 'HeaderLayout',
  data() {
    return {
      list: [
        { name: '首页', path: '/' },
        { name: '在线工具', path: '/tool' }
      ]
    }
  },
  computed: {
    isFixed() {
      return !!this.$route.meta.fixed
    },
    activePath() {
      const route = this.$route
      if (route.meta.activePath) return '/' + route.meta.activePath
      return route.path
    }
  },
  components: {
  },
  created() {
  },
  methods: {
    onLogo() {
      this.$router.push('/')
    },
    onNavItem(i) {
      console.log(i)
      const item = this.list[i]
      if (item.path === this.$route.path) return
      this.$router.push(item.path)
    },
    // 退出
    onLogout() {
      this.$store.dispatch('logout')
    }
  }
}
