import HeaderLayout from './header.vue'

import { ArrayToTree } from '@/utils'

export default {
  name: 'AdminLayout',
  data() {
    return {
      navHidden: false
    }
  },
  components: {
    HeaderLayout
  },
  computed: {
    defaultActive() {
      let to = this.$route
      let path = to.path
      if (to.matched.length) {
        let p = to.matched[to.matched.length - 1].path
        if (p.indexOf(':') > -1) {
          path = p.substring(0, p.indexOf(':') - 1)
        }
      }
      return path
    },
    defaultOpeneds() {
      let paths = this.$route.path.split('/')
      if (paths.length > 1) return [paths[1]]
      else return [paths[0]]
    },
    resourceTree() {
      return ArrayToTree(this.$store.state.resourceList || [], 0)
    },
    resourceRoutes() {
      let routes = []
      let list = this.$store.state.resourceList || []
      list.forEach(l => {
        if (l.route) {
          routes.push(l.route)
        }
      })
      return routes
    },
    isAlive() {
      return !!this.$route.meta.alive
    }
  },
  created() {
    // this.$store.dispatch('setResource')
    // this.$store.dispatch('setDictionary')
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.checkRouteAuth(vm, to)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.checkRouteAuth(this, to, next)
  },
  watch: {
    resourceRoutes() {
      this.checkRouteAuth(this, this.$route)
    }
  },
  methods: {
    onToggleNav() {
      this.navHidden = !this.navHidden
    },
    checkRouteAuth(vm, to, next) {
      let path = to.path
      if (to.matched.length) {
        let p = to.matched[to.matched.length - 1].path
        if (p.indexOf(':') > -1) {
          path = p.substring(0, p.indexOf(':') - 1)
        }
      }

      if (path === '/' || path === '/auth' || to.meta.active === '404' || !vm.resourceRoutes.length) {
        next && next()
        return
      }

      if (!vm.resourceRoutes.includes(path)) {
        vm.$router.replace('/auth')
      }
      else {
        next && next()
      }
    }
  }
}
