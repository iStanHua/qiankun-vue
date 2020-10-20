<template>
  <div class="main account-page">
    <section-nav :title="$route.meta.title"><span></span></section-nav>
    <div class="listview">
      <div class="list-item">
        <span>用 户 名：</span>
        <div class="txt">
          <div v-if="userInfo.avatar" class="img-box">
            <img v-if="userInfo.avatar" :src="FILE_BASE_URL+userInfo.avatar" />
            <img v-else src="@/assets/logo.png" />
            <p>{{ userInfo.name }}</p>
          </div>
          <template v-else>{{ userInfo.name }}</template>
        </div>
        <a @click="onUpdateInfo">修改头像</a>
      </div>
      <div class="list-item">
        <span>手机号码：</span>
        <div class="txt">{{ userInfo.tel }}</div>
      </div>
      <div class="list-item">
        <span>密 码：</span>
        <div class="txt">******</div>
        <a @click="onUpdatePassword">修改密码</a>
      </div>
      <div class="list-item">
        <span>用户角色：</span>
        <div class="txt">{{ userInfo.role_name }}</div>
      </div>
      <div class="list-item">
        <span>所属商家：</span>
        <div class="txt">
          <div class="img-box">
            <img v-if="userInfo.business_image" :src="FILE_BASE_URL+userInfo.business_image" />
            <img v-else src="@/assets/logo.png" />
            <p>{{ userInfo.business_name }}</p>
          </div>
        </div>
      </div>
    </div>

    <el-dialog :title="dialog.title" :visible.sync="dialog.visible" width="618px">
      <el-form class="section-form" :model="dialog.form" ref="dialogFormRef" :rules="dialog.rules">
        <template v-if="dialog.type===1">
          <el-form-item prop="old_password" label="原密码">
            <el-input type="password" v-model.trim="dialog.form.old_password" autocomplete="off" maxlength="30">
            </el-input>
          </el-form-item>
          <el-form-item prop="password" label="新密码">
            <el-input type="password" v-model.trim="dialog.form.password" autocomplete="off" maxlength="30"></el-input>
          </el-form-item>
          <el-form-item prop="password2" label="确定新密码">
            <el-input type="password" v-model.trim="dialog.form.password2" autocomplete="off" maxlength="30"></el-input>
          </el-form-item>
        </template>
        <template v-else>
          <el-form-item prop="avatar" label="用户头像">
            <upload-image v-model="dialog.form.avatar" type="staff"></upload-image>
          </el-form-item>
        </template>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <a class="btn" @click="onSubmitForm">提交</a>
      </div>
    </el-dialog>
  </div>
</template>
<style lang="scss" src="./info.scss"></style>
<script src="./info.js"></script>