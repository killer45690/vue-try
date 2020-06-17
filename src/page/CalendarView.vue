<template>
    <div class="CalendarView">
      <div class="home">
        <el-calendar v-model="value">
          <template
            slot="dateCell"
            slot-scope="{date, data}">
            <!--自定义内容-->
            <div class="calendar-day-info" @click="dateitem(data.day)">
              <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
              <el-row >
                <el-col :span="8" v-for="item in TimeLinesContext" :key="item.id">
                  <div v-if="item.time==data.day">
                    <el-tooltip class="item" effect="dark" :content="item.title" placement="right">
                      <div :class="item.important" class="content_box" >{{item.context}}</div>
                    </el-tooltip>
                  </div>
                </el-col>
              </el-row>
            </div>
          </template>
        </el-calendar>
        <el-drawer
          title="我是标题"
          :visible.sync="drawer"
          :with-header="false">
          <div v-for="item in TimeLinesContext" :key="item.id" @click="open_singlePage(item.id)">
            <el-card v-if="item.time===Select_date" >
              <h5>{{item.time}}</h5>
              <h3 :class="item.important">{{item.title}}</h3>
              <p>{{item.context}}</p>
            </el-card>
          </div>
        </el-drawer>
      </div>

    </div>
</template>

<script>
import { TimeLinesContext } from '../assets/js/testdata'
import { gloabameths } from '../meths/globameths'
export default {
  name: 'homePage',
  data () {
    return {
      TimeLinesContext: [],
      value: new Date(),
      drawer: false,
      Select_date: new Date()
    }
  },
  created () {
    this.TimeLinesContext = TimeLinesContext
  },
  methods: {
    dateitem (data) {
      console.log(data)
      this.drawer = true
      this.Select_date = data
    }
  },
  mounted () {
    this.open_singlePage()
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/CalendarView";
</style>
