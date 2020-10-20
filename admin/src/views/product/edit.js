import formMixin from '@/mixins/form'

import UploadImage from '@/components/common/upload/image.vue'

import { ValidatePureNumber } from '@/utils/validate'

import { ProductDetail, EditProduct } from '@/api/product'

export default {
  mixins: [formMixin],
  name: 'ProductEdit',
  data() {
    return {
      form: {
        rules: { 
          name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
          data: [{ required: true, message: '请输入数据', trigger: 'blur' }],
          sort: [{
            trigger: 'blur', validator: (rule, val, callback) => {
              if (!val) { callback() }
              if (!ValidatePureNumber(val)) { callback(new Error('排序必须是整数')) }
              else { callback() }
            }
          }],
        },
        url: EditProduct
      },
      detailUrl: ProductDetail
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