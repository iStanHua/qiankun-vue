<template>
  <div class="page layout">
    <header-layout></header-layout>
    <div class="layout-content">
      <router-view v-if="!isAlive" />
      <keep-alive>
        <router-view v-if="isAlive" />
      </keep-alive>
    </div>
  </div>
</template>

<style lang="scss" src="./admin.scss"></style>
<script src="./admin.js"></script>