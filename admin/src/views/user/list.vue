<template>
  <div class="main user-page">
     <section-nav :title="$route.meta.title">
      <i class="icon i-plus" @click="onAdd">新增</i>
      <i class="icon i-filter" @click.stop="onShowSearch">筛选</i>
    </section-nav>

    <transition name="fade-right">
      <div v-if="searchShow" class="section-search" @click.stop>
        <div class="section-title">筛选条件</div>
        <el-form @submit.native.prevent="onSearch">
          <el-form-item label="名称">
            <el-input v-model.trim="searchData.name" clearable autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div class="form-btn">
          <a class="btn btn-default" @click="onReset">重置</a>
          <a class="btn" @click="onSearch">搜索</a>
        </div>
      </div>
    </transition>

    <div v-if="tableData.loading" class="section-loading">
      <div class="loading"><span>正在加载中...</span></div>
    </div>
    <div v-else class="section-table">
      <el-table v-if="tableData.total" :data="tableData.list" :tooltip-effect="tooltipEffect">
        <el-table-column type="index" label="序号" :index="tableIndexMethod" :width="indexWidth"></el-table-column>
        <el-table-column prop="parent_id" label="父级编号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="avatar" label="头像" show-overflow-tooltip></el-table-column>
        <el-table-column prop="tel" label="手机号码" show-overflow-tooltip></el-table-column>
        <el-table-column prop="bind_tel" label="是否绑定手机号码" show-overflow-tooltip></el-table-column>
        <el-table-column prop="email" label="邮箱" show-overflow-tooltip></el-table-column>
        <el-table-column prop="bind_email" label="是否绑定邮箱" show-overflow-tooltip></el-table-column>
        <el-table-column prop="password" label="密码" show-overflow-tooltip></el-table-column>
        <el-table-column prop="secret" label="密钥" show-overflow-tooltip></el-table-column>
        <el-table-column prop="score" label="积分" show-overflow-tooltip></el-table-column>
        <el-table-column prop="wxid" label="微信openid" show-overflow-tooltip></el-table-column>
        <el-table-column prop="ip" label="最后登录IP地址" show-overflow-tooltip></el-table-column>
        <el-table-column prop="type" label="类型" show-overflow-tooltip></el-table-column>
        <el-table-column prop="created_time" label="创建时间" :width="dateWidth">
          <template slot-scope="scope">{{ scope.row.created_time | dateTimeFormat }}</template>
        </el-table-column>
        <el-table-column label="操作" width="92">
          <template slot-scope="scope">
            <a class="icon i-detail" :data-id="scope.row.id" title="详情" @click="onView"></a>
            <a class="icon i-edit" :data-id="scope.row.id" title="编辑" @click="onUpdate"></a>
            <a class="icon i-delete delete" :data-id="scope.row.id" title="删除" @click="onDelete"></a>
          </template>
        </el-table-column>
      </el-table>
      <empty v-else></empty>
    </div>

    <div v-if="tableData.total && tableData.page" class="pagination-box">
      <div class="total">共 <strong>{{tableData.total}}</strong> 条</div>
      <el-pagination :currentPage="tableData.index" :page-size="tableData.size" :total="tableData.total"
        :page-sizes="[ tableData.sizes, tableData.sizes*2, tableData.sizes*3 ]" layout="sizes, prev, pager, next"
        @size-change="onSizeChange" @current-change="onCurrentChange">
      </el-pagination>
    </div>

  </div>
</template>

<style lang="scss" src="./list.scss"></style>
<script src="./list.js"></script>