<template>
  <el-container class="mycontainer">
        <el-aside width="200px">
          <el-menu router background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff">
            <el-menu-item index="/taskpackagelist">
              <font-awesome-icon icon="home" size="lg"></font-awesome-icon>
              <span slot="title"> 主页</span>
            </el-menu-item>
            <el-menu-item index="/taskpackagelist">
              <font-awesome-icon :icon="['far', 'list-alt']" size="lg" />
              <span slot="title"> 任务包列表</span>
            </el-menu-item>
            <el-menu-item index="/taskpackagepartition">
              <font-awesome-icon icon="clipboard-list" size="lg"/>
              <span slot="title"> 任务包划分</span>
            </el-menu-item>
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
            <router-view></router-view>
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
    line-height: 100%;

  }

  .el-m{
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom:0;
    overflow-y: scroll;
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
