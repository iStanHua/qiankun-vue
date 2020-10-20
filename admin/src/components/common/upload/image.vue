<template>
  <draggable class="uploader-view" v-model="uploadForm.list" draggable=".upload-item" :move="handleMove" @end="onEnd">
    <div v-if="multiple" class="upload-item" v-for="(item, i) in uploadForm.list" :key="i">
      <div class="image-box" :style="{'background-image':'url('+ item +')'}"></div>
      <i v-if="!disabled" class="icon i-close" @click="onRemoveImage(i)"></i>
    </div>
    <el-upload v-if="!(multiple&&disabled)" class="image-uploader" :action="action" :headers="headers"
      :multiple="multiple" accept="image/*" :disabled="disabled" :show-file-list="false" :limit="uploadForm.limit"
      :before-upload="onUploadBefore" :on-exceed="onExceedLimit" :on-success="onUploadSuccess">
      <div v-if="!multiple&&uploadForm.list.length" class="image-box"
        :style="{'background-image':'url('+uploadForm.list[0]+')'}"></div>
      <i v-else class="icon i-plus"></i>
    </el-upload>
  </draggable>
</template>
<style lang="scss" src="./image.scss"></style>
<script src="./image.js"></script>