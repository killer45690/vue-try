<template>
  <div class="TimeLines">
    <div class="TimeLines_box">
      <el-timeline >
        <el-timeline-item v-for="item in TimeLinesContext" :timestamp=item.time :key=item.id placement="top">
          <el-card>
            <h4 :class="item.important">{{item.title}}</h4>
            <p>{{item.context}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    </div>
</template>

<script>
export default {
  name: 'TimeLines',
  data () {
    return {
      TimeLinesContext: [{
        id: '1',
        time: '2020-06-12',
        title: '更新 Github 模板',
        context: '王小虎 提交于 2020-6-12 20:46',
        important: 'is_Danger'
      },
      {
        id: '2',
        time: '2020-06-13',
        title: '更新 Github 模板',
        context: '王小虎 提交于 2020-6-12 20:46',
        important: 'is_Danger'

      },
      {
        id: '3',
        time: '2020-06-14',
        title: '更新 Github 模板',
        context: '王小虎 提交于 2020-6-12 20:46',
        important: 'is_Danger'

      },
      {
        id: '4',
        time: '2020-06-15',
        title: '更新 Github 模板',
        context: '王小虎 提交于 2020-6-12 20:46',
        important: 'is_Danger'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/TimeLines";
</style>
