<template>
  <div class="main history-edit-page">
    <section-nav :title="navTitle"></section-nav>

    <el-form class="section-form" :model="form.data" :ref="form.ref" :rules="form.rules" :disabled="type==='view'">
      <el-form-item prop="user_id" label="会员编号">
        <el-input v-model.trim="form.data.user_id" autocomplete="off" maxlength=""></el-input>
      </el-form-item>
      <el-form-item prop="ip" label="IP地址">
        <el-input v-model.trim="form.data.ip" autocomplete="off" maxlength="20"></el-input>
      </el-form-item>
      <el-form-item prop="address" label="地址">
        <el-input v-model.trim="form.data.address" autocomplete="off" maxlength="108"></el-input>
      </el-form-item>
      <el-form-item prop="operators" label="运营商">
        <el-input v-model.trim="form.data.operators" autocomplete="off" maxlength="38"></el-input>
      </el-form-item>
      <el-form-item prop="device" label="设备信息">
        <el-input v-model.trim="form.data.device" autocomplete="off" maxlength="28"></el-input>
      </el-form-item>
      <el-form-item prop="agent" label="用户代理">
        <el-input v-model.trim="form.data.agent" autocomplete="off" maxlength="380"></el-input>
      </el-form-item>
    </el-form>

    <div v-if="type!=='view'" class="form-btn">
      <a class="btn" :class="{ 'btn-loading':form.loading }" @click="onSubmitForm" >提交</a>
    </div>
  </div>
</template>

<style lang="scss" src="./edit.scss"></style>
<script src="./edit.js"></script>