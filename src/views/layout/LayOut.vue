<template>
  <div>
    <el-container>
      <sidebar/>
      <div>
      <el-container direction="vertical">
        <navbar/>
        <app-main/>
      </el-container>
      </div>
    </el-container>
  </div>
</template>

<script>
  import { Navbar, Sidebar, AppMain } from './components'
  export default {
    name: 'LayOut',
    components: {
      Navbar,
      Sidebar,
      AppMain
    }
  }
</script>

<style scoped>

</style>
