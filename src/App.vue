<template>
    <el-container style=" border: 1px solid #eee">
        <!--左侧菜单栏-->
        <el-aside width="auto" style="background-color: rgb(238, 241, 246)" @mouseenter.native="toggleShow(false)"
                  @mouseleave.native="toggleShow(true)">
            <!--菜单栏组件-->
            <Sidebar :apiUrl="this.apiUrl" :isCollapse="this.isCollapse"></Sidebar>
        </el-aside>
        <!--右侧容器-->
        <el-container>
            <!--头部-->
            <el-header style="text-align: right; font-size: 12px">
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>

                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
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
      toggleShow: function (flag) {
        console.log(this.$refs)
        console.log(document.documentElement.clientHeight)
        this.isCollapse = flag
      }
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
