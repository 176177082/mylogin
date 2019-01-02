<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router >
      <el-submenu >
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item index="/about" >选项1</el-menu-item>
        <el-menu-item index="/about1" >选项11</el-menu-item>

      </el-submenu>

    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        isCollapse: true
      }
    }
  }
</script>

<style scoped>
  .el-aside {
    background-color: #B3C0D1;
    color: #333;
  }

</style>
