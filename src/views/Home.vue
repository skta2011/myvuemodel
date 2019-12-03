<template>
    <el-row class="main-container">
      <el-col :span="4">
        <el-container>
          <el-header>导航栏头</el-header>
          <el-main>
            <el-menu :default-active="$route.path" @open="handleopen" @close="handleclose" @select="handleselect"
              unique-opened router v-show="!collapsed">
              <template v-for="(item,index) in $router.options.routes">
                <el-submenu :index="index+''" v-if="!item.leaf">
                  <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                  <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                </el-submenu>
                <el-menu-item v-if="!item.children" :index="item.path">{{item.name}}</el-menu-item>
              </template>
            </el-menu>
          </el-main>
        </el-container>
      </el-col>
      <el-col :span="20">
        <el-container>
          <el-header>标头</el-header>
          <el-main>主页内容</el-main>
        </el-container>
      </el-col>
    </el-row>
    <!-- <el-container>
      <el-head>顶层</el-head>
      <el-main>页面</el-main>
    </el-container>
    <el-container>
      <el-head>顶层</el-head>
      <el-main>页面</el-main>
    </el-container> -->
</template>

<script>
export default {
  name: 'mainpage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      collapsed:false
    }
  }
}

</script>

<style scoped lang="scss">
  @import '~scss_common';
  @import '~scss_temp';

  .main-container{
    height: 100%;
    .el-col{
      height: 100%;
    }
    .el-container{
      height: 100%;
    }
    .el-header{
      height: 100px !important;
    }
    .el-main{
      height: 100%;
    }
  }
</style>