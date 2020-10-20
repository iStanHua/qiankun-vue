<template>
  <div class="not-found-page">
    <div class="not-found">
      <div class="code"><span>4</span><em>0</em><i>4</i></div>
      <div class="desc">oops~ 你所访问的页面不存在</div>
      <a class="btn btn-primary" @click="$router.go(-1)">返回</a>
    </div>
  </div>
</template>

<style lang="scss" src="./notFound.scss"></style>
<script src="./notFound.js"></script>