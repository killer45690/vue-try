<template>
  <div class="SignUp_container">
    <div class="SignUp_box">
      <div class="logo_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <el-form ref="SignUpFormRef" :model="SignUp_form" :rules="SignUp_rulers"  label-width="85px" class="SignUp_form">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="SignUp_form.user_name"  prefix-icon="iconfont icon-icon-test5"></el-input>
        </el-form-item >
        <el-form-item prop="password" label="密码">
          <el-input v-model="SignUp_form.user_password" type="password" prefix-icon="iconfont icon-icon-test3"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" label="确认密码">
          <el-input v-model="SignUp_form.checkPass" type="password" prefix-icon="iconfont icon-icon-test3"></el-input>
        </el-form-item>
        <el-form-item prop="sex" label="性别">
          <el-radio-group v-model="SignUp_form.sex">
            <el-radio :label="0">女</el-radio>
            <el-radio :label="1">男</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="phoneNum" label="手机" >
          <el-input  placeholder="手机" v-model="SignUp_form.phone_num"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="邮箱">
          <el-input v-model="SignUp_form.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="birth" label="生日">
          <el-date-picker type="date" placeholder="选择日期" v-model="SignUp_form.birth" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item prop="introduction" label="签名">
          <el-input  type="textarea" placeholder="签名" v-model="SignUp_form.introduction" ></el-input>
        </el-form-item>
        <el-form-item prop="location" label="地区">
          <el-select v-model="SignUp_form.location" placeholder="地区" style="width:100%">
            <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="button">
          <el-button type="primary" @click="SignUp_vaildata()" round>注册</el-button>
          <el-button type="info" @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { rules, cities } from '../assets/js/form'
export default {
  name: 'SignUp',
  created () {
    this.SignUp_rulers = rules
    this.cities = cities
  },
  methods: {
    resetForm () {
      this.$refs.SignUpFormRef.resetFields()
    },
    SignUp_vaildata: function () {
      this.$refs.SignUpFormRef.validate(valid => {
        if (!valid) return
        const params = new URLSearchParams()
        params.append('username', this.SignUp_form.user_name)
        params.append('password', this.SignUp_form.user_password)
        params.append('resource', this.SignUp_form.resource)
        params.append('avator', '/img/user.jpg')
      })
    }

  },
  data () {
    return {
      SignUp_form: {
        user_name: '',
        user_password: '',
        checkPass: '',
        resource: '',
        phone_num: '',
        email: '',
        birth: '',
        introduction: '',
        location: '',
        avator: ''
      },
      cities: [],
      SignUp_rulers: {}
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/SingUp";

</style>
