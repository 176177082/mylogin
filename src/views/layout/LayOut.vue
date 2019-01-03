<template>
  <div>
    <!--
    <el-container >
      <sidebar/>
      <el-container direction="vertical">
        <navbar/>
        <app-main/>
      </el-container>

    </el-container>
    -->
    <el-container class="mycontainer">
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  // import { Navbar, Sidebar, AppMain } from './components'
  export default {
    name: 'LayOut'// ,
    // components: {
    //   Navbar,
    //   Sidebar,
    //   AppMain
    // }
  }
</script>

<style>
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 100%;
  }

  .el-aside {
    background-color: #D3DCE6;
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
