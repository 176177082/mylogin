<template>
  <el-form ref="form" v-model="loginForm" >
    <h3 class="title">库管系统</h3>
    <el-form-item>
    <el-input placeholder="用户名" suffix-icon="el-icon-date" v-model="loginForm.username" style="width: 20%" ></el-input>
    </el-form-item>
    <el-form-item>
      <el-input placeholder="密码" suffix-icon="el-icon-date" type="password" v-model="loginForm.password" style="width: 20%" ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" v-on:click="handlelogin" style="width: 20%" >登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        loginForm: {
          username: '',
          password: ''

        }
      }
    },
    methods: {
      ...mapActions([
        'vuexLoginByUsername',
        'vuexGetUserInfo'
      ]),
      handlelogin () {
        console.log(this.loginForm.username)
        console.log(this.loginForm.password)
        this.vuexLoginByUsername(this.loginForm).then(res => {
          console.log(res)
          this.vuexGetUserInfo()
          this.$router.push({
            name: 'Taskpackage'
          })
        })
      }
    }
    }

</script>

<style scoped>

</style>
