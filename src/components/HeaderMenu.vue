<template>
    <div  class="HeaderMenu">
      <el-menu
        :default-active="activeIndex"
        @select="gopage"
        class="header-menu"
        mode="horizontal"
        background-color="#fefefe"
        text-color="#67757f"
        active-text-color="#30a4fc">
        <el-menu-item class="header-menu-icon">
          <img src="../assets/logo.png" width="20px">
          <span>我的日历</span>
        </el-menu-item>
        <el-menu-item v-for="item in navMsg" :key="item.path" :index="item.path">
          {{item.name}}
        </el-menu-item>
        <el-submenu  index="4">
          <template style="height: 70px" slot="title">重要性视图</template>
          <el-menu-item v-for="item in importantView" :key="item.name" :index="item.path">
            <span :class="item.color" >{{item.name}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item style="float: right" v-for="item in loginMsg" :key="item.path" :index="item.path">
          {{item.name}}
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
import { navMsg, importantView, loginMsg, menuList } from '../assets/js/header'
export default {
  name: 'HeaderMenu',
  data () {
    return {
      navMsg: [],
      importantView: [],
      loginMsg: [],
      menuList: [],
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  created  () {
    this.navMsg = navMsg
    this.importantView = importantView
    this.loginMsg = loginMsg
    this.menuList = menuList
  },
  methods: {
    gopage (key, keyPath, index) {
      this.$router.push({ path: key })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/HeaderMenu.scss";
</style>
