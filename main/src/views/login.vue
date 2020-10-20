<template>
  <div class="content login-page">
    <i v-if="isShare" class="icon i-share" @click="onShare"></i>
    <div class="login-form">
      <div class="form-title">登录</div>
      <form @keyup.enter.native="onLogin">
        <div class="form-item">
          <i class="icon i-phone"></i>
          <input class="input" v-model.trim="form.data.tel" autocomplete="off" maxlength="11" placeholder="请输入手机号" />
        </div>
        <div class="form-item">
          <i class="icon i-password"></i>
          <input class="input" type="password" v-model.trim="form.data.password" autocomplete="off" maxlength="20"
            placeholder="请输入密码" />
        </div>
      </form>
      <div class="form-btn">
        <a class="btn btn-primary" :class="{ 'btn-loading':disabled }" @click="onLogin">登录</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./login.scss"></style>
<script src="./login.js"></script>