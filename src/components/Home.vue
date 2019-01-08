<template>
  <el-container >
        <el-aside  class="sidebar">
          <el-menu class="sidebar-el-menu"  router background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" v-bind:collapse="iscollapse">
            <el-menu-item index="/taskpackagelist">
              <font-awesome-icon icon="home" size="lg"></font-awesome-icon>
              <span slot="title"> 主页</span>
            </el-menu-item>
            <el-menu-item index="/taskpackagelist">
              <font-awesome-icon icon="list-alt" size="lg" />
              <span slot="title"> 任务包列表</span>
            </el-menu-item>
            <el-menu-item index="/taskpackagepartition">
              <font-awesome-icon icon="clipboard-list" size="lg"/>
              <span slot="title"> 任务包划分</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header v-bind:class="{'content-collapse':iscollapse}">
            <el-dropdown>
              <font-awesome-icon icon="user-circle" size="2x"/>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>用户名</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-header>
          <el-main>
            <el-table :data="tableData" class="content-box" v-bind:class="{'content-collapse':iscollapse}">
              <el-table-column prop="date" label="日期" width="140">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120">
              </el-table-column>
              <el-table-column prop="address" label="地址">
              </el-table-column>
            </el-table>
            <transition name="fade-transform" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-main>
        </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        iscollapse: false
      }
    }
  }
</script>

<style scoped>
  .el-container{
    padding: 0px 0px 0px 0px ;
  }
  .el-header{
    background-color: #B3C0D1;
    padding: 0px 10px 0px 250px ;
    color: #333;
    text-align: right;
    line-height: 60px;
    border-bottom: 1px solid #e6e6e6;
    font-size: 12px
  }
  /*.el-aside {*/
    /*background-color: rgb(48, 65, 86);*/
    /*color: #333;*/
    /*line-height: 100%;*/

  /*}*/
  /*.el-main {*/
    /*background-color: #E9EEF3;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 100%;*/
  /*}*/

  .content {
    width: auto;
    height: 100%;
    padding: 0px 0px 0px 300px ;
    overflow-y: scroll;
    box-sizing: border-box;
  }
  .sidebar{
    display: block;
    position: absolute;
    left: 0;
    top: 0px;
    bottom:0;
    overflow-y: scroll;
    width:300px;
  }
  .sidebar::-webkit-scrollbar{
    width: 0;
  }

  .sidebar > ul {
    height:100%;
  }

</style>
