<template>
  <div class="singleView">
    <div class="singleView_box">
      <div v-for="item in TimeLinesContext" :key="item.id">
        <div v-if="item.id==index" class="singleView_text_box">
          <el-page-header @back="goBack" content="详情页面">
          </el-page-header>
          <div class="text_box">
            <el-tag>{{item.time}}</el-tag>
            <h1 :class="item.important">{{item.title}}</h1>
            <el-divider/>
            <p>{{item.context}}</p>
            <el-divider/>
            <div class="button">
              <el-button type="primary" @click="goEdit(index)" round>修改</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimeLinesContext } from '../assets/js/testdata'
export default {
  name: 'singleView',
  data () {
    return {
      TimeLinesContext: [],
      index: this.$route.params.id
    }
  },
  created () {
    this.TimeLinesContext = TimeLinesContext
  },
  methods: {
    goBack () {
      this.$router.push({ path: '/' })
    },
    goEdit (index) {
      this.$router.push({ path: `/Editpage/${this.index}` })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/singleView";
</style>
