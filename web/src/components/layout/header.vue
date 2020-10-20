<template>
  <wrapper class="header" :class="{'header-fixed':isFixed}">
    <div class="logo" @click="onLogo">
      <img src="@/assets/logo.png" />
    </div>
    <div class="header-nav">
      <div class="nav-item" v-for="(item, i) in list" :key="i" :class="{'nav-active':activePath===item.path}"
        @click="onNavItem(i)">{{ item.name }}</div>
    </div>
    <a class="logout" @click="onLogout">退出</a>
  </wrapper>
</template>

<style lang="scss" src="./header.scss"></style>
<script src="./header.js"></script>