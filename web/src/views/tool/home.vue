<template>
  <wrapper class="content tool-page">
      <div class="list-section">
        <router-link v-for="(item, i) in list" :key="i" :to="item.path">{{ item.name }}</router-link>
      </div>
  </wrapper>
</template>

<style lang="scss" src="./home.scss"></style>
<script src="./home.js"></script>