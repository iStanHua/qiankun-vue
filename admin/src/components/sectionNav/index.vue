<template>
  <div class="section-nav">
    <div class="title">
      <span v-if="title">{{ title }}</span>
      <slot v-else name="title"></slot>
    </div>
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <i v-else class="icon i-return" @click="onBack">返回</i>
  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>