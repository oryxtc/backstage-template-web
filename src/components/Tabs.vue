<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="1">
                <i class="el-icon-d-arrow-left" @click="toggleMenu"></i>
            </el-col>
            <el-col :span="6" :offset="6">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>



        <span>王小虎</span>
    </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: ['isCollapse'],
    created: function () {
    },
    methods: {
      toggleMenu: function () {
        this.isCollapse = !this.isCollapse
      }
    }
  }
</script>