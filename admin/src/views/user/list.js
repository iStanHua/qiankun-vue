
import searchMixin from '@/mixins/search'

import { UserList, DeleteUser } from '@/api/user'

export default {
  mixins: [searchMixin],
  name: 'UserPage',
  data() {
    return {
      fetchURL: UserList,
      deleteURL: DeleteUser
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