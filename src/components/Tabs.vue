<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="1">
                <i :class="[isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left']" @click="toggleMenu"></i>
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
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
      }
    },
    props: [],
    created: function () {
    },
    computed: {
      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState([
        'isCollapse'
      ])
    },
    methods: {
      toggleMenu: function () {
        this.$store.commit('toggleMenu')
      }
    }
  }
</script>