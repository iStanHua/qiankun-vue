import { Base64 } from 'js-base64'

import Clipboard from '@/directives/clipboard/index'

import Tabs from '@/components/common/tabs/index.vue'
import InputBox from '@/components/common/inputBox/index.vue'

export default {
  name: 'Base64ToolPage',
  data() {
    return {
      tabTitle: ['Base64加密', 'Base64解密'],
      index: 0,

      content: '',
      result: ''
    }
  },
  computed: {
  },
  directives: {
    Clipboard
  },
  components: {
    Tabs,
    InputBox
  },
  created() {

  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
    onTabChange() {
      this.handleBase64()
    },
    onInputChange() {
      this.handleBase64()
    },
    handleBase64() {
      if (!this.content) {
        this.result = ''
        return
      }
      if (this.index === 0) this.result = Base64.encode(this.content)
      else this.result = Base64.decode(this.content)
    },
    // 清空
    onClear() {
      this.content = ''
    },
  }
}