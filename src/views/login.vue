<template>
  <el-form ref="form" v-model="form" >
    <h3 class="title">库管系统</h3>
    <el-form-item>
    <el-input placeholder="用户名" suffix-icon="el-icon-date" v-model="form.username" style="width: 20%" ></el-input>
    </el-form-item>
    <el-form-item>
      <el-input placeholder="密码" suffix-icon="el-icon-date" type="password" v-model="form.password" style="width: 20%" ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" v-on:click="login" style="width: 20%" >登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          username: '',
          password: ''

        }
      }
    },
    methods: {
      login () {
        console.log(this.form.username)
        console.log(this.form.password)
        console.log(process.env.NODE_ENV === 'production'
          ? 'http://production.com'
          : 'http://localhost:3000')
        console.log('submit!')
      }
    }
  }

</script>

<style scoped>

</style>
