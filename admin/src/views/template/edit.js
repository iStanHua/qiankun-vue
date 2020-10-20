import formMixin from '@/mixins/form'

import UploadImage from '@/components/common/upload/image.vue'

import { ValidatePureNumber } from '@/utils/validate'

import { TemplateDetail, EditTemplate } from '@/api/template'

export default {
  mixins: [formMixin],
  name: 'TemplateEdit',
  data() {
    return {
      form: {
        rules: { 
          name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
          image: [{ required: true, message: '请输入图片', trigger: 'blur' }],
          data: [{ required: true, message: '请输入数据', trigger: 'blur' }],
          sort: [{
            trigger: 'blur', validator: (rule, val, callback) => {
              if (!val) { callback() }
              if (!ValidatePureNumber(val)) { callback(new Error('排序必须是整数')) }
              else { callback() }
            }
          }],
        },
        url: EditTemplate
      },
      detailUrl: TemplateDetail
    }
  },
  computed: {
  },
  components: {
    UploadImage
  },
  created() {
  },
  methods: {
  }
}