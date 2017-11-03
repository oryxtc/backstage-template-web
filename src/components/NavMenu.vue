<template>
    <el-menu :style="{'min-height': documentHeight}" class="menu-Bar" :collapse="isCollapse" :router="true">
        <template v-for="value in this.menuData">
            <el-submenu :index="value.menu_name" v-if="value.node">
                <template slot="title">
                    <i class="el-icon-message"></i>
                    <span slot="title">{{value.menu_name}}</span>
                </template>
                <el-menu-item :index="value.menu_name" v-for="value in value.node">
                    <i class="el-icon-message"></i>
                    <span slot="title">{{value.menu_name}}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item :index="value.menu_name" v-else>
                <i class="el-icon-message"></i>
                <span slot="title">{{value.menu_name}}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        menuData: [],
        documentHeight: document.documentElement.clientHeight + 'px'
      }
    },
    props: ['apiUrl', 'isCollapse'],
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
    }
  }
</script>

<style>
    .menu-Bar:not(.el-menu--collapse) {
        width: 130px;
    }
</style>
