<template>
  <div id="app-main">
    <header>
      <router-link to="/web/">Web</router-link>
      <router-link to="/admin/">Admin</router-link>
      <router-link to="/about">About</router-link>
    </header>
    <div id="app-container"></div>
    <router-view />
  </div>
</template>

<script src="./App.js"></script>
<style lang="scss">
  header {
    padding: 20px;
    text-align: center;
  }

  header a {
    margin: 0 10px;
  }
</style>