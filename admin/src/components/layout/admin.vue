<template>
  <div class="page layout">
    <header-layout></header-layout>

    <div class="layout-content">
      <div class="layout-nav" :class="{'nav-hidden':navHidden}">
        <div class="nav-header" :title="navHidden?'展开':'收起'" @click="onToggleNav">
          <i class="icon" :class="{'i-outdent':!navHidden,'i-indent':navHidden}"></i>
        </div>

        <div class="nav-content">
          <el-menu class="el-menu-vertical" :default-active="defaultActive" :default-openeds="defaultOpeneds"
            unique-opened router :collapse="navHidden">
            <template v-for="item in resourceTree">
              <template v-if="item.route">
                <el-menu-item :key="item.route" :index="item.route">
                  <i class="icon" :class="['i-'+ item.icon]"></i>
                  <span slot="title">{{item.name}}</span>
                </el-menu-item>
              </template>
              <el-submenu v-else :index="item.icon" :key="item.icon">
                <template slot="title">
                  <i class="icon" :class="['i-'+item.icon]"></i>
                  <span>{{item.name}}</span>
                </template>
                <template v-for="data in item.children">
                  <el-menu-item :key="data.route" :index="data.route">
                    <!-- <i class="icon" :class="['i-'+ data.icon]"></i> -->
                    <span>{{data.name}}</span>
                  </el-menu-item>
                </template>
              </el-submenu>
            </template>
          </el-menu>
        </div>
      </div>

      <div class="content">
        <template v-if="$route.meta.alive">
          <keep-alive>
            <router-view />
          </keep-alive>
        </template>
        <router-view v-else />
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./admin.scss"></style>
<script src="./admin.js"></script>