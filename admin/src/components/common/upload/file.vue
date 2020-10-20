<template>
  <div class="upload-file">
    <div class="drag-box" @click="onFileClick">
      <p>将文件拖到此处，或<span>点击上传</span></p>
    </div>
    <slot></slot>
    <div v-if="fileList.length" class="file-list">
      <div class="file-item" v-for="(item, i) in fileList" :key="i" :title="item.name">{{ item.name }}</div>
    </div>
    <input type="file" name="uploadFile" :accept="accept" :multiple="multiple" @change="onFileChange">
  </div>
</template>

<style lang="scss" src="./file.scss"></style>
<script src="./file.js"></script>