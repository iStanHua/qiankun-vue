<template>
  <transition name="fade">
    <div v-if="show" class="toast">
      <div class="toast-content">{{ message }}</div>
    </div>
  </transition>
</template>

<style lang="scss" src="./toast.scss"></style>
<script src="./toast.js"></script>