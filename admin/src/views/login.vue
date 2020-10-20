<template>
  <div class="content login-page">
    <div class="login-form">
      <div class="form-title">帐号密码登录</div>
      <el-form :model="form.data" :ref="form.ref" :rules="form.rules" @keyup.enter.native="onLogin">
        <el-form-item prop="tel">
          <i class="icon i-phone"></i>
          <el-input v-model.trim="form.data.tel" autocomplete="off" maxlength="11" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <i class="icon i-password"></i>
          <el-input type="password" v-model.trim="form.data.password" autocomplete="off" maxlength="20"
            placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div class="form-btn">
        <a class="btn" :class="{ 'btn-loading':disabled }" @click="onLogin">登录</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./login.scss"></style>
<script src="./login.js"></script>