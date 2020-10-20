
import searchMixin from '@/mixins/search'

import { ScoreList, DeleteScore } from '@/api/score'

export default {
  mixins: [searchMixin],
  name: 'ScorePage',
  data() {
    return {
      fetchURL: ScoreList,
      deleteURL: DeleteScore
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