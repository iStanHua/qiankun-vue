<template>
  <div class="tabs">
    <div class="tab-header">
      <div class='tab-header-scroll'>
        <a class="tab-item" v-for="(item, i) in titleList" :key="i" :class="{'tab-active':currentIndex===i}"
          @click="onTabItem(i)">{{ item }}</a></div>
      <slot name="btn"></slot>
    </div>
    <div v-if="showContent" class="tab-content">
      <slot></slot>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>