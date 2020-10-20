
export default {
  name: 'SectionNav',
  props: {
    title: String
  },
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    onBack() {
      this.$router.go(-1)
    }
  }
}