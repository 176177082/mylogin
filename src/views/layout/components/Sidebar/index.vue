<template>
  <el-aside width="200px" style="background-color: rgb(48, 65, 86)" >
    <el-menu router background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff">
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
    background-color: rgb(48, 65, 86);
    color: #333;
    bottom: 0;

  }

</style>
