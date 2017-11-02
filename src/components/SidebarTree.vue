<template>
    <div>
        <template v-for="value in this.menuData">
            <el-submenu :index="value.menu_name" v-if="value.node">
                <template slot="title">
                    <i class="el-icon-message"></i>
                    <span slot="title">{{value.menu_name}}</span>
                </template>
                <SidebarTree :menuData="value.node"></SidebarTree>
            </el-submenu>
            <el-menu-item :index="value.menu_name" v-else>
                <i class="el-icon-message"></i>
                <span slot="title">{{value.menu_name}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
  export default {
    props: ['menuData'],
    name: 'SidebarTree'
  }
</script>

