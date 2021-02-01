<template>
  <div class="post-page">
    <p>
      <router-link to="/post/edit?type=edit">新增</router-link>
    </p>
    <div class="listview">
      <div class="list-item" v-for="(item, i) in list" :key="i">
        <span>{{ item.id }}</span>
        <router-link :to="'/post/edit?type=view&id='+item.id">{{ item.title }}</router-link>
        <router-link :to="'/post/edit?type=edit&id='+item.id">修改</router-link>
        <a class="delete" @click="onDelete(item.id)">删除</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { PostList, DeletePost } from '../../api/typicode'

  export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      this.fetchList()
    },
    methods: {
      fetchList() {
        PostList().then(res => {
          this.list = res
        }).catch(err => {
          console.log(err)
        })
      },
      onDelete(id) {
        DeletePost(id).then(res => {
          this.fetchList()
        }).catch(err => {
          console.log(err)
        })
      }
    },
  }
</script>
<style>
  .list-item {
    display: block;
    padding: 10px 50px;

  }

  .list-item:hover {
    color: blue;

  }
</style>