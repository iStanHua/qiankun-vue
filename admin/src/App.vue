<template>
  <div v-if="!isIE" id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {

      }
    },
    computed: {
      isIE() {
        new RegExp('MSIE (\\d+\\.\\d+);').test(navigator.userAgent)
        if (parseFloat(RegExp['$1']) < 10)
          return true
        else
          return false
      }
    },
  }
</script>