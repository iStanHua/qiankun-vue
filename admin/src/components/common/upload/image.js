import draggable from 'vuedraggable'

import { BASE_URL } from '@/utils/variable'

export default {
  name: 'UploadImage',
  model: {
    prop: 'src',
    event: 'change'
  },
  props: {
    src: String,
    width: Number,
    height: Number,
    multiple: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'product'
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      uploadForm: {
        fileUrl: BASE_URL,
        limit: 30,
        list: [],
        timer: null
      }
    }
  },
  computed: {
    action() {
      if (this.width && this.height) {
        return `${BASE_URL}/api/upload/image/${this.type}/${this.width}/${this.height}`
      }
      else {
        return `${BASE_URL}/api/upload/image/${this.type}`
      }
    },
    headers() {
      return { Authorization: `Bearer ${this.$store.state.authToken}` }
    }
  },
  components: {
    draggable,
  },
  created() {
    this.uploadForm.timer = setInterval(() => {
      if (this.src) {
        this.uploadForm.list = this.src.split(',').map(s => this.uploadForm.fileUrl + s)
        clearInterval(this.uploadForm.timer)
      }
    }, 350)

    // this.multiple && (this.uploadForm.limit = 30)
  },
  beforeDestroy() {
    if (this.uploadForm.timer)
      clearInterval(this.uploadForm.timer)
  },
  watch: {
    src(n) {
      if (!n) {
        this.uploadForm.list = []
      }
      else {
        this.uploadForm.list = n.split(',').map(s => this.uploadForm.fileUrl + s)
      }
    }
  },
  methods: {
    onUploadBefore(file) {
      const isIamge = file.type === 'image/jpeg' || file.type === 'image/png'

      if (!isIamge) {
        this.$alert('上传图片只能是jpg、png格式!', '提示', {
          confirmButtonText: '确定', type: 'error'
        })
      }

      const isSize = file.size / 1024 / 1024 < 2
      if (!isSize) {
        this.$alert('上传图片大小不能超过 2MB!', '提示', {
          confirmButtonText: '确定',
          type: 'error'
        })
      }
      return isIamge && isSize
    },
    onExceedLimit() {
      this.$alert(`图片超出${this.uploadForm.limit}个数限制`, '提示', {
        confirmButtonText: '确定', type: 'error'
      })
    },
    onUploadSuccess(res) {
      if (res.code === 200) {
        if (this.multiple) {
          this.uploadForm.list.push(this.uploadForm.fileUrl + res.data.url)
          this.outputList()
        }
        else {
          this.uploadForm.list = [this.uploadForm.fileUrl + res.data.url]
          this.$emit('change', res.data.url)
        }
      }
      else {
        this.$alert(res.msg, '提示', {
          confirmButtonText: '确定', type: 'error'
        })
        if (this.uploadForm.limit === 1) {
          this.uploadForm.list = []
        }
      }
      this.$el.querySelector('input').value = null
    },
    onRemoveImage(i) {
      this.uploadForm.list.splice(i, 1)
      this.outputList()
    },
    onEnd() {
      this.outputList()
    },
    outputList() {
      let _arr = []
      this.uploadForm.list.forEach(l => {
        _arr.push(l.replace(this.uploadForm.fileUrl, ''))
      })
      this.$emit('change', _arr.join(','))
      _arr = null
    },
    handleMove() {
      return !this.disabled
    }
  },
}