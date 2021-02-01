<template>
  <div class="home-page">
    <div class="listview">
      <router-link class="list-item" v-for="(item, i) in list" :key="i" :to="item.path">{{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        list: [
          { name: 'posts', path: 'post' },
          { name: 'comments', path: 'comment' },
          { name: 'albums', path: 'albums' },
          { name: 'photos', path: 'photos' },
          { name: 'todos', path: 'todos' },
          { name: 'users', path: 'users' }]
      }
    },
    created() {
    },
    methods: {
    },
  }
</script>
<style>
  .list-item {
    display: block;
    padding: 10px;

  }

  .list-item:hover {
    color: blue;

  }
</style>