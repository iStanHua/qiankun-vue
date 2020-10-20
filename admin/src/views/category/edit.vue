<template>
  <div class="main category-edit-page">
    <section-nav :title="navTitle"></section-nav>

    <el-form class="section-form" :model="form.data" :ref="form.ref" :rules="form.rules" :disabled="type==='view'">
      <el-form-item prop="parent_id" label="父级编号">
        <el-input v-model.trim="form.data.parent_id" autocomplete="off" maxlength=""></el-input>
      </el-form-item>
      <el-form-item prop="name" label="名称">
        <el-input v-model.trim="form.data.name" autocomplete="off" maxlength="18"></el-input>
      </el-form-item>
    </el-form>

    <div v-if="type!=='view'" class="form-btn">
      <a class="btn" :class="{ 'btn-loading':form.loading }" @click="onSubmitForm" >提交</a>
    </div>
  </div>
</template>

<style lang="scss" src="./edit.scss"></style>
<script src="./edit.js"></script>