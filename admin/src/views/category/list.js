
import searchMixin from '@/mixins/search'

import { CategoryList, DeleteCategory } from '@/api/category'

export default {
  mixins: [searchMixin],
  name: 'CategoryPage',
  data() {
    return {
      fetchURL: CategoryList,
      deleteURL: DeleteCategory
    }
  },
  computed: {
  },
  components: {
  },
  created() {
  },
  methods: {

  }
}