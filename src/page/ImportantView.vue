<template>
  <div class="ImportantView">
    <div class="ImportantView_box">
      <el-row>
        <el-col v-for="item in TimeLinesContext" :key="item.id" :span="8">
          <div class="grid-content bg-purple">
            <el-card>
              <h5>{{item.time}}</h5>
              <h3 :class="item.important">{{item.title}}</h3>
              <p>{{item.context}}</p>
            </el-card>
          </div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImportantView',
  data () {
    return {
      TimeLinesContext: [{
        id: '1',
        time: '2020-6-12',
        title: '更新 Github 模板',
        context: '王小虎 提交于 2020-6-12 20:46',
        important: 'is_Danger'
      },
      {
        id: '2',
        time: '2020-6-13',
        title: '更新 Github 模板',
        context: '王小虎 提交于 2020-6-12 20:46',
        important: 'is_Danger'

      },
      {
        id: '3',
        time: '2020-6-14',
        title: '更新 Github 模板',
        context: '王小虎 提交于 2020-6-12 20:46',
        important: 'is_Danger'

      },
      {
        id: '4',
        time: '2020-6-15',
        title: '更新 Github 模板',
        context: '王小虎 提交于 2020-6-12 20:46',
        important: 'is_Danger'
      }]
    }
  }

}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/ImportantView.scss";
</style>
