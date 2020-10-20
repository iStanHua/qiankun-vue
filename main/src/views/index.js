import { debounce } from '@/utils'

import Loading from '@/components/common/loading/index.vue'
import Empty from '@/components/common/empty/index.vue'

export default {
  name: 'HomePage',
  data() {
    return {
      loading: true,
      // 列表
      list: []
    }
  },
  computed: {
  },
  components: {
    Loading,
    Empty
  },
  created() {
    
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
  }
}