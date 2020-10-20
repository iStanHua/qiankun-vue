import formMixin from '@/mixins/form'

import UploadImage from '@/components/common/upload/image.vue'

import { ValidatePureNumber } from '@/utils/validate'

import { CategoryDetail, EditCategory } from '@/api/category'

export default {
  mixins: [formMixin],
  name: 'CategoryEdit',
  data() {
    return {
      form: {
        rules: { 
          name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
          sort: [{
            trigger: 'blur', validator: (rule, val, callback) => {
              if (!val) { callback() }
              if (!ValidatePureNumber(val)) { callback(new Error('排序必须是整数')) }
              else { callback() }
            }
          }],
        },
        url: EditCategory
      },
      detailUrl: CategoryDetail
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