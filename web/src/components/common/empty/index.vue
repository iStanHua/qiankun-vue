<template>
  <div class="empty-box">
    <div class="empty">
      <i class="icon i-empty"></i>
      <p v-if="tips">{{tips}}</p>
      <template v-else>
        <slot></slot>
      </template>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>