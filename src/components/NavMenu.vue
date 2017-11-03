<template>
    <el-menu :style="{'min-height': documentHeight}" class="menu-Bar" :collapse="isCollapse" :router="true">
        <template v-for="value in this.menuData">
            <el-submenu :index="value.menu_name" v-if="value.node">
                <template slot="title">
                    <i class="el-icon-message"></i>
                    <span slot="title">{{value.menu_name}}</span>
                </template>
                <el-menu-item :index="value.menu_name" v-for="nodeVal in value.node" :key="value.id">
                    <i class="el-icon-message"></i>
                    <span slot="title">{{nodeVal.menu_name}}</span>
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
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        menuData: [],
        documentHeight: document.documentElement.clientHeight + 'px'
      }
    },
    props: ['apiUrl'],
    created: function () {
      this.getMenu()
    },
    computed: {
      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState([
        'isCollapse'
      ])
    },
    methods: {
      getMenu: function () {
        this.$http.get(this.$store.state.apiUrl + 'menu').then(function (response) {
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
