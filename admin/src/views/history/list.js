
import searchMixin from '@/mixins/search'

import { HistoryList, DeleteHistory } from '@/api/history'

export default {
  mixins: [searchMixin],
  name: 'HistoryPage',
  data() {
    return {
      fetchURL: HistoryList,
      deleteURL: DeleteHistory
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