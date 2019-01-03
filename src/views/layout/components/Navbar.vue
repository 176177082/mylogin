<template>
  <el-header style="text-align: right; font-size: 12px" >
    <el-dropdown>
      <i class="el-icon-setting" ></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>用户名</span>
  </el-header>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style scoped>
  .el-header {
    background-color: #fff;
    color: #333;
    line-height: 60px;
    border-bottom: 1px solid #e6e6e6;
  }

</style>
