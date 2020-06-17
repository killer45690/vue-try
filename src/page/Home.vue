<template>
  <div class="Home">
    <div class="Home_carousel">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in img" :key="item.id">
          <img :src="item.picImg">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content_box">
      <el-row :gutter="20">
        <el-col :span="16"><div class="grid_content ">
          <el-card>
            <h1>aaaaaaaaaaa</h1>
            <p>aaaaaaaaaaaaaaaaaaaaaa</p>
          </el-card>
        </div></el-col>
        <el-col :span="8"><div class="grid_img">
          <img src="../assets/img/head_wisp/1.png">
        </div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid_img">
          <img src="../assets/img/head_wisp/2.png">
        </div></el-col>
        <el-col :span="16"><div class="grid_content ">
          <el-card>
            <h1>aaaaaaaaaaa</h1>
            <p>aaaaaaaaaaaaaaaaaaaaaa</p>
          </el-card>
        </div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="16"><div class="grid_content ">
          <el-card>
            <h1>aaaaaaaaaaa</h1>
            <p>aaaaaaaaaaaaaaaaaaaaaa</p>
          </el-card>
        </div></el-col>
        <el-col :span="8"><div class="grid_img">
          <img src="../assets/img/head_wisp/3.png">
        </div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { swiperList } from '../assets/js/swiper'
export default {
  name: 'Home',
  data () {
    return {
      img: []
    }
  },
  created () {
    this.img = swiperList
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/Home";
</style>
