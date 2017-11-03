<template>
    <el-container style=" border: 1px solid #eee">
        <!--左侧菜单栏-->
        <el-aside width="auto" style="background-color: rgb(238, 241, 246)">
            <!--菜单栏组件-->
            <NavMenu :apiUrl="this.apiUrl" :isCollapse="this.isCollapse" ></NavMenu>
        </el-aside>
        <!--右侧容器-->
        <el-container>
            <!--头部-->
            <el-header style="text-align: right; font-size: 12px">
                <Tabs :isCollapse="this.isCollapse"></Tabs>
            </el-header>
            <!--主体内容-->
            <el-main>
                <router-view :apiUrl="this.apiUrl"/>
            </el-main>
        </el-container>
    </el-container>
</template>


<script>
  export default {
    data () {
      return {
        isCollapse: true
      }
    },
    methods: {
    }
  }
</script>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }
    .el-aside {
        color: #333;
    }
</style>
