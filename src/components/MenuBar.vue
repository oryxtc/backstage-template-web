<template>
    <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu class="menu-Bar" :collapse="isCollapse">
            <MenuTree :menuData="this.menuData"></MenuTree>
        </el-menu>
    </div>
</template>
<script>
  import MenuTree from '@/components/MenuTree'

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
      'MenuTree': MenuTree
    }
  }
</script>
<style>
    .menu-Bar:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
