<template>
  <wrapper class="content tool-base64-page">
    <div class="section-box">
      <div class="flexbox">
        <div class="flex">
          <tabs :title="tabTitle" v-model="index" @change="onTabChange"></tabs>
          <input-box type="textarea" v-model="content" autosize autofocus clearable placeholder="文本"
            @change="onInputChange">
          </input-box>
          <div class="toolbar">
            <!-- <a class="btn btn-success" @click="onBase64Encode">Base64加密</a>
            <a class="btn btn-primary" @click="onBase64Decode">Base64解密</a>
            <a class="btn btn-warning" @click="oappendnClear">清空</a> -->
          </div>
        </div>
        <div class="flex">
          <tabs :title="['执行结果']"></tabs>
          <input-box type="textarea" v-model="result" autosize disabled>
            <i v-if="result" slot="append" class="icon i-copy" title="复制" v-clipboard.copy="result"></i>
          </input-box>
          <div v-if="result" class="toolbar">
          </div>
        </div>
      </div>
    </div>

  </wrapper>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>