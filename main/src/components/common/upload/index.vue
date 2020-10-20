<template>
  <div class="upload-box" @click="onFileClick">
    <div v-if="drag" class="drag-box">
      <p v-if="showName&&fileName" class="file-name">{{ fileName }}</p>
      <p>将文件拖到此处，或<span>点击上传</span></p>
    </div>
    <template v-else>
      <slot></slot>
      <span v-if="showName&&fileName" class="file-name">{{ fileName }}</span>
    </template>

    <input type="file" name="uploadFile" :accept="accept" :multiple="multiple" @change="onFileChange">
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>