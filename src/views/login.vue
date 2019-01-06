<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form ref="form" v-bind:model="loginForm" v-bind:rules="rules" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名">
            <el-button slot="prepend" icon="el-icon-date"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密 码" v-model="loginForm.password" v-on:keyup.enter.native="handlelogin('form')">
            <el-button slot="prepend" icon="el-icon-date"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" v-on:click="handlelogin(form)">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        // root root12345
        loginForm: {
          username: '',
          password: ''

        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      ...mapActions([
        'vuexLoginByUsername',
        'vuexGetUserInfo'
      ]),
      handlelogin (formName) {
        console.log(this.loginForm.username)
        console.log(this.loginForm.password)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.vuexLoginByUsername(this.loginForm).then(res => {
              console.log(res)
              this.vuexGetUserInfo()
              this.$router.push({
                name: 'home'
              })
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .login-wrap{
    position: relative;
    width:100%;
    height:100%;
    background-size: 100%;
  }
  .ms-title{
    width:100%;
    line-height: 50px;
    text-align: center;
    font-size:20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
  }
  .ms-login{
    position: absolute;
    left:50%;
    top:50%;
    width:350px;
    margin:-190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255,255,255, 0.3);
    overflow: hidden;
  }
  .ms-content{
    padding: 30px 30px;
  }
  .login-btn{
    text-align: center;
  }
  .login-btn button{
    width:100%;
    height:36px;
    margin-bottom: 10px;
  }

</style>
