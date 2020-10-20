<template>
  <div class="layout-header">
    <div class="logo" @click="onLogo">
      <img src="@/assets/logo.png" />
      <span>管理控制台</span>
    </div>
    <div class="header-nav">
      <el-dropdown v-if="userInfo" @command="onCommand">
        <div class="el-dropdown-link">
          <img v-if="userInfo.avatar" :src="FILE_BASE_URL+userInfo.avatar" />
          <img v-else src="@/assets/logo.png" />
          <span>{{ userInfo.name }}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item disabled>短信余额：{{ smsBalance }}</el-dropdown-item>
          <el-dropdown-item command="info">个人信息</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<style lang="scss" src="./header.scss"></style>
<script src="./header.js"></script>