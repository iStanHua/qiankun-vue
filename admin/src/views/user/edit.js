import formMixin from '@/mixins/form'

import UploadImage from '@/components/common/upload/image.vue'

import { ValidatePureNumber } from '@/utils/validate'

import { UserDetail, EditUser } from '@/api/user'

export default {
  mixins: [formMixin],
  name: 'UserEdit',
  data() {
    return {
      form: {
        rules: { 
          name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
          secret: [{ required: true, message: '请输入密钥', trigger: 'blur' }],
          sort: [{
            trigger: 'blur', validator: (rule, val, callback) => {
              if (!val) { callback() }
              if (!ValidatePureNumber(val)) { callback(new Error('排序必须是整数')) }
              else { callback() }
            }
          }],
        },
        url: EditUser
      },
      detailUrl: UserDetail
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