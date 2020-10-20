import XLSX from 'xlsx'

export default {
  name: 'Upload',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    // 上传文件类型(txt,xls)
    type: {
      type: String,
      default: 'txt'
    },
    // 是否支持多选文件
    multiple: Boolean,
    // 是否启用拖拽上传
    drag: Boolean,
    // 上传之前操作
    beforeUpload: Function,
    // 文件路径
    src: {
      type: String,
      default: ''
    },
    // 显示文件名
    showName: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      // 文件名
      fileName: ''
    }
  },
  computed: {
    accept() {
      if (this.type === 'txt') {
        return '.txt'
      }
      else if (this.type === 'xls') {
        return '.xls,.xlsx,.csv'
      }
    }
  },
  created() {
  },
  mounted() {
    if (this.drag) this.handleDrag()
  },
  beforeDestroy() {
    if (this.drag) {
      this.$el.removeEventListener('dragenter', this.onDragOver, false)
      this.$el.removeEventListener('dragover', this.onDragOver, false)
      this.$el.removeEventListener('dragleave', this.onDragLeave, false)
      this.$el.removeEventListener('drop', this.onDragLeave, false)
      this.$el.removeEventListener('drop', this.onFileChange, false)
    }
  },
  methods: {
    onDragOver(e) {
      this.$el.classList.add('is-dragover')
      e.preventDefault()
      e.stopPropagation()
    },
    onDragLeave(e) {
      this.$el.classList.remove('is-dragover')
      e.preventDefault()
      e.stopPropagation()
    },
    handleDrag() {
      this.$el.addEventListener('dragenter', this.onDragOver, false)
      this.$el.addEventListener('dragover', this.onDragOver, false)
      this.$el.addEventListener('dragleave', this.onDragLeave, false)
      this.$el.addEventListener('drop', this.onDragLeave, false)
      this.$el.addEventListener('drop', this.onFileChange, false)
    },
    // file点击
    onFileClick() {
      this.$el.querySelector('input[type=file]').click()
    },
    // 上传文件change
    onFileChange(e) {
      if (!e) return
      let file = e.type === 'drop' ? e.dataTransfer.files[0] : e.target.files[0]
      if (!file) return

      if (typeof this.beforeUpload === 'function' && !this.beforeUpload()) return false

      // 文件大小限制500k
      if (file.size > 512000) {
        this.$alert('文件大小不能超过500KB', '提示', { confirmButtonText: '确定', type: 'error' })
        return
      }

      this.fileName = file.name
      const reader = new FileReader()
      if (this.type === 'txt') {
        if (file.name.lastIndexOf('.txt') > -1) {
          reader.onloadend = () => {
            let result = reader.result || []
            if (result) result = String(result).trim().split('\r\n')
            this.$emit('change', { value: result, file: file })
            file = null
          }
          reader.readAsText(file, 'GB2312')
        }
        else
          this.$alert('上传格式有误，请上传TXT文件', '提示', { confirmButtonText: '确定', type: 'error' })
      }
      else if (this.type === 'xls') {
        if (file.name.lastIndexOf('.xls') > -1 || file.name.lastIndexOf('.xlsx') > -1 || file.name.lastIndexOf('.csv') > -1) {
          reader.onloadend = () => {
            let workbook = XLSX.read(reader.result, { type: 'buffer' })
            // 工作表名称集合
            let sheetNames = workbook.SheetNames;
            // 这里我们只读取第一张sheet
            let worksheet = workbook.Sheets[sheetNames[0]]
            let csv = XLSX.utils.sheet_to_csv(worksheet)
            if (csv) csv = String(csv).trim().split('\n')
            this.$emit('change', { value: csv, file: file })
            file = null
          }
          reader.readAsArrayBuffer(file)
        }
        else
          this.$alert('上传格式有误，请上传EXCEL文件', '提示', { confirmButtonText: '确定', type: 'error' })
      }
      this.$el.querySelector('input').value = null
    }
  }
}