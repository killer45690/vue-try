<template>
    <div class="login_container">
      <div class="login_box">
        <div class="logo_box">
          <img src="../assets/logo.png" alt="">

        </div>
        <el-form ref="loginFormRef" :model="login_form" :rules="login_rulers"  label-width="0px" class="login_form">
          <el-form-item prop="user_name">
            <el-input v-model="login_form.user_name"  prefix-icon="iconfont icon-icon-test5"></el-input>
          </el-form-item >
          <el-form-item prop="user_password">
            <el-input v-model="login_form.user_password" type="password" prefix-icon="iconfont icon-icon-test3"></el-input>
          </el-form-item>
          <el-form-item class="button">
            <el-button type="primary" @click="login_vaildata()" round>登录</el-button>
            <el-button type="info" @click="resetForm()">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {

  name: 'login',
  methods: {
    resetForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login_vaildata: function () {
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) return
        const params = new URLSearchParams()
        // eslint-disable-next-line no-unused-vars
        const _this = this
        params.append('username', this.login_form.user_name)
        params.append('password', this.login_form.user_password)
        this.$http.post('user/login/status', params)
          .then(response => {
            if (response.data.code !== 1) {
              _this.$message.warning(response.data.msg)
            } else {
              _this.$message.success(response.data.msg)
            }
          }, err => {
            _this.$message.error(err)
          })
      })
    }

  },
  data () {
    return {
      login_form: {
        user_name: '',
        user_password: ''
      },
      login_rulers: {
        user_name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度3-10', trigger: 'blur' }
        ],
        user_password: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度3-10', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/Login";

</style>
