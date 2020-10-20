import { Base64 } from 'js-base64'

import SectionNav from '@/components/sectionNav/index.vue'
import UploadImage from '@/components/common/upload/image.vue'

import { MD5 } from '@/utils/md5'
import { FILE_BASE_URL } from '@/utils/variable'
import { ValidatePassword } from '@/utils/validate'

import { UpdatePassword, UpdateAvatar } from '@/api/user'

export default {
  name: 'AccountPage',
  data() {
    return {
      FILE_BASE_URL,
      dialog: {
        type: 1,
        visible: false,
        form: {},
        rules: {
          old_password: [{ required: true, message: '请输入原密码', trigger: 'blur' }],
          password: [{
            required: true, trigger: 'blur', validator: (rule, val, callback) => {
              if (!val) { callback(new Error('请输入新密码')) }
              else if (!ValidatePassword(val)) { callback(new Error('密码必须8-30位，包含字母、数字和特殊字符')) }
              else { callback() }
            }
          }],
          password2: [{
            required: true, trigger: 'blur', validator: (rule, val, callback) => {
              if (!val) { callback(new Error('请输入确定新密码')) }
              else if (this.dialog.form.password !== val) { callback(new Error('与新密码不一致')) }
              else { callback() }
            }
          }],
          avatar: [{ required: true, message: '请选择用户头像', trigger: 'change' }]
        },
      }
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo
    }
  },
  components: {
    SectionNav,
    UploadImage
  },
  created() {

  },
  methods: {
    onUpdateInfo() {
      this.dialog.type = 2
      this.dialog.title = '修改头像'
      this.dialog.form = {
        avatar: this.userInfo.avatar || ''
      }
      this.dialog.visible = true
      setTimeout(() => {
        this.$refs.dialogFormRef.clearValidate()
      }, 0)
    },
    onUpdatePassword() {
      this.dialog.type = 1
      this.dialog.title = '修改密码'
      this.dialog.visible = true
      setTimeout(() => {
        this.$refs.dialogFormRef.clearValidate()
      }, 0)
    },
    onSubmitForm() {
      this.$refs.dialogFormRef.validate(valid => {
        if (valid) {
          if (this.dialog.type === 1) {
            UpdatePassword({
              old_password: Base64.encode(MD5(this.dialog.form.old_password)),
              password: Base64.encode(MD5(this.dialog.form.password))
            }).then(res => {
              this.$alert('修改密码成功', '提示', {
                confirmButtonText: '确定',
                type: 'success',
                callback: () => {
                  this.dialog.visible = false
                  this.$store.dispatch('logout')
                }
              })
            }).catch(err => {
              console.log(err)
            })
          }
          else {
            UpdateAvatar({
              avatar: this.dialog.form.avatar
            }).then(res => {
              this.$alert('修改头像成功', '提示', {
                confirmButtonText: '确定',
                type: 'success',
                callback: () => {
                  this.dialog.visible = false
                }
              })
            }).catch(err => {
              console.log(err)
            })
          }
        }
        else {
          return false
        }
      })
    }
  }
}