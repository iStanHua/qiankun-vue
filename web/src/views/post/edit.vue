<template>
  <div class="post-edit-page">
    <div class="form">
      <div class="form-item">
        <label>标题</label>
        <input type="text" class="input" v-model="detail.title">
      </div>
      <div class="form-item">
        <label>内容</label>
        <textarea class="input" v-model="detail.body"></textarea>
      </div>
      <div class="form-btn">
        <button @click="onSubmit">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { PostDetail, EditPost } from '../../api/typicode'

  export default {
    data() {
      return {
        id: this.$route.query.id || 0,
        type: this.$route.query.type || '',
        detail: {}
      }
    },
    created() {
      this.fetchDetail()
    },
    methods: {
      fetchDetail() {
        if (!this.id) return
        PostDetail(this.id).then(res => {
          this.detail = res
        }).catch(err => {
          console.log(err)
        })
      },
      onSubmit() {
        EditPost(this.detail).then(res => {
          this.$router.go(-1)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
<style>
  .form {
    width: 768px;
    margin: 0 auto;
    background-color: #fff;
  }

  .form-item{
    padding: 10px;
  }
  .form-item .input{
    margin-top: 10px;
  }
  .form-btn{
    padding: 10px;
    text-align: center;
  }
</style>