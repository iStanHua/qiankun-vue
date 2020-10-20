<template>
  <div class="main user-edit-page">
    <section-nav :title="navTitle"></section-nav>

    <el-form class="section-form" :model="form.data" :ref="form.ref" :rules="form.rules" :disabled="type==='view'">
      <el-form-item prop="parent_id" label="父级编号">
        <el-input v-model.trim="form.data.parent_id" autocomplete="off" maxlength=""></el-input>
      </el-form-item>
      <el-form-item prop="name" label="名称">
        <el-input v-model.trim="form.data.name" autocomplete="off" maxlength="16"></el-input>
      </el-form-item>
      <el-form-item prop="avatar" label="头像">
        <upload-image v-model="form.data.avatar" :disabled="type==='view'"></upload-image>
        </el-form-item>
      <el-form-item prop="tel" label="手机号码">
        <el-input v-model.trim="form.data.tel" autocomplete="off" maxlength="18"></el-input>
      </el-form-item>
      <el-form-item prop="bind_tel" label="是否绑定手机号码">
        <el-input v-model.trim="form.data.bind_tel" autocomplete="off" maxlength=""></el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
        <el-input v-model.trim="form.data.email" autocomplete="off" maxlength="80"></el-input>
      </el-form-item>
      <el-form-item prop="bind_email" label="是否绑定邮箱">
        <el-input v-model.trim="form.data.bind_email" autocomplete="off" maxlength=""></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model.trim="form.data.password" autocomplete="off" maxlength="32"></el-input>
      </el-form-item>
      <el-form-item prop="secret" label="密钥">
        <el-input v-model.trim="form.data.secret" autocomplete="off" maxlength="32"></el-input>
      </el-form-item>
      <el-form-item prop="score" label="积分">
        <el-input v-model.trim="form.data.score" autocomplete="off" maxlength=""></el-input>
      </el-form-item>
      <el-form-item prop="wxid" label="微信openid">
        <el-input v-model.trim="form.data.wxid" autocomplete="off" maxlength="32"></el-input>
      </el-form-item>
      <el-form-item prop="ip" label="最后登录IP地址">
        <el-input v-model.trim="form.data.ip" autocomplete="off" maxlength="38"></el-input>
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