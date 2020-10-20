<template>
  <div class="input contenteditable-input" :contenteditable="!disabled" v-text="currentValue" :placeholder="placeholder" @input="onInputChange"></div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>