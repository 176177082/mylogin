<template>
  <el-container class="mycontainer">
        <el-aside width="200px">
          <el-menu router background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff">
            <el-submenu >
              <template slot="title"><i class="el-icon-message"></i>导航一</template>
              <el-menu-item index="/about" >选项1</el-menu-item>
              <el-menu-item index="/about1" >选项11</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header >
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
          <el-main>
            <el-table :data="tableData">
              <el-table-column prop="date" label="日期" width="140">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120">
              </el-table-column>
              <el-table-column prop="address" label="地址">
              </el-table-column>
            </el-table>
            <div id="nav">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
              <router-view/>
            </div>
          </el-main>
        </el-container>
      </el-container>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style scoped>
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: right;
    line-height: 60px;
    border-bottom: 1px solid #e6e6e6;
    font-size: 12px
  }
  .el-aside {
    background-color: rgb(48, 65, 86);
    color: #333;
    text-align: center;
    line-height: 100%;

  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
  }

  .mycontainer {
    position: absolute;
    left: 0px;
    right: 0;
    top: 0px;
    bottom: 0;
    padding-bottom: 0px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f0f0f0;
  }
</style>
