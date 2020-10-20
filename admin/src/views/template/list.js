
import searchMixin from '@/mixins/search'

import { TemplateList, DeleteTemplate } from '@/api/template'

export default {
  mixins: [searchMixin],
  name: 'TemplatePage',
  data() {
    return {
      fetchURL: TemplateList,
      deleteURL: DeleteTemplate
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