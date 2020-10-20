<template>
  <div class="main product-edit-page">
    <section-nav :title="navTitle"></section-nav>

    <el-form class="section-form" :model="form.data" :ref="form.ref" :rules="form.rules" :disabled="type==='view'">
      <el-form-item prop="name" label="名称">
        <el-input v-model.trim="form.data.name" autocomplete="off" maxlength="108"></el-input>
      </el-form-item>
      <el-form-item prop="data" label="数据">
        <el-input v-model.trim="form.data.data" autocomplete="off" maxlength="4294967295"></el-input>
      </el-form-item>
      <el-form-item prop="template_id" label="模板编号">
        <el-input v-model.trim="form.data.template_id" autocomplete="off" maxlength=""></el-input>
      </el-form-item>
      <el-form-item prop="user_id" label="会员编号">
        <el-input v-model.trim="form.data.user_id" autocomplete="off" maxlength=""></el-input>
      </el-form-item>
    </el-form>

    <div v-if="type!=='view'" class="form-btn">
      <a class="btn" :class="{ 'btn-loading':form.loading }" @click="onSubmitForm" >提交</a>
    </div>
  </div>
</template>

<style lang="scss" src="./edit.scss"></style>
<script src="./edit.js"></script>