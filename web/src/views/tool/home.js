import { debounce } from '@/utils'

import Loading from '@/components/common/loading/index.vue'
import Empty from '@/components/common/empty/index.vue'

export default {
  name: 'ToolPage',
  data() {
    return {
      loading: true,
      // 列表
      list: [
        { name: 'Base64加解密', path: '/tool/base64' }
      ]
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