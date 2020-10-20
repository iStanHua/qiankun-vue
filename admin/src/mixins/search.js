// mixins/search.js

import SectionNav from '@/components/sectionNav/index.vue'
import Empty from '@/components/common/empty/index.vue'

import { dateFormat } from '@/filters'

import { debounce } from '@/utils/index'

export default {
	data() {
		return {
			routerPath: this.$route.path,
			navTitle: document.title,
			// 请求URL
			fetchURL: null,
			// 筛选之前回调函数
			beforeFetchCallback: null,
			// 筛选成功回调函数
			afterFetchCallback: null,
			// 重置回调函数
			resetCallback: null,
			// 搜索条件
			searchData: {},
			// 搜索条件
			oldSearchData: {},
			tableData: {
				// 是否分页
				page: true,
				// 当前页
				index: 1,
				// 每页记录数
				size: 20,
				// 总数
				total: 0,
				sizes: 10,
				// 列表
				list: [],
				loading: true
			},
			// 删除URL
			deleteURL: null,
			// 显示筛选条件
			searchShow: false,
			tooltipEffect: 'dark',
			// 索引宽度
			indexWidth: 60,
			// 头像宽度
			avatarWidth: 58,
			// 图片宽度
			imgWidth: 100,
			// 排序宽度
			sortWidth: 88,
			// 日期宽度
			dateWidth: 162
		}
	},
	computed: {
	},
	components: {
		SectionNav,
		Empty
	},
	created() {
		document.body.addEventListener('click', (e) => {
			if (this.searchShow) {
				this.searchShow = false
			}
		}, false)

		this.oldSearchData = JSON.stringify(this.searchData)

		if (this.$store.state.searchStore[this.routerPath]) {
			this.searchData = JSON.parse(this.$store.state.searchStore[this.routerPath])
			this.tableData.index = this.searchData.index
			this.tableData.size = this.searchData.size
		}

		this.onSearch = debounce(this.onSearch, 300)

		this.fetchData()
	},
	beforeDestroy() {
		document.body.removeEventListener('click', (e) => {
			if (this.searchShow) {
				this.searchShow = false
			}
		}, false)

		this.$store.dispatch('setSearchStore', {
			path: this.routerPath,
			data: JSON.stringify(this.searchData)
		})
	},
	filters: {
		dateTimeFormat(val) {
			return dateFormat(val)
		},
		dateFormat(val) {
			return dateFormat(val, 'yyyy-MM-dd')
		},
		monthFormat(val) {
			return dateFormat(val, 'yyyy-MM')
		}
	},
	methods: {
		onShowSearch() {
			this.searchShow = !this.searchShow
		},
		// 筛选   
		onSearch() {
			this.tableData.index = 1
			this.fetchData()
			this.searchShow = false
		},
		// 重置
		onReset() {
			typeof this.resetCallback === 'function' && this.resetCallback()

			this.searchData = JSON.parse(this.oldSearchData)
			this.fetchData()
			this.searchShow = false
		},
		// 获取数据
		fetchData() {
			if (!this.fetchURL) return

			this.tableData.loading = true

			this.tableData.list = []
			this.tableData.total = 0

			typeof this.beforeFetchCallback === 'function' && this.beforeFetchCallback()

			let params = {}
			if (this.tableData.page) {
				params = Object.assign(this.searchData, {
					index: this.tableData.index,
					size: this.tableData.size
				})
			}
			else {
				params = this.searchData
			}

			this.fetchURL(params).then(res => {
				params = null
				setTimeout(() => {
					this.tableData.loading = false
				}, 350)

				if (this.tableData.page) {
					this.tableData.total = res.data.count
					this.tableData.list = res.data.rows
				}
				else {
					this.tableData.list = res.data
				}

				typeof this.afterFetchCallback === 'function' && this.afterFetchCallback()
			}).catch(err => {
				this.tableData.loading = false
				console.log(err)
			})
		},

		/**
		 * 字典格式化
		 * @param {String} value 值
		 * @param {String} name  列表名称
		 */
		dictFormat(value, name) {
			if (value && name && this.$store.state.dicts[name]) {
				let o = this.$store.state.dicts[name].find(d => d.value == value)
				if (o) {
					return o.name
				}
			}
			return '-'
		},

		// 序号
		tableIndexMethod(i) {
			return this.tableData.size * (this.tableData.index - 1) + i + 1
		},
		// 分页改变
		onSizeChange(val) {
			this.tableData.index = 1
			this.tableData.size = val
			this.fetchData()
		},
		// 页码改变
		onCurrentChange(i) {
			this.tableData.index = i
			this.fetchData()
		},

		// 新增
		onAdd() {
			this.$router.push(`${this.routerPath}/add/0`)
		},
		// 详情
		onView(e) {
			this.$router.push(`${this.routerPath}/view/${e.target.dataset.id}`)
		},
		// 修改
		onUpdate(e) {
			this.$router.push(`${this.routerPath}/update/${e.target.dataset.id}`)
		},
		// 删除
		onDelete(e) {
			this.$confirm('确定要删除该记录？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				if (!this.deleteURL) return
				this.deleteURL(e.target.dataset.id).then(res => {
					this.$alert('删除成功', '提示', {
						confirmButtonText: '确定',
						type: 'success',
						callback: () => {
							this.fetchData()
							typeof this.deleteCallback === 'function' && this.deleteCallback()
						}
					})
				}).catch(err => {
					console.log(err)
				})
			}).catch(() => {
			})
		}
	}
}