
import searchMixin from '@/mixins/search'

import { ProductList, DeleteProduct } from '@/api/product'

export default {
  mixins: [searchMixin],
  name: 'ProductPage',
  data() {
    return {
      fetchURL: ProductList,
      deleteURL: DeleteProduct
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