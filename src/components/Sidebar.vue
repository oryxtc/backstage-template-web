<template>
    <div>
        <!--<el-container style="height: 500px; border: 1px solid #eee">-->
            <!--<el-aside width="200px" style="background-color: rgb(238, 241, 246)">-->
                <el-menu class="menu-Bar" :collapse="isCollapse">
                    <SidebarTree :menuData="this.menuData"></SidebarTree>
                </el-menu>

            <!--</el-aside>-->
            <el-container>
                <!--<el-header style="text-align: right; font-size: 12px">-->
                    <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
                        <!--<el-radio-button :label="false">展开</el-radio-button>-->
                        <!--<el-radio-button :label="true">收起</el-radio-button>-->
                    <!--</el-radio-group>-->

                    <!--<el-dropdown>-->
                        <!--<i class="el-icon-setting" style="margin-right: 15px"></i>-->
                        <!--<el-dropdown-menu slot="dropdown">-->
                            <!--<el-dropdown-item>查看</el-dropdown-item>-->
                            <!--<el-dropdown-item>新增</el-dropdown-item>-->
                            <!--<el-dropdown-item>删除</el-dropdown-item>-->
                        <!--</el-dropdown-menu>-->
                    <!--</el-dropdown>-->
                    <!--<span>王小虎</span>-->
                <!--</el-header>-->

                <!--<el-main>-->
            <!--1123-->
                <!--</el-main>-->
            </el-container>
        <!--</el-container>-->



    </div>
</template>
<script>
  import SidebarTree from '@/components/SidebarTree'

  export default {
    data () {
      return {
        isCollapse: false,
        menuData: []
      }
    },
    props: ['apiUrl'],
    created: function () {
      this.getMenu()
    },
    methods: {
      getMenu: function () {
        this.$http.get(this.apiUrl + 'menu').then(function (response) {
          this.menuData = response.data
        }, function (error) {
          console.log(error)
        })
      }
    },
    components: {
      'SidebarTree': SidebarTree
    }
  }
</script>
<style>
    .menu-Bar:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>
