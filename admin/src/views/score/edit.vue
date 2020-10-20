<template>
  <div class="main score-edit-page">
    <section-nav :title="navTitle"></section-nav>

    <el-form class="section-form" :model="form.data" :ref="form.ref" :rules="form.rules" :disabled="type==='view'">
      <el-form-item prop="user_id" label="会员编号">
        <el-input v-model.trim="form.data.user_id" autocomplete="off" maxlength=""></el-input>
      </el-form-item>
      <el-form-item prop="value" label="值">
        <el-input v-model.trim="form.data.value" autocomplete="off" maxlength=""></el-input>
      </el-form-item>
      <el-form-item prop="source" label="来源">
        <el-input v-model.trim="form.data.source" autocomplete="off" maxlength="58"></el-input>
      </el-form-item>
      <el-form-item prop="image" label="图片">
        <upload-image v-model="form.data.image" :disabled="type==='view'"></upload-image>
        </el-form-item>
      <el-form-item prop="remark" label="备注">
        <el-input v-model.trim="form.data.remark" autocomplete="off" maxlength="58"></el-input>
      </el-form-item>
      <el-form-item prop="type" label="类型">
        <el-input v-model.trim="form.data.type" autocomplete="off" maxlength=""></el-input>
      </el-form-item>
    </el-form>

    <div v-if="type!=='view'" class="form-btn">
      <a class="btn" :class="{ 'btn-loading':form.loading }" @click="onSubmitForm" >提交</a>
    </div>
  </div>
</template>

<style lang="scss" src="./edit.scss"></style>
<script src="./edit.js"></script>