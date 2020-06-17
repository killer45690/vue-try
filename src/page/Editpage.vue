<template>
  <div class="Editpage">
    <div class="Editpage_box">
      <el-form class="Editpage_text_box" :rules="EditRulers" ref="form" :model="form" label-width="80px">
        <el-page-header @back="goBack" content="详情页面">
        </el-page-header>
        <div class="UpDataArea">
          <el-form-item prop="time" label="选择日期">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="form.time"
                align="left"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item prop="title" label="标题">
            <el-input maxlength="30" :autosize="{ minRows: 2, maxRows: 2}"  show-word-limit type="textarea" v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item prop="important" label="重要性">
            <el-radio-group v-model="form.important" >
              <el-radio label="is_Danger" class="is_Danger" border>最重要</el-radio>
              <el-radio label="is_Warning" class="is_Warning" border>很重要</el-radio>
              <el-radio label="is_normal" border class="is_normal">一般</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-divider/>
          <el-form-item prop="context" label="内容">
            <el-input maxlength="300" :autosize="{ minRows: 5, maxRows: 10}" type="textarea" v-model="form.context"   show-word-limit></el-input>
          </el-form-item>
          <el-divider/>
          <el-form-item style="text-align: right">
            <el-button type="primary" @click="update()" round>提交</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { TimeLinesContext } from '../assets/js/testdata'
import { EditRulers } from '../assets/js/Editruler'
export default {
  name: 'Editpage',
  data () {
    return {
      TimeLinesContext: [],
      form: {
        id: '',
        time: '',
        title: '',
        context: '',
        important: ''
      },
      pickerOptions: {
        shortcuts: [{
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        },
        {
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '明天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() + 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }]
      },
      index: this.$route.params.id,
      EditRulers: {},
      item: {}
    }
  },
  created () {
    this.TimeLinesContext = TimeLinesContext
    for (var i in this.TimeLinesContext) {
      if (i.id === this.index) {
        this.item = i
      }
    }
    this.EditRulers = EditRulers
  },
  methods: {
    goBack () {
      this.$router.push({ path: '/' })
    },
    update: function () {
      if (this.index !== '') {
        this.$refs.form.validate(valid => {
          if (!valid) return
          console.log('success')
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/Editpage";
</style>
