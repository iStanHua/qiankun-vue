<template>
  <div v-if="!isIE" class="page" id="app">
    <header-layout></header-layout>

    <router-view v-if="!isAlive" />
    <keep-alive>
      <router-view v-if="isAlive" />
    </keep-alive>

    <footer-layout></footer-layout>
  </div>
</template>

<script src="./App.js"></script>