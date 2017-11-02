<template>
    <el-menu :style="{'min-height': documentHeight}" class="menu-Bar" :collapse="isCollapse" :router="true">
        <SidebarTree :menuData="this.menuData"></SidebarTree>
    </el-menu>
</template>

<script>
  import SidebarTree from '@/components/SidebarTree'

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
    },
    components: {
      'SidebarTree': SidebarTree
    }
  }
</script>

<style>
    .menu-Bar:not(.el-menu--collapse) {
        width: 200px;
    }
</style>
