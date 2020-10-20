import formMixin from '@/mixins/form'

import UploadImage from '@/components/common/upload/image.vue'

import { ValidatePureNumber } from '@/utils/validate'

import { ScoreDetail, EditScore } from '@/api/score'

export default {
  mixins: [formMixin],
  name: 'ScoreEdit',
  data() {
    return {
      form: {
        rules: { 
          user_id: [{ required: true, message: '请输入会员编号', trigger: 'blur' }],
          sort: [{
            trigger: 'blur', validator: (rule, val, callback) => {
              if (!val) { callback() }
              if (!ValidatePureNumber(val)) { callback(new Error('排序必须是整数')) }
              else { callback() }
            }
          }],
        },
        url: EditScore
      },
      detailUrl: ScoreDetail
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