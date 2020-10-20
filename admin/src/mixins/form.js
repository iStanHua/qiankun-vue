// mixins/form.js

import SectionNav from '@/components/sectionNav/index.vue'

import { debounce } from '@/utils/index'

export default {
	data() {
		return {
			type: this.$route.params.type || '',
			id: this.$route.params.id || 0,
			navTitle: document.title,
			form: {
				back: true,
				data: {},
				ref: 'formRef',
				rules: {},
				url: null,
				loading: false
			},
			detailUrl: null,
			// 查看详情前回调函数
			beforeFetchCallback: null,
			// 查看详情成功回调函数
			afterFetchCallback: null,
			// 提交前回调函数
			beforeSubmitCallback: null,
			// 提交成功回调函数
			afterSubmitCallback: null
		}
	},
	computed: {
	},
	components: {
		SectionNav
	},
	created() {
		if (!this.isComponent) {
			(this.id != 0) && this.fetchDetail()
		}
		this.onSubmitForm = debounce(this.onSubmitForm, 380)
	},
	methods: {
		// 获取详情
		fetchDetail() {
			if (!this.detailUrl) return

			this.form.loading = true

			typeof this.beforeFetchCallback === 'function' && this.beforeFetchCallback()

			this.detailUrl(this.id).then(res => {
				this.form.loading = false
				this.form.data = res.data

				typeof this.afterFetchCallback === 'function' && this.afterFetchCallback(res.data)

			}).catch(err => {
				this.form.loading = false
				console.log(err)
			})
		},
		// 返回
		onBack() {
			if (!this.isComponent) {
				this.$router.go(-1)
			}
			else {
				this.$emit('change', '')
			}
		},
		// 提交
		onSubmitForm() {
			if (this.form.loading) return

			this.$refs[this.form.ref].validate(valid => {
				if (valid) {
					if (!this.form.url) return

					this.form.loading = true
					let param = Object.assign({}, this.form.data)

					if (typeof this.beforeSubmitCallback === 'function') {
						if (!this.beforeSubmitCallback(param)) {
							this.form.loading = false
							return
						}
					}
					
					this.form.url(param).then(res => {
						this.$alert(this.id == 0 ? '新增成功' : '修改成功', '提示', {
							confirmButtonText: '确定',
							type: 'success',
							callback: () => {
								this.form.loading = false
								if (this.isComponent) {
									this.$emit('change', param)
									return
								}
								if (this.form.back) {
									this.onBack()
								}
								else {
									typeof this.afterSubmitCallback === 'function' && this.afterSubmitCallback(res)
								}
							}
						})
					}).catch(err => {
						this.form.loading = false
						console.log(err)
					})

				} else {
					this.form.loading = false
					return false
				}
			})
		}
	}
}