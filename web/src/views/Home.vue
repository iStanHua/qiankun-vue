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
  .listview {
    width: 768px;
    margin: 0 auto;
    background-color: #fff;
  }

  .list-item {
    display: block;
    padding: 10px 12px;
  }

  .list-item:hover {
    color: blue;
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>