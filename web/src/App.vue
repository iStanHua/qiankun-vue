<template>
  <div v-if="!isIE" class="page" id="app">
    <router-view v-if="!isAlive" />
    <keep-alive>
      <router-view v-if="isAlive" />
    </keep-alive>
  </div>
</template>

<script src="./App.js"></script>