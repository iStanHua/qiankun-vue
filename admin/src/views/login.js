import { Base64 } from 'js-base64'

import { ValidatePhoneNumber } from '@/utils/validate'
import { MD5 } from '@/utils/md5'
import { REDIRECT_URL } from '@/utils/variable'

import { Login, UserInfo } from '@/api/user'

export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        data: {
          tel: '',
          password: ''
        },
        ref: 'loginRef',
        rules: {
          tel: [{
            trigger: 'blur', validator: (rule, val, callback) => {
              if (!val) { callback(new Error('请输入手机号')) }
              else if (!ValidatePhoneNumber(val)) { callback(new Error('手机号格式有误')) }
              else { callback() }
            }
          }],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
        }
      },
      disabled: false
    }
  },
  computed: {

  },
  methods: {
    // 登录
    onLogin() {
      if (this.disabled) return

      this.$refs[this.form.ref].validate(valid => {
        if (valid) {
          this.disabled = true

          Login({
            tel: this.form.data.tel,
            password: Base64.encode(MD5(this.form.data.password))
          }).then(res => {
            this.$store.commit('SET_AUTH_TOKEN', res.data)

            this.$router.replace(localStorage.getItem(REDIRECT_URL) ? localStorage.getItem(REDIRECT_URL) : '/index')

            this.$store.dispatch('setResource')
            this.$store.dispatch('setDictionary')

            UserInfo().then(info => {
              this.$store.commit('SET_USERINFO', info.data)
            }).catch(err => {
              console.log(err)
            })

          }).catch(err => {
            this.disabled = false
            console.log(err)
          })
        } else {
          this.disabled = false
          return false
        }
      })
    }
  }
}