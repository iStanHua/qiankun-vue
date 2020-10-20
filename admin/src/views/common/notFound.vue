<template>
  <div class="not-found-page">
    <div class="not-found">
      <div class="code">4<span>0</span>4</div>
      <div class="desc">oops~ 你所访问的页面不存在</div>
      <a class="btn" @click="$router.go(-1)">返回</a>
    </div>
  </div>
</template>
<style lang="scss" src="./notFound.scss"></style>
<script src="./notFound.js"></script>